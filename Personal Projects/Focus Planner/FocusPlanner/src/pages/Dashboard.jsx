import React from "react";
import { SparklesPreview } from "../components/ui/SparklesPreview";
import { Card } from "antd";
import useTaskStore from "../data/taskStore";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks);

  const taskStats = React.useMemo(() => {
    const now = new Date();

    let completed = 0;
    let pending = 0;
    let inProgress = 0;
    let overdue = 0;

    tasks.forEach((task) => {
      const createdDate = new Date(task.createdAt);
      const diffDays = (now - createdDate) / (1000 * 60 * 60 * 24);

      if (task.status === "completed") completed++;
      if (task.status === "pending") pending++;
      if (task.status === "inprogress") inProgress++;
      if (diffDays > 2 && task.status !== "completed") overdue++;
    });

    return { completed, pending, inProgress, overdue };
  }, [tasks]);

  const { completed, pending, inProgress, overdue } = taskStats;

  const data = [
    { name: "Completed", count: completed },
    { name: "Pending", count: pending },
    { name: "In Progress", count: inProgress },
    { name: "Overdue", count: overdue },
  ];

  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      <div className="h-[250px]">
        <SparklesPreview />
      </div>

      <div className="h-full flex flex-col gap-5">
        <div className="w-full h-[100%] grid grid-cols-3 gap-5">
          {/* LEFT CARD */}
          <Card className="bg-gray-50 col-span-1 rounded shadow-sm p-5">
            <h1 className="text-lg font-semibold mb-4">Task Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-md shadow-sm">
                <p className="text-sm text-green-600">Completed</p>
                <h2 className="text-2xl font-bold text-green-700">{completed}</h2>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md shadow-sm">
                <p className="text-sm text-yellow-600">Pending</p>
                <h2 className="text-2xl font-bold text-yellow-700">{pending}</h2>
              </div>
              <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                <p className="text-sm text-blue-600">In Progress</p>
                <h2 className="text-2xl font-bold text-blue-700">{inProgress}</h2>
              </div>
              <div className="bg-red-50 p-4 rounded-md shadow-sm">
                <p className="text-sm text-red-600">Overdue (&gt; 2 days)</p>
                <h2 className="text-2xl font-bold text-red-700">{overdue}</h2>
              </div>
            </div>
          </Card>

          {/* RIGHT CARD - Task Graph */}
          <Card className="bg-gray-50 col-span-2 rounded shadow-sm p-5">
            <h1 className="text-lg font-semibold mb-4">Task Visualization</h1>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;