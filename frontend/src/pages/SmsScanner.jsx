import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function SmsScanner() {
  const [message, setMessage] = useState("");
  const analyzeSMS = async () => {

  if (message.trim() === "") {
    toast.error("Please enter an SMS first!");
    return;
  }

  try {

    const response = await API.post("/analyze-sms", {
      message: message,
    });

    toast.success(response.data.result);

  } catch (error) {

    toast.error("Backend not connected!");

  }

  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold">
        SMS Scam Scanner
      </h1>

      <p className="text-slate-400 mt-4">
        Paste any SMS below and let AI analyze it.
      </p>

      <textarea
        className="mt-10 w-full max-w-3xl h-52 rounded-xl bg-slate-900 border border-slate-700 p-6 outline-none"
        placeholder="Paste suspicious SMS here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={analyzeSMS}
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"
        >
         Analyze SMS
      </button>


    </div>
  );
}

export default SmsScanner;