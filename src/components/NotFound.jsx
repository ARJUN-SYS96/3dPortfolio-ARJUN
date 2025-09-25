import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#050816] text-white">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <h2 className="text-2xl mb-2">Page Not Found</h2>
    <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
    <a href="/" className="px-6 py-2 bg-[#915eff] rounded-lg font-semibold">Go Home</a>
  </div>
);

export default NotFound;
