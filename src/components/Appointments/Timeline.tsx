interface TimelineProps {
  currentTime: string;
}

export function Timeline({ currentTime }: TimelineProps) {
  return (
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 flex items-center pointer-events-none">
      {/* Left red triangle (arrow) */}
      <div
        className="w-0 h-0 ml-[-6px]"
        style={{
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          borderLeft: "6px solid #ef4444", // red-500
        }}
      />

      {/* Horizontal red line */}
      <div className="flex-1 h-[2px] bg-red-500 relative" />

      {/* Time label centered on the line */}
      <div className="absolute left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-semibold px-2 py-[2px] rounded shadow">
        {currentTime}
      </div>
    </div>
  );
}
