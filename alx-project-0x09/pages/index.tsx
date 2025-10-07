// pages/index.tsx
import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleGenerateImage = async () => {
    console.log("Generating Image");
    // Using NEXT_PUBLIC_ only for local testing (not safe for production)
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY);
  };

  return (
    <main className="style={{ padding: 24, fontFamily: 'sans-serif' }}">
      <h1>Image Generator</h1>
      <p>Click the button to test reading your env var in the console.</p>

      <button
        onClick={handleGenerateImage}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate Image
      </button>
    </main>
  );
};

export default Home;
  