import { useState, ReactNode, Children } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
  defaultActiveTab?: number;
  onTabChange?: (index: number) => void;
}

export function Tab({ children }: TabProps) {
  return <div className="p-4">{children}</div>;
}

export function Tabs({ children, defaultActiveTab = 0, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const tabElements = Children.toArray(children) as React.ReactElement<TabProps>[];
  const tabs = tabElements.map((tab, index) => ({
    ...tab,
    index,
    isActive: index === activeTab
  }));

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.index}
              onClick={() => handleTabClick(tab.index)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                tab.isActive
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.props.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.isActive)?.props.children}
      </div>
    </div>
  );
}
