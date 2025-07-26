import { Clock, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AppointmentCardProps {
  patient: string;
  condition: string;
  avatar?: string;
  backgroundColor: string; // Tailwind class like bg-green-100
  borderColor?: string; // Tailwind class like border-green-300
  isStriped?: boolean;
  hasDoctorsLabel?: boolean;
  status: "past" | "current" | "future";
  time: string;
}

export function AppointmentCard({
  patient,
  condition,
  avatar,
  backgroundColor,
  borderColor = "border-gray-200",
  isStriped = false,
  hasDoctorsLabel = false,
  status,
  time,
}: AppointmentCardProps) {
  // Determine stripe background color based on borderColor
  const stripeColor = borderColor.includes("red")
    ? "rgba(248, 113, 113, 0.3)"
    : borderColor.includes("blue")
    ? "rgba(96, 165, 250, 0.3)"
    : borderColor.includes("green")
    ? "rgba(74, 222, 128, 0.3)"
    : "rgba(100, 116, 139, 0.3)";

  return (
    <div
      className={cn(
        "relative rounded-xl px-2.5 py-2 min-h-[80px] flex flex-col justify-between border shadow-sm w-full overflow-hidden transition-all",
        !isStriped && backgroundColor, // only apply plain bg if not striped
        borderColor,
        status === "past" && "opacity-50 pointer-events-none"
      )}
    >
      {/* Striped background layer */}
      {isStriped && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              ${stripeColor} 0px,
              ${stripeColor} 8px,
              transparent 8px,
              transparent 16px
            )`,
          }}
        />
      )}

      {/* Top-right menu icon */}
      <button className="absolute top-1.5 right-1.5 p-1 rounded hover:bg-white/30 z-10">
        <MoreVertical className="w-3.5 h-3.5 text-gray-500 rotate-90" />
      </button>

      {/* Avatar, Patient Info */}
      <div className="flex items-start gap-2 z-10">
        <Avatar className="w-7 h-7 border border-white shadow">
          <AvatarImage
            src={avatar || ""}
            alt={patient}
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="text-[10px] bg-muted text-muted-foreground">
            {patient
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          {/* Name */}
          <p className="text-[11px] font-semibold text-gray-900 truncate">
            {patient}
          </p>

          {/* Time */}
          <div className="flex items-center gap-[4px] text-[9px] text-gray-500 mt-[1px]">
            <Clock className="w-3 h-3 text-gray-400" />
            <span>{time}</span>
          </div>

          {/* Condition + Optional Doctor badge */}
          <div className="flex flex-wrap items-center gap-[4px] mt-[2px]">
            <span className="text-[9.5px] font-bold text-black bg-white border border-gray-300 px-2 py-[2px] rounded-full truncate whitespace-nowrap max-w-[100px]">
              {condition}
            </span>

            {hasDoctorsLabel && (
              <span className="flex items-center gap-1 text-[9.5px] font-bold text-black bg-white border border-gray-300 px-2 py-[2px] rounded-full truncate whitespace-nowrap">
                <img
                  src="profile.jpg"
                  alt="doctor"
                  className="w-4 h-4 object-cover rounded-full"
                />
                Doctors
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
