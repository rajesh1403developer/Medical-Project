import { Search, Bell, CalendarDays, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-16 bg-white border-b border-border px-4 md:px-6 flex items-center justify-between w-full flex-wrap gap-2">
      {/* Left: Search */}
      <div className="flex items-center gap-4 flex-1 max-w-md w-full">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2A85FF] h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-[#F7F9FC] border border-[#E0E6ED] rounded-md text-sm placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Date box with icon on right */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E0E6ED] text-black text-sm rounded-md font-medium shadow-sm">
          <span>{currentDate}</span>
          <CalendarDays className="h-4 w-4 text-[#2A85FF]" />
        </div>


        {/* Notification */}
        <div className="relative rounded-full bg-[#F0F2F5] p-2 w-9 h-9 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute -top-1 -left-1 bg-[#2A85FF] text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-semibold shadow-sm">
            2
          </span>
        </div>


       
        <div className="relative flex items-center gap-2">
         
          <div className="relative h-10 w-10 rounded-full bg-white">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_135deg,_#2A85FF_0deg,_#00D9A5_298.8deg,_transparent_298.8deg_360deg)] z-0" />

            <div className="absolute inset-[2px] bg-white rounded-full z-10 flex items-center justify-center overflow-hidden">
              <img
                src="profile.jpg"
                alt="Zuri Okeke"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

     
          <span className="text-sm font-medium text-black-900 hidden sm:inline">
            Zuri Okeke
          </span>
          <ChevronDown className="h-4 w-4 text-black-500 hidden sm:inline" />
        </div>



      </div>
    </header>
  );
}
