import { Button, Card, Tag, Modal,Badge  } from 'antd'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useState } from 'react';
import useTaskStore from '../data/taskStore';
import Ribbon from 'antd/es/badge/Ribbon';
import Watch from './Watch';
import TimeTracker from './TimeTracker';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
            Start Task With Study Mode
          </Button>

          <Button danger onClick={() => deleteTask(task.id)}>
            <BsFillTrash3Fill />
          </Button>
        </div>

      </Card>
      </Badge.Ribbon>



      {/* // start task with study mode model working here ------------------------------------------------------------------ */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        width="97vw"
        style={{ top: '13vh', left: '0vw' }}
        bodyStyle={{ height: "78vh", padding:"20px"}}
      >
        <div className="h-full flex gap-1 justify-center items-center ">
          {/* left div  */}
          <div className=' flex flex-col gap-1 w-[50%] h-full'>
            
            {/* watch and timer  */}
            <div className=' w-full h-[50%] flex gap-1 '>
              {/* watch  */}
              <div className=' w-[37%] h-full flex justify-center items-center border border-slate-400'>
                <Watch/>
              </div>
              {/* timer and buttons  */}
              <div className=' w-[63%] h-full'>
                <TimeTracker/>
              </div>

            </div>

            {/* note  */}
            <div className='w-full h-[50%] pr-3'>
              <h1 className='text-lg font-medium ml-3 mt-10 text-shadow-2xs'>Notes:</h1>
              <div className='bg-gray-50 h-[25vh] rounded-tr-md rounded-bl-md rounded-br-md mt-1 border border-black/30 shadow-sm p-5'>
                <p className='text-neutral-400'>You can start from here . . . </p>
              </div>
            </div>

          </div>

          {/* right div  */}
          <div className='w-[50%] h-full'>
            {/* // start work from here  ----------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <DotLottieReact
              src="https://lottie.host/a3f8bee6-2fad-40f7-8017-749f079adf1d/YirePxkaGW.lottie"
              loop
              autoplay
            />

          </div>


        </div>
      </Modal>
    </>
  )
}

export default TaskCard
