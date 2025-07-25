import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Over View" },
  { id: "health", label: "Health Reading Dashboard" }
];

interface TabSwitcherProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="border-b border-[#E4E4E7] pt-4"> {/* Light elegant border */}
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-1 pb-2 text-sm font-medium border-b-2 transition-all duration-200",
              activeTab === tab.id
                ? "text-black border-blue-500"
                : "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
