import React from 'react';
import useTaskStore from '../data/taskStore';

function TaskDetails() {
  const { selectedTask } = useTaskStore();

  return (
    <div className="bg-white h-full w-full rounded-2xl shadow-lg p-6 overflow-y-auto">

      {!selectedTask ? (
        <div className="flex items-center justify-center h-full text-gray-400 text-lg">
          Select a task to view details
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">
            {selectedTask.title}
          </h2>

          <p className="text-gray-600 mb-4">
            {selectedTask.description}
          </p>

          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {selectedTask.priority}
            </span>

            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
              {selectedTask.date}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskDetails;
