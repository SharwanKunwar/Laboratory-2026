import { AnimatedTooltipPreview } from "../components/ui/AnimatedTooltipPreview";
import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [role, setRole] = useState("seeker");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) {
      return alert("Please select a role");
    }
    // Navigate based on role
    if (role === "seeker") {
      navigate("/seeker");
    } else {
      navigate("/owner");
    }
  };

  const handleGoogleLogin = () => console.log("Google login clicked");
  const handleFacebookLogin = () => console.log("Facebook login clicked");

  return (
    <div className="bg-[#D0D5D7] w-screen h-screen flex justify-center items-center">
      <div className="w-[70%] h-[90%] flex shadow-md shadow-indigo-950/20 rounded-2xl overflow-hidden">
        
        {/* Left Image Section */}
        <div className="w-6/12 relative">
          <img
            src="/img/img06.jpg"
            alt="RoomFinder"
            className="object-cover object-top w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end px-10 pb-30 bg-white/30 backdrop-blur-[1px]">
            <div className="flex items-center gap-2 h-10 ">
              <AnimatedTooltipPreview />
              <p className="text-neutral-300 text-sm">Verified community members</p>
            </div>
            <h1 className="text-4xl text-white font-medium leading-10 mt-4">
              Find a place where you belong.
            </h1>
            <p className="text-gray-300 mt-2">
              Log in to manage rooms or find your next home
            </p>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="w-6/12 bg-gray-50 flex justify-center items-center">
          <div className="w-[80%] flex flex-col gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/vite.svg" alt="logo" className="bg-indigo-400/30 p-1 rounded-sm shadow-sm"/>
              <h2 className="text-2xl font-medium text-slate-600">RoomFinder</h2>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">Welcome Back 👋</h2>
              <p className="text-gray-500 text-sm mt-1">Login as Seeker or Owner</p>
            </div>

            {/* Role Selection */}
            <div className="flex gap-4">
              {["seeker", "owner"].map((r) => (
                <div
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 text-center py-2 rounded-lg border border-black/30 cursor-pointer transition-all shadow-sm
                    ${role === r ? "border-indigo-400 bg-indigo-400 text-white shadow-md" : "border-gray-300 hover:border-indigo-400"}
                  `}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </div>
              ))}
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <Input type="email" placeholder="example@email.com" size="large" className="mt-1 rounded-lg" required />
              </div>
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <Input.Password placeholder="••••••••" size="large" className="mt-1 rounded-lg" required />
              </div>
              <Button htmlType="submit" type="primary" size="large" className="bg-black hover:bg-gray-800 transition-all" block>
                Login
              </Button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-2 text-gray-400 mt-2 mb-2">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex gap-5 justify-center">
              <Button onClick={handleGoogleLogin} size="large" className="flex items-center justify-center border hover:bg-gray-100 w-[40%]">
                <FcGoogle size={20} className="mr-2" /> Google
              </Button>
              <Button onClick={handleFacebookLogin} size="large" className="flex items-center justify-center border hover:bg-gray-100 w-[40%]">
                <FaFacebook size={20} className="mr-2 text-blue-600" /> Facebook
              </Button>
            </div>

            {/* Footer */}
            <p className="text-sm text-center text-gray-500 mt-2">
              Don’t have an account?{" "}
              <span className="text-black cursor-pointer font-medium hover:underline">Register</span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
