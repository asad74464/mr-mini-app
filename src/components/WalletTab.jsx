import StakingSection from "./StakingSection";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const WalletTab = ({ stakingAmount, onStakingChange }) => (
  <div className="p-4">
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-400">Wallet</h2>
        <div className="space-y-4">
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800">
            Connect Wallet
          </Button>
          <StakingSection
            stakingAmount={stakingAmount}
            onStakingChange={onStakingChange}
          />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default WalletTab;
