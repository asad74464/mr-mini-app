import ExchangeTab from "@/components/ExchangeTab";
import Navigation from "@/components/Navigation";
import PrizePoolTab from "@/components/PrizePoolTab";
import ProfileSection from "@/components/ProfileSection";
import ReferralTab from "@/components/ReferralTab";
import RewardsTab from "@/components/RewardsTab";
import WalletTab from "@/components/WalletTab";
import { useState } from "react";

const Home = () => {
  const [balance] = useState(22772212);
  const [level] = useState(42);
  const [progress] = useState(75);
  const [activeTab, setActiveTab] = useState("exchange");
  const [referralCode] = useState("REF123456");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Join Telegram", reward: "50 GAME", completed: false },
    { id: 2, title: "Watch Tutorial", reward: "100 GAME", completed: true },
    { id: 3, title: "Follow Twitter", reward: "75 GAME", completed: false },
  ]);
  const [stakingAmount, setStakingAmount] = useState("");

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "exchange":
        return <ExchangeTab />;
      case "rewards":
        return <RewardsTab tasks={tasks} onCompleteTask={handleCompleteTask} />;
      case "referral":
        return <ReferralTab referralCode={referralCode} />;
      case "tasks":
        return <PrizePoolTab />;
      case "wallet":
        return (
          <WalletTab
            stakingAmount={stakingAmount}
            onStakingChange={setStakingAmount}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <ProfileSection balance={balance} level={level} progress={progress} />
      {renderContent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Home;
