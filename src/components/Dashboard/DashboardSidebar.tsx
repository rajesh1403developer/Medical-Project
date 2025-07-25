// src/components/Dashboard/DashboardSidebar.tsx
import { useState } from "react";
import {
  Home, Calendar, Users, UserCheck, FileText, HelpCircle,
  Settings, Shield, MessageSquare, FileCheck, Moon, Sun,
  ChevronLeft, ChevronRight, ChevronDown, ChevronRight as ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType | string;
  group?: string;
  active?: boolean;
  isLogo?: boolean;
  children?: SidebarItem[];
}

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "logo",
    label: "Med Dashboard",
    icon: "/logo.png",
    group: "logo",
    isLogo: true
  },
  { id: "home", label: "Home", icon: Home, active: true, group: "home" },
  { id: "appointments", label: "Appointments", icon: Calendar, group: "main" },
  { id: "family", label: "My Family", icon: Users, group: "main" },
  { id: "doctors", label: "My Doctors", icon: UserCheck, group: "main" },
  { id: "reports", label: "Reports", icon: FileText, group: "main" },
  { id: "support", label: "Support Tickets", icon: HelpCircle, group: "main" },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    group: "other",
    children: [{ id: "profile", label: "Profile Settings", icon: UserCheck }]
  },
  { id: "security", label: "Security", icon: Shield, group: "other" },
  { id: "feedback", label: "Support and Feedback", icon: MessageSquare, group: "other" },
  { id: "terms", label: "Terms and Services", icon: FileCheck, group: "other" },
];

export function DashboardSidebar({ collapsed, onToggleCollapse }: DashboardSidebarProps) {
  const [isDark, setIsDark] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const renderItems = (group: string) =>
    sidebarItems
      .filter((item) => item.group === group)
      .map((item) => {
        const isActive = item.active;
        const isLogo = item.isLogo;
        const isOpen = openDropdown === item.id;

        return (
          <div key={item.id}>
            <li className="relative group transition-all">
              {isActive && (
                <span className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#1E76D1] rounded-l-sm" />
              )}
              <Button
                variant="ghost"
                className={cn(
                  "w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium",
                  isLogo
                    ? "text-[#333] cursor-default"
                    : "text-[#333] hover:bg-[#D0E9FF] hover:text-[#333]",
                  isActive && "bg-[#D0E9FF]",
                  collapsed && "justify-center px-0"
                )}
                onClick={() => {
                  if (!isLogo && item.children) handleDropdownToggle(item.id);
                }}
              >
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt="Logo" className="h-5 w-5 object-contain" />
                ) : (
                  <item.icon className="h-5 w-5 text-[#333]" />
                )}
                {!collapsed && (
                  <span className="ml-3 flex-1 text-left">{item.label}</span>
                )}
                {!collapsed && item.children && (
                  <span className="text-xs">
                    {isOpen ? <ChevronDown size={16} /> : <ArrowRight size={16} />}
                  </span>
                )}
              </Button>
            </li>

            {!collapsed && isOpen && item.children && (
              <ul className="ml-8 mt-1 space-y-1">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <Button
                      variant="ghost"
                      className="w-full flex items-center px-3 py-2 text-sm text-[#333] rounded-md hover:bg-[#D0E9FF] hover:text-[#333]"
                    >
                      <child.icon className="w-4 h-4 text-[#333]" />
                      <span className="ml-2">{child.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      });

  return (
    <aside
      className={cn(
        "relative h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-[250px]"
      )}
    >
      <button
        onClick={onToggleCollapse}
        className="absolute top-4 -right-3 bg-white shadow-md border border-gray-300 rounded-full p-1 z-10"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-700" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        )}
      </button>

      <div className={cn("pt-6", collapsed ? "px-0" : "px-4")}>
        <ul className="space-y-1">{renderItems("logo")}</ul>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className={cn("space-y-4", collapsed ? "px-0" : "px-4")}>
          <hr className="border-gray-200 my-2" />
          <ul className="space-y-1">{renderItems("home")}</ul>
          <hr className="border-gray-200 my-2" />
          <ul className="space-y-1">{renderItems("main")}</ul>
          <hr className="border-gray-200 my-2" />
          <ul className="space-y-1">{renderItems("other")}</ul>
        </div>
      </div>

      <div className={cn("space-y-5 pb-4", collapsed ? "px-2" : "px-4")}>
        {!collapsed && (
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#333]">Almost There!</span>
              <span className="text-[10px] font-semibold text-white bg-[#2D8EFF] px-2 py-[2px] rounded-full">83%</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1 leading-tight">
              Completed the remaining steps in the creating profile before booking appointment
            </p>
            <div className="mt-2">
              <div className="h-2 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-gray-200"
                  style={{ width: "83%" }}
                />
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full h-7 mt-3 text-xs font-medium border-gray-300"
            >
              Go to profile
            </Button>
          </div>
        )}

        <div className={cn(
          "border border-gray-200 rounded-full px-3 py-1.5 bg-white flex items-center justify-between",
          collapsed && "flex-col px-0 py-2 space-y-2"
        )}>
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600" />
              <span className="text-xs text-gray-700 font-medium">Light</span>
            </div>
          )}
          <Switch
            checked={isDark}
            onCheckedChange={setIsDark}
            className="data-[state=checked]:bg-[#2D8EFF]"
          />
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-700 font-medium">Dark</span>
              <Moon className="h-4 w-4 text-gray-600" />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
