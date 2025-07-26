import {
  Search,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface AppointmentHeaderProps {
  currentDate: string;
  dateRange: string;
  onViewChange: (view: string) => void;
  activeView: string;
}

export function AppointmentHeader({
  currentDate,
  dateRange,
  onViewChange,
  activeView,
}: AppointmentHeaderProps) {
  const viewButtons = [
    { id: "monthly", label: "Monthly view" },
    { id: "weekly", label: "Weekly view" },
    { id: "daily", label: "Daily view" },
    { id: "list", label: "List view" },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      {/* Top Row: Date + Actions */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-3">
        {/* Left: Calendar */}
        <div className="flex items-center gap-3">
          <div className="bg-[#F3F4F6] rounded-md px-2 py-1 shadow-sm border border-gray-300 w-10 h-10 flex flex-col justify-center items-center leading-none">
            <p className="text-[10px] font-semibold text-blue-700">JUL</p>
            <p className="text-[13px] font-bold text-gray-900">21</p>
          </div>
          <div>
            <h1 className="text-[15px] font-bold text-gray-900">{currentDate}</h1>
            <p className="text-[11px] text-gray-500">{dateRange}</p>
          </div>
        </div>

        {/* Right: Filter → Views → Button */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Filter */}
          <Button
            variant="ghost"
            size="sm"
            className="text-[11px] font-bold h-8 px-3 bg-gray-100 text-gray-700 hover:text-black"
          >
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>

          {/* View Switcher */}
          <div className="flex items-center bg-gray-100 rounded-md p-1 gap-x-[2px]">
            {viewButtons.map((button) => (
              <Button
                key={button.id}
                variant="ghost"
                size="sm"
                onClick={() => onViewChange(button.id)}
                className={cn(
                  "text-[11px] font-bold px-3 h-8 rounded-sm transition-colors duration-200",
                  activeView === button.id
                    ? "bg-[#2A85FF] text-white shadow-sm"
                    : "text-gray-700 hover:bg-[#2A85FF] hover:text-white"
                )}
              >
                {button.label}
              </Button>
            ))}
          </div>

          {/* New Appointment */}
          <Button className="h-8 px-3 text-[11px] font-semibold text-white bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] hover:opacity-90 flex items-center gap-1">
            New Appointment
            <Plus className="w-[13px] h-[13px]" />
          </Button>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="border-b border-gray-300 my-2" />

      {/* Bottom Row: Search + Arrows + Home */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[13px] h-[13px] text-blue-500" />
          <Input
            placeholder="Search doctor name..."
            className="pl-8 h-8 w-[240px] text-[11px] border border-gray-200 bg-gray-50 rounded-md"
          />
        </div>

        {/* Right controls: Home + Arrows */}
        <div className="flex items-center gap-2">
          {/* Home Button - goes BEFORE arrows */}
          <button
            onClick={() => navigate("/")}
            title="Go to Home"
            className="w-8 h-8 rounded-md border border-gray-300 bg-gray-100 hover:bg-[#2A85FF] group flex items-center justify-center transition-colors"
          >
            <Home className="w-[16px] h-[16px] text-gray-700 group-hover:text-white" />
          </button>

          {/* Arrow buttons */}
          <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center">
            <ChevronLeft className="w-[12px] h-[12px] text-gray-700" />
          </button>
          <button className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center">
            <ChevronRight className="w-[12px] h-[12px] text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
