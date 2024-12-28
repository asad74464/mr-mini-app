import TaskCard from "./TaskCard";

const RewardsTab = ({ tasks, onCompleteTask }) => (
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-3">Active Tasks</h2>
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onComplete={onCompleteTask} />
      ))}
    </div>
  </div>
);
export default RewardsTab;
