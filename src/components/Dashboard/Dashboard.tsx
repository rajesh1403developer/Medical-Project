import { useState, useEffect } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { TabSwitcher } from "./TabSwitcher";
import { PatientInfoPanel } from "./PatientInfoPanel";
import { MainContentPanel } from "./MainContentPanel";
import { ChatPanel } from "./ChatPanel";

export function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Auto collapse sidebar below 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        {/* TabSwitcher aligned with main content */}
        <div className="px-4 sm:px-6 md:px-8">
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
        </div>


        <div className="flex-1 overflow-hidden">
          <div className="h-full p-4 sm:p-5 md:p-6 grid grid-cols-1 xl:grid-cols-4 gap-4 md:gap-6 overflow-y-auto">
            <div className="xl:col-span-1">
              <PatientInfoPanel />
            </div>

            <div className="xl:col-span-2">
              <MainContentPanel />
            </div>

            <div className="xl:col-span-1">
              <ChatPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
