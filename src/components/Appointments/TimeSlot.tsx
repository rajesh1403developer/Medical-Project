import { cn } from "@/lib/utils";

interface TimeSlotProps {
  time: string;
  isCurrentTime?: boolean;
}

export function TimeSlot({ time, isCurrentTime = false }: TimeSlotProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-center min-h-[80px] w-[70px] border-r border-gray-200 bg-white px-2",
        isCurrentTime && "bg-[#FFF1F0]"
      )}
    >
      {/* Red time marker on the left if current */}
      {isCurrentTime && (
        <div className="absolute left-0 top-0 h-full w-[2px] bg-red-500" />
      )}

      <div className="text-center">
        <p className="text-[11px] text-gray-800 font-bold leading-tight mt-[2px]">
          {time}
        </p>
      </div>
    </div>
  );
}
