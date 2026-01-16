import { Button } from "antd";
import { FaEllipsisH } from "react-icons/fa";
import { MdVerified, MdHome } from "react-icons/md";

function RoomCard({ ownerName, createdAt, roomImages, roomPrice, roomTitle, description, status, facilities, isSaved,ownerImage }) {
  return (
    <div className="bg-white w-full p-5 rounded-sm my-5">

      {/* HEADER */}
      <div className="h-15 flex justify-between items-center">
        <div className="flex gap-3 relative">
          <img
            src={ownerImage}
            alt="owner"
            className="bg-indigo-400/30 w-12.5 h-12.5 rounded-full"
          />
          <div className="absolute w-[15px] h-[15px] bottom-0 left-8 bg-green-400 rounded-full border border-white"></div>
          <div className="relative">
            <h1 className="font-medium">{ownerName}</h1>
            <p className="text-gray-400 text-sm">
              {new Date(createdAt).toDateString()}
            </p>
            <div className=" w-[15px] h-[15px] rounded-full absolute -top-0 -right-5">
                <MdVerified size={15} className="text-blue-500" />
            </div>
          </div>
        </div>
        <FaEllipsisH className="text-gray-400 mr-5" />
      </div>

      {/* ROOM IMAGES */}
      <div className="h-87.6 mt-3 flex gap-1 ">
        <div className="w-[71%] h-full ">
          <img
            src={roomImages[0]}
            alt="room"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[35%] flex flex-col gap-1">
          {roomImages.slice(1, 3).map((img, index) => (
            <div key={index} className="h-[50%]">
              <img
                src={img}
                alt="room"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-3">
        <div className="flex h-15">
          <div className="w-6/12">
            <h1 className="text-xl tracking-tighter text-indigo-400 font-medium">
              Rs {roomPrice} <span className="text-gray-400">/ month</span>
            </h1>
            <h3 className="font-medium text-xl">{roomTitle}</h3>
          </div>

          <div className="w-6/12 flex justify-end items-center gap-3 px-5">
            <Button className="text-indigo-400! font-medium!">
              Private Room
            </Button>
            <Button
              className={`font-medium! ${
                status ? "text-green-500!" : "text-red-500!"
              }`}
            >
              {status ? "Available Now" : "Not Available"}
            </Button>
          </div>
        </div>

        <p className="mt-2 text-neutral-500">{description}</p>

        {/* FACILITIES */}
        <div className="mt-3 flex gap-3 flex-wrap">
          {facilities.map((item, index) => (
            <Button key={index} className="text-indigo-400!">
              {item}
            </Button>
          ))}
        </div>
        

        {/* ACTION BUTTONS */}
        <div className="mt-5 flex gap-3">
          <Button size="large" className="bg-indigo-400! text-white!">
            View Details
          </Button>

          <Button size="large" className="bg-indigo-400! text-white!">
            Message {ownerName}
          </Button>

          <Button size="large">
            {isSaved ? "Saved" : "Save"}
          </Button>

          <Button size="large">Share</Button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
