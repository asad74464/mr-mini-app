import { Timer, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const TaskCard = ({ task, onComplete }) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardContent className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {task.completed ? (
            <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
          ) : (
            <Timer className="w-5 h-5 text-gray-400 mr-2" />
          )}
          <span className="text-gray-500">{task.title}</span>
        </div>
        <Button
          variant={task.completed ? "outline" : "default"}
          className={
            task.completed
              ? "text-gray-500"
              : "bg-yellow-500 text-gray-800 hover:bg-yellow-600"
          }
          onClick={() => !task.completed && onComplete(task.id)}
        >
          {task.completed ? "Claimed" : task.reward}
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default TaskCard;
