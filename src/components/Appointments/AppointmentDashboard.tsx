import { useState } from "react";
import { AppointmentHeader } from "./AppointmentHeader";
import { DoctorColumn } from "./DoctorColumn";
import { TimeSlot } from "./TimeSlot";
import { AppointmentCard } from "./AppointmentCard";
import { NotAvailableCard } from "./NotAvailableCard";
import { Timeline } from "./Timeline";
import appointmentData from "@/data/appointments.json";

export function AppointmentDashboard() {
  const [activeView, setActiveView] = useState("daily");
  const { doctors, appointments, timeSlots, currentTime } = appointmentData;

  const currentTimeIndex = timeSlots.findIndex((slot) => {
    const slotHour = parseInt(slot.split(":")[0]);
    return slotHour === parseInt(currentTime.split(":")[0]);
  });

  const getAppointment = (time: string, doctorId: string) => {
    return appointments.find(
      (apt) => apt.time === time && apt.doctorId === doctorId
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <AppointmentHeader
          currentDate="July 2025"
          dateRange="Jul 20, 2025 – Jul 26, 2025"
          onViewChange={setActiveView}
          activeView={activeView}
        />
      </div>

      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-x-auto custom-scrollbar">
          <div className="min-w-[1000px]">

            {/* Header Row */}
            <div className="grid grid-cols-[70px_repeat(5,1fr)] gap-2 p-3 bg-white border-b border-gray-200">
              <div className="sticky left-0 z-30 bg-white text-[11px] font-bold text-black w-[70px] min-w-[70px] flex items-center justify-center">
                GMT
              </div>
              {doctors.map((doctor) => (
                <DoctorColumn
                  key={doctor.id}
                  name={doctor.name}
                  avatar={doctor.avatar}
                  count={doctor.count}
                />
              ))}
            </div>

            {/* Time Slot Rows */}
            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="relative">
                {/* Timeline red line */}
                {timeIndex === currentTimeIndex && (
                  <div className="absolute left-[70px] right-0 z-10">
                    <Timeline currentTime={currentTime} />
                  </div>
                )}

                <div className="grid grid-cols-[70px_repeat(5,1fr)] gap-2 border-b border-gray-100 px-3 py-2">
                  {/* Time Column (Sticky Left) */}
                  <div className="sticky left-0 z-20 bg-white text-[11px] font-semibold text-gray-700 w-[70px] min-w-[70px] flex items-center justify-center">
                    <TimeSlot
                      time={time}
                      isCurrentTime={timeIndex === currentTimeIndex}
                    />
                  </div>

                  {/* Doctor Appointment Slots */}
                  {doctors.map((doctor) => {
                    const appointment = getAppointment(time, doctor.id);
                    return (
                      <div key={`${time}-${doctor.id}`} className="min-h-[80px]">
                        {appointment ? (
                          <AppointmentCard
                            patient={appointment.patient}
                            condition={appointment.condition}
                            avatar={appointment.avatar}
                            backgroundColor={appointment.backgroundColor}
                            borderColor={appointment.borderColor}
                            isStriped={appointment.isStriped}
                            status={appointment.status as
                              | "past"
                              | "current"
                              | "future"}
                            hasDoctorsLabel={appointment.hasIcon}
                            time={time}
                          />
                        ) : (
                          <NotAvailableCard />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
