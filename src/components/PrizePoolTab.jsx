import PrizePoolTasks from "./PrizePoolTasks";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const PrizePoolTab = () => (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-3">Prize Pool</h2>
    <Card className="bg-gray-800 border-gray-700 mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">Current Pool</span>
          <span className="text-yellow-400 text-xl font-bold">50,000 GAME</span>
        </div>
        <Progress
          value={65}
          className="h-2 mb-3 bg-gray-700 [&>div]:bg-yellow-500"
        />
        <span className="text-sm text-gray-400">Pool ends in 2d 14h</span>
      </CardContent>
    </Card>
    <PrizePoolTasks />
  </div>
);
export default PrizePoolTab;
