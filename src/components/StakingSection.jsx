import { Lock } from "lucide-react";
import { Button } from "./ui/button";

const StakingSection = ({ stakingAmount, onStakingChange }) => (
  <div className="border-t border-gray-700 pt-4">
    <h3 className="text-sm font-semibold mb-3 text-gray-400">Staking</h3>
    <div className="space-y-3">
      <div className="bg-gray-700 p-3 rounded-lg">
        <input
          type="number"
          placeholder="Enter amount to stake"
          className="w-full bg-transparent outline-none text-gray-300"
          value={stakingAmount}
          onChange={(e) => onStakingChange(e.target.value)}
        />
      </div>
      <Button className="w-full" variant="outline">
        <Lock className="w-4 h-4 mr-2" />
        Stake Tokens
      </Button>
    </div>
    <div className="mt-4 text-sm">
      {[
        { label: "APR", value: "12.5%", highlight: true },
        { label: "Lock Period", value: "30 days" },
      ].map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span className="text-gray-400">{item.label}</span>
          <span
            className={item.highlight ? "text-yellow-400" : "text-gray-500"}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);
export default StakingSection;
