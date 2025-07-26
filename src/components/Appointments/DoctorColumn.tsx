import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

interface DoctorColumnProps {
  name: string;
  avatar: string;
  count: number;
}

export function DoctorColumn({ name, avatar, count }: DoctorColumnProps) {
  return (
    <div className="flex items-start justify-between gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 w-full max-w-full">
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-2 min-w-0 flex-shrink">
        <Avatar className="w-9 h-9 border border-white shadow-sm shrink-0">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-[10px] bg-gray-100 text-gray-600">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col min-w-0">
          <p className="text-[11px] font-bold text-gray-900 truncate leading-tight">
            {name}
          </p>
          <p className="text-[10px] text-gray-500 leading-tight">
            Today's appointment
          </p>
        </div>
      </div>

      {/* Right: stacked menu + count */}
      <div className="flex flex-col items-end justify-start gap-[4px]">
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
        <span className="text-[10px] font-semibold bg-gray-100 text-gray-800 px-2 py-[2px] rounded-md">
          {count}
        </span>
      </div>
    </div>
  );
}
