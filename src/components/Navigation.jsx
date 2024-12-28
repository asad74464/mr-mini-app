import { BarChart, Gift, Trophy, Users, Wallet } from "lucide-react";

const Navigation = ({ activeTab, onTabChange }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
    <div className="flex justify-around p-4">
      {[
        { id: "exchange", icon: BarChart },
        { id: "rewards", icon: Gift },
        { id: "referral", icon: Users },
        { id: "tasks", icon: Trophy },
        { id: "wallet", icon: Wallet },
      ].map(({ id, icon: Icon }) => (
        <button
          key={id}
          className={`${
            activeTab === id ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => onTabChange(id)}
        >
          <Icon className="w-6 h-6" />
        </button>
      ))}
    </div>
  </div>
);

export default Navigation;
