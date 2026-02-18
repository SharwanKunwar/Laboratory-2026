import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <div className="h-[50%] w-[50%]">
           <DotLottieReact
              src="https://lottie.host/ff0a66bc-2041-4c09-b876-75d875a4f2f4/RYNpdJ3Zvb.lottie"
              loop
              autoplay
            />
      </div>
      <Link
        to="/"
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;

