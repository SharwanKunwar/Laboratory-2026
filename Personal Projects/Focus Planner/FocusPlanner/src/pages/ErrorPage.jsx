import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="text-lg mt-4 text-gray-600">
        Oops! Page not found.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
