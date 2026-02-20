import { Button, Card, Tag, Modal, Badge } from 'antd';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useState } from 'react';
import useTaskStore from '../data/taskStore';
import Watch from './Watch';
import TimeTracker from './TimeTracker';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TextArea from 'antd/es/input/TextArea';

function TaskCard({ task }) {

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateStatus = useTaskStore((state) => state.updateStatus);
  const updateDuration = useTaskStore((state) => state.updateDuration);
  const updateNotes = useTaskStore((state) => state.updateNotes);

  // state for notes input
  const [notes, setNotes] = useState(task.notes || "");
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false); // for Notes View modal

  const [isModalOpen, setIsModalOpen] = useState(false); // for Study Mode modal
  const [currentTimerValue, setCurrentTimerValue] = useState(0); // store timer value from TimeTracker

  const formattedDate = new Date(task.createdAt).toLocaleString();
  const truncatedDescription = task.description.length > 150 ? task.description.slice(0, 150) + "..." : task.description;
  const MaxDescription = task.description.length > 300 ? task.description.slice(0, 300) + "..." : task.description;

  const handleStartWork = () => {
    setIsModalOpen(true);
    updateStatus(task.id, "in-progress");
  };

  function convertMillisecondsToHMS(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// console.log(convertMillisecondsToHMS(taskDuration)); // Output: "02:03:04"

  

  return (
    <>
      <Badge.Ribbon text={task.priority} color="red">
        <Card className='shadow-sm rounded-lg border! border-black/40!' hoverable>

          <h1 className='text-lg font-medium'> {task.title} </h1>
          <small className='text-neutral-400'> CreatedAt: {formattedDate} </small>
          <p className='text-gray-500 mt-2 text-shadow-sm min-h-[90px]'> {truncatedDescription} </p>

          <section className='flex justify-start items-center gap-3'>
            <Tag color={task.status === "in-progress" ? "blue" : "orange"} className='mt-1!'> {task.status}</Tag>
            {task.status == "completed" && (
              <Tag color={task.status === "in-progress" ? "blue" : "orange"} className='mt-1!'> <p>Time Spent: {convertMillisecondsToHMS(task.duration)}</p> </Tag>
            )}
          </section>

          <div className='flex gap-2 mt-4'>
            {task.status === "pending" || task.status === "in-progress" ? 
              <Button className='w-full' onClick={handleStartWork}>
                Start Task With Study Mode
              </Button>
              :
              <Button className='w-full text-green-400!' onClick={() => setIsNoteModalOpen(true)}>
                View Task Notes 
              </Button>
            }

            <Button danger onClick={() => deleteTask(task.id)}>
              <BsFillTrash3Fill />
            </Button>
          </div>

        </Card>
      </Badge.Ribbon>

      {/* Study Mode Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        width="97vw"
        style={{ top: '13vh', left: '0vw' }}
        bodyStyle={{ height: "78vh", padding:"20px"}}
      >
        <div className="h-full flex gap-1 justify-center items-center ">
          {/* Left side */}
          <div className=' flex flex-col gap-1 w-[50%] h-full'>
            
            {/* Watch & Timer */}
            <div className=' w-full h-[50%] flex gap-1 relative'>
              <div className=' w-[37%] h-full flex justify-center items-center border border-slate-400'>
                <Watch/>
              </div>
              <div className=' w-[63%] h-full '>
                <TimeTracker onTimeUpdate={setCurrentTimerValue} />
              </div>
            </div>

            {/* Notes Input */}
            <div className='w-full h-[50%] pr-3'>
              <h1 className='text-2xl font-medium ml-3 mt-4 text-shadow-2xs'>Notes:</h1>
              <div className='bg-gray-50 h-[27vh] rounded-md mt-1 border border-black/30 shadow-sm p-5 mt-5'>
                <TextArea
                  rows={7}
                  placeholder="Write something..."
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                    updateNotes(task.id, e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className='w-[50%] h-full relative'>
            <div className='bg-linear-to-br from-slate-400 shadow-sm absolute top-0 left-0 w-full h-[27vh] z-20 rounded-md'>  </div>

            <div className='w-full h-full z-30 absolute'>
              <DotLottieReact
                src="https://lottie.host/a3f8bee6-2fad-40f7-8017-749f079adf1d/YirePxkaGW.lottie"
                loop
                autoplay
              />

              <div className='bg-gray-50/30 backdrop-blur-[4px] shadow-xl border border-black/10 absolute bottom-0 left-0 w-full h-[40vh] z-20 rounded-md p-5'> 
                <div>
                  <h1 className='text-lg font-medium text-shadow-sm'>{task.title}</h1>
                  <p className='text-neutral-400'>CreateAt: {task.createdAt}</p>
                  <p className='mt-3 text-shadow-sm'>{MaxDescription}</p>
                  <div className='mt-5 flex justify-between items-center gap-5'>
                    <Tag color={task.status === "in-progress" ? "blue" : "orange"}> {task.status}</Tag>
                    <Button className='px-5! border-red-400/30! shadow! tracking-wide! border!' size='medium'>
                      <span className='text-neutral-700'>Priority:</span> {task.priority}
                    </Button>
                  </div>
                </div>

                {/* Work Done Button */}
                <div className='h-[13vh] flex justify-center items-center'>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={() => {
                      updateDuration(task.id, currentTimerValue);
                      updateStatus(task.id, "completed");
                      setIsModalOpen(false);
                    }}
                  >
                    Work Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>



      {/* Notes View Modal */}
      <Modal
        open={isNoteModalOpen}
        footer={null}
        onCancel={() => setIsNoteModalOpen(false)}
        title={`Task Notes of ${task.title}`}
        width="99vw"
        style={{ top: '13vh', left: '0vw' }}
        bodyStyle={{ padding:"10px"}}
      >
        <div className="overflow-y-scroll h-[500px] hide-scrollbar flex gap-5">
          {/* task / question  */}
          <div className=' w-[50%] '>
            <div className='bg-gray-50 rounded-md shadow-sm p-5'>
              <h1 className='text-lg font-medium'> {task.title} </h1>
          <small className='text-neutral-400'> CreatedAt: {formattedDate} </small>
          <p className='text-gray-500 mt-2 text-shadow-sm min-h-[90px] '> {truncatedDescription} </p>

          <section className='flex justify-start items-center gap-3 '>
            <Tag color={task.status === "in-progress" ? "blue" : "orange"} className='mt-1!'> {task.status}</Tag>
            {task.status == "completed" && (
              <Tag color={task.status === "in-progress" ? "blue" : "orange"} className='mt-1!'> <p>Time Spent: {convertMillisecondsToHMS(task.duration)}</p> </Tag>
            )}
          </section>             
            </div>
          </div>
          {/* question task  */}
          <div className=' w-[50%] px-5  rounded bg-indigo-400'>
            <h1 className=' py-3 text-xl mb-3 border-b border-black/30 text-white'>Notes : </h1>
              <div className=' p-5 rounded-md shadow-sm  text-shadow-sm h-[400px] overflow-y-scroll hide-scrollbar bg-yellow-400 text-white' >
                <p style={{ whiteSpace: 'pre-wrap' }}>
                  {task.notes || "No notes available for this task."}
                </p>
              </div>
          </div>

        </div>

        
      </Modal>


    </>
  );
}

export default TaskCard;
