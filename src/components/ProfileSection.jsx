import { useState } from "react";
import appIcon from "../assets/images/appIcon.jpeg";
import { Eye, EyeOff } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

const ProfileSection = ({ balance, level, progress }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const handleHamsterClick = () => {
    alert("You clicked the hamster! 🎉");
  };

  return (
    <div className="relative pt-6 px-4">
      <div className="text-right mb-2">
        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
          CEO Level {level}
        </span>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-4">
            <button
              onClick={handleHamsterClick}
              className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center focus:outline-none hover:opacity-80 transition"
              aria-label="Click the Hamster"
            >
              <img
                src={appIcon}
                alt="Hamster Avatar"
                className="rounded-full"
              />
            </button>
          </div>

          <Progress
            value={progress}
            className="h-2 mb-3 bg-gray-700 [&>div]:bg-yellow-500"
          />

          <div className="text-center mb-6">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold text-yellow-400">
                {isBalanceVisible ? `$${balance.toLocaleString()}` : "••••••••"}
              </h1>
              <button
                onClick={toggleBalanceVisibility}
                className="ml-2 text-gray-400 hover:text-yellow-400"
                aria-label="Toggle Balance Visibility"
              >
                {isBalanceVisible ? (
                  <EyeOff className="h-6 w-6" />
                ) : (
                  <Eye className="h-6 w-6" />
                )}
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-1">+$142/hour</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSection;
