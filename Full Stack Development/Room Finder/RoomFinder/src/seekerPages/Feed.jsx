
import { Button, Modal, Select } from 'antd';
import RoomCard from '../components/RoomCard';
import OwnerData from '../data/room';
import SeekerFotter from '../components/SeekerFotter'


function Feed() {
  return (
    <>
        <div className=' w-full h-[70px] flex p-2'>
                    <div className='w-6/12 '>
                    <h1 className='text-2xl font-medium text-black'>Rooms in Kathmandu, Nepal</h1>
                    <p className='text-neutral-600'>145 result match your search</p>
                    </div>
                    {/* // */}
                    <div className="w-6/12 flex items-center gap-2 justify-end">
                    <label className="font-medium">Sort by:</label>

                    <Select
                        defaultValue="newest"
                        className="w-48 "
                        options={[
                        { value: "newest", label: "Newest First" },
                        { value: "oldest", label: "Oldest First" },
                        { value: "popular", label: "Most Popular" },
                        ]}
                    />
                    </div>
                </div>

                {/* // write code fro feed start from here --------------------------------------------------------------------*/} 
                    {OwnerData.map((room) => (
                        <RoomCard
                        key={room.id}
                        ownerName={room.ownerName}
                        ownerImage={room.ownerImage}
                        createdAt={room.createdAt}
                        roomImages={room.roomImages}
                        roomPrice={room.roomPrice}
                        roomTitle={room.roomTitle}
                        description={room.description}
                        status={room.status}
                        facilities={room.facilities}
                        isSaved={room.isSaved}
                        />
                    ))}
                
                

                {/* // write code fro feed end from here --------------------------------------------------------------------*/} 
    </>
  )
}

export default Feed