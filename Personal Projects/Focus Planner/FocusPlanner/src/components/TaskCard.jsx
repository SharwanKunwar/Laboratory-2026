import { Button, Card, Tag, Modal,Badge  } from 'antd'
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import useTaskStore from '../data/taskStore';
import Watch from './Watch';
import TimeTracker from './TimeTracker';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TaskDetails from './TaskDetails';
import TextArea from 'antd/es/input/TextArea';

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
            <div className=' w-full h-[50%] flex gap-1 relative'>
              {/* watch  */}
              <div className=' w-[37%] h-full flex justify-center items-center border border-slate-400'>
                <Watch/>
              </div>
              {/* timer and buttons  */}
              <div className=' w-[63%] h-full '>
                <TimeTracker/>
              </div>

            </div>

            {/* note  */}
            <div className='w-full h-[50%] pr-3'>
              <h1 className='text-2xl font-medium ml-3 mt-4 text-shadow-2xs'>Notes:</h1>
              <div className='bg-gray-50 h-[27vh] rounded-tr-md rounded-bl-md rounded-br-md mt-1 border border-black/30 shadow-sm p-5 mt-5'>
                <TextArea 
                  rows={7}
                  placeholder="Write something..."
                />
              </div>
            </div>

          </div>

          {/* right div  */}
          <div className='w-[50%] h-full relative'>
            {/* // start work from here  ----------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {/* absolute 01  */}
            <div className='bg-linear-to-br from-slate-400 shadow-sm  absolute top-0 left-0 w-full h-[27vh] z-20 rounded-md'>  </div>

            {/* lottie  */}
            <div className='w-full h-full z-30 absolute'>
              <DotLottieReact
              src="https://lottie.host/a3f8bee6-2fad-40f7-8017-749f079adf1d/YirePxkaGW.lottie"
              loop
              autoplay

            />

            {/* absolute 02  */}
            <div className='bg-gray-50/30 backdrop-blur-[4px] shadow-xl border border-black/10 absolute bottom-0 left-0 w-full h-[40vh] z-20 rounded-md p-5'> 
            {/* top  */}
              <div className=''>
                <h1 className='text-lg font-medium text-shadow-sm'>{task.title}</h1>
                <p className='text-neutral-400'>CreateAt: {task.createdAt}</p>
                <p className='mt-3 text-shadow-sm'>{task.description}</p>
                <div className='mt-5'>
                  <Button className='px-5! border-red-400/30! shadow! tracking-wide! border!' size='small'><span className='text-neutral-400'>Task Priority:</span> {task.priority}</Button>
                </div>
              </div>
              {/* button  */}
              <div className='h-[13vh] flex justify-center items-center'>
                <Button size='large' className='w-full'>Work Done</Button>
              </div>
            </div>

            
                
            </div>

          </div>


        </div>
      </Modal>
    </>
  )
}

export default TaskCard
