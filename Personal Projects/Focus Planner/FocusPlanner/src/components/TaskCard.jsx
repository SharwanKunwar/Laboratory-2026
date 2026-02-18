import { Button, Card, Tag, Modal,Badge  } from 'antd'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useState } from 'react';
import useTaskStore from '../data/taskStore';
import Ribbon from 'antd/es/badge/Ribbon';

function TaskCard({ task }) {

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateStatus = useTaskStore((state) => state.updateStatus);

  const [isModalOpen, setIsModalOpen] = useState(false); // modal starts closed

  const formattedDate = new Date(task.createdAt).toLocaleString();

  const truncatedDescription = task.description.length > 150 ? task.description.slice(0, 150) + "..." : task.description;

  const handleStartWork = () => {
    setIsModalOpen(true); // open modal
    updateStatus(task.id, "in-progress"); // change status
  };

  return (
    <>
      <Badge.Ribbon text={task.priority} color="red">
      <Card className='shadow-sm rounded-lg border! border-black/40!' hoverable>

        <h1 className='text-lg font-medium'> {task.title} </h1>
        <small className='text-neutral-400'> CreatedAt: {formattedDate} </small>
        <p className='text-gray-500 mt-2 text-shadow-sm min-h-[90px]'> {truncatedDescription} </p>

        <Tag color={task.status === "in-progress" ? "blue" : "orange"} className='mt-1!'> {task.status} </Tag>

        <div className='flex gap-2 mt-4'>
          <Button className='w-full' onClick={handleStartWork}>
            Start Work
          </Button>

          <Button danger onClick={() => deleteTask(task.id)}>
            <BsFillTrash3Fill />
          </Button>
        </div>

      </Card>
      </Badge.Ribbon>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        width="97vw"
        style={{ top: '13vh', left: '0vw' }}
        bodyStyle={{ height: "78vh" }}
      >
        <div className="h-full flex justify-center items-center">
          <h2 className="text-2xl font-semibold">
            Working on: {task.title}
          </h2>
        </div>
      </Modal>
    </>
  )
}

export default TaskCard
