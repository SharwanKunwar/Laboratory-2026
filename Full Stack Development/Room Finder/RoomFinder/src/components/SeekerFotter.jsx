import { Button } from "antd";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SafetyNoticeCard() {
  return (
    <div className="w-full h-[300px] p-2 rounded-md flex gap-4 bg-white shadow-sm">

      {/* LEFT CONTENT */}
      <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-indigo-400 w-[65%] p-[2px] rounded-md">
        <div className="bg-white h-full rounded-md p-5 flex flex-col justify-between">

          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold text-gray-800">
              ⚠️ Important Safety Notice
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed">
              We never ask for advance payments other than the official room rent.
              If anyone demands extra money claiming to be the room owner and you
              suspect fraud, please do not pay.
              <br /><br />
              Immediately report the issue or contact our customer support team.
              Your safety and trust are our top priority.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3 mt-3">
            <Button
              type="primary"
              icon={<MdSupportAgent />}
              className="bg-indigo-500 hover:bg-indigo-600"
            >
              Contact Support
            </Button>

            <Button>Report Issue</Button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="bg-gradient-to-br from-indigo-400 via-pink-400 to-orange-400 w-[35%] p-[2px] rounded-md">
        <div className="bg-white h-full rounded-md overflow-hidden">
          <img
            src="/avatar/profile01.jpg"
            alt="App Owner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
