import { Circle } from "lucide-react";

export function NotAvailableCard() {
  return (
    <div className="w-full min-h-[80px] rounded-xl border border-gray-200 bg-[repeating-linear-gradient(135deg,#f3f4f6_0_8px,#e5e7eb_8px_16px)] flex items-center justify-center px-2">
      <div className="flex items-center gap-1 bg-[#f3f4f6] px-2 py-[2px] rounded-md max-w-full overflow-hidden">
        <Circle
          className="w-[8px] h-[8px] text-black flex-shrink-0"
          fill="currentColor"
        />
        <span className="text-[10px] font-bold text-black truncate">
          Not Available
        </span>
      </div>
    </div>
  );
}
