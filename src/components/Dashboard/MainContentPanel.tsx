import { useState } from "react";
import {
  Plus, Thermometer, Heart, Droplet, Scale,
  CalendarDays, Edit, Trash2, User2, Settings,
} from "lucide-react";
import {
  Card, CardHeader, CardTitle, CardContent
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tabs, TabsList, TabsTrigger, TabsContent
} from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  upcomingAppointment, doctors,
  healthReadings, appointments
} from "@/lib/data/mockData";

const healthIcons = {
  thermometer: Thermometer,
  heart: Heart,
  droplet: Droplet,
  scale: Scale,
};

export function MainContentPanel() {
  const [appointmentTab, setAppointmentTab] = useState("upcoming");

  return (
    <div className="space-y-6 text-[9.5px] sm:text-[10px] font-normal text-black">
      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Upcoming Appointment Card */}
        <div className="relative rounded-xl overflow-hidden shadow-sm w-full h-[140px]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] z-0" />
          <Card className="relative z-10 bg-transparent text-white border-none shadow-none h-full">
            <CardContent className="h-full px-5 py-4 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold tracking-tight">
                    Upcoming Appointment
                  </p>
                  <h3 className="text-[13px] font-medium tracking-tight">
                    {upcomingAppointment.type}
                  </h3>
                </div>
                <Button variant="ghost" size="sm" className="text-white p-1 h-6 w-6">
                  <span className="text-lg">⋯</span>
                </Button>
              </div>
              <hr className="border-white/40 my-2" />
              <div className="flex items-center justify-between text-[9.5px]">
                <div className="flex items-center gap-2">
                  <User2 className="w-4 h-4" />
                  <span>{upcomingAppointment.doctor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{upcomingAppointment.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#F4F6F8] shadow-sm min-h-[140px]">
          <CardHeader className="pt-3 pb-1 px-4">
            <div className="flex items-center justify-between w-full">
              <CardTitle className="text-[11px] sm:text-[11.5px] font-bold text-black">
                My Doctors
              </CardTitle>
              <div className="flex items-center gap-1">
                <Settings className="w-[14px] h-[14px] text-muted-foreground" />
                <Button variant="ghost" size="sm" className="p-1 h-6 w-6 text-muted-foreground">
                  ⋯
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-4 pt-1 pb-3">
            <div className="grid grid-cols-2 gap-[6px] sm:grid-cols-2">
              {[...doctors.slice(0, 3), { id: "add", name: "Add New", avatar: "", isAddNew: true } as any].map(
                (doctor) => (
                  <div
                    key={doctor.id}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2 py-[4px] w-fit text-[8px] font-medium",
                      "whitespace-nowrap",
                      doctor.isAddNew
                        ? "border border-dashed border-[#3B82F6] bg-[#EAF6FF] text-[#3B82F6]"
                        : "border border-[#C8E4FB] bg-[#EAF6FF] text-black"
                    )}
                  >
                    {doctor.isAddNew ? (
                      <>
                        <Plus className="h-3 w-3" />
                        {doctor.name}
                      </>
                    ) : (
                      <>
                        <Avatar className="h-4 w-4">
                          <AvatarImage
                            src={doctor.avatar}
                            className="object-cover rounded-full"
                          />
                          <AvatarFallback className="text-[6.5px]">
                            {doctor.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="whitespace-nowrap">{doctor.name}</span>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Latest Health Readings */}
      <Card className="bg-[#F4F6F8] shadow-sm">
        <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between">
          <CardTitle className="text-[11px] font-bold text-black">Latest Health Readings</CardTitle>
          <div className="flex items-center gap-1 px-2 py-[3px] border border-[#E4E8EE] rounded-md bg-white w-fit text-[9px] text-black">
            Last visit
            <CalendarDays className="w-[12px] h-[12px] text-[#2A85FF]" />
          </div>

        </CardHeader>

        <CardContent className="px-4 pb-4 pt-2">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
            {/* Row 1 */}
            {[
              {
                id: 1,
                icon: Thermometer,
                label: "Body Temperature",
                value: "99.8",
                unit: "°F",
                bg: "bg-[#FFF3F0]",
                color: "text-[#F85A2B]"
              },
              {
                id: 2,
                icon: Heart,
                label: "Blood Pressure",
                value: "123/95",
                unit: "mmHg",
                bg: "bg-[#FFF1F7]",
                color: "text-[#D12986]"
              },
              {
                id: 3,
                icon: Droplet,
                label: "Blood Sugar",
                value: "112",
                unit: "mg/dl",
                bg: "bg-[#EFF4FF]",
                color: "text-[#2A85FF]"
              },
            ].map((reading) => (
              <div key={reading.id} className="flex items-center gap-2 p-2 rounded-lg border border-[#E4E8EE] shadow-sm bg-white">
                <div className={`h-8 w-8 rounded-md flex items-center justify-center ${reading.bg}`}>
                  <reading.icon className={`w-[16px] h-[16px] ${reading.color}`} />
                </div>
                <div className="space-y-[2px]">
                  <p className="text-[8.5px] text-muted-foreground">{reading.label}</p>
                  <p className="text-[10px] font-semibold text-black">
                    {reading.value} <span className="text-[8px]">{reading.unit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 mt-3">
            {/* Row 2 */}
            <div className="flex items-center gap-2 p-2 rounded-lg border border-[#E4E8EE] shadow-sm bg-white">
              <div className="h-8 w-8 rounded-md flex items-center justify-center bg-[#ECFDF3]">
                <Scale className="w-[16px] h-[16px] text-[#039855]" />
              </div>
              <div className="space-y-[2px]">
                <p className="text-[8.5px] text-muted-foreground">Body Weight</p>
                <p className="text-[10px] font-semibold text-black">
                  84 <span className="text-[8px]">kg</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-dashed border-[#2A85FF] bg-[#EAF6FF] justify-center">
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 text-[#2A85FF] hover:bg-transparent"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <p className="text-[9px] font-medium text-[#2A85FF]">Add More</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Section */}
      <Card className="bg-[#F4F6F8] shadow-sm">
        <CardHeader className="pt-3 pb-1 px-4">
          <div className="flex items-center justify-between w-full">
            <CardTitle className="text-[11px] sm:text-[11.5px] font-bold text-black">
              Appointments
            </CardTitle>
            <Button
              size="sm"
              className="h-6 px-2 text-[8.5px] rounded-sm text-white font-medium bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] hover:opacity-90 transition flex items-center gap-[4px]"
            >
              <Plus className="h-[10px] w-[10px]" />
              New
            </Button>



          </div>
        </CardHeader>

        <CardContent className="px-4 pb-4 pt-2 bg-white rounded-md mt-2">
          {/* Tab Switcher */}
          <div className="border-b border-[#E4E4E7]">
            <div className="flex space-x-6 text-[9.5px] font-medium">
              {["upcoming", "completed", "cancelled"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAppointmentTab(tab)}
                  className={cn(
                    "px-1 pb-2 border-b-2 transition-all duration-200",
                    appointmentTab === tab
                      ? "text-black border-blue-500"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  )}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="pt-4 overflow-x-auto custom-scrollbar">
            {appointmentTab === "upcoming" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[9px] text-muted-black font-bold">Appoint for</TableHead>
                    <TableHead className="text-[9px] text-muted-black font-bold">Doctor</TableHead>
                    <TableHead className="text-[9px] text-muted-black font-bold">Date & Time</TableHead>
                    <TableHead className="text-[9px] text-muted-black font-bold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="text-[9.5px] font-medium whitespace-nowrap">
                        {appointment.type}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarImage
                              src={appointment.doctorAvatar}
                              className="rounded-full object-cover"
                            />
                            <AvatarFallback className="text-[7px]">
                              {appointment.doctor.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-[9.5px]">{appointment.doctor}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-[9.5px] whitespace-nowrap">
                        {appointment.date}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {appointmentTab === "completed" && (
              <div className="text-muted-foreground text-center py-8 text-[9px]">
                No completed appointments
              </div>
            )}

            {appointmentTab === "cancelled" && (
              <div className="text-muted-foreground text-center py-8 text-[9px]">
                No cancelled appointments
              </div>
            )}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
