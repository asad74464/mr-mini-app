import { Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const PrizePoolTasks = () => (
  <div className="grid gap-3">
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Youtube className="w-5 h-5 text-yellow-400 mr-2" />
            <div>
              <h3 className="font-medium text-gray-400">Watch Tutorial</h3>
              <p className="text-sm text-gray-400">+100 points</p>
            </div>
          </div>
          <Button size="sm">Complete</Button>
        </div>
      </CardContent>
    </Card>
  </div>
);
export default PrizePoolTasks;
