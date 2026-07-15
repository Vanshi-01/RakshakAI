import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function SmsScanner() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [risk, setRisk] = useState("");
  const [reasons, setReasons] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const analyzeSMS = async () => {
    if (message.trim() === "") {
      toast.error("Please enter an SMS first!");
      return;
    }

    setLoading(true);
    setResult("");
    setRisk("");
    setReasons([]);
    setRecommendations([]);

    try {
      const response = await API.post("/analyze-sms", {
        message: message,
      });

      const aiResult = response.data.result;

      const reasonMatch = aiResult.match(
        /Reason:([\s\S]*?)Recommendation:/
      );

      const recommendationMatch = aiResult.match(
        /Recommendation:([\s\S]*)/
      );

      if (reasonMatch) {
        const reasonList = reasonMatch[1]
          .split("\n")
          .filter((item) => item.trim() !== "");

        setReasons(reasonList);
      }

      if (recommendationMatch) {
        const recommendationList = recommendationMatch[1]
          .split("\n")
          .filter((item) => item.trim() !== "");

        setRecommendations(recommendationList);
      }

      setResult(aiResult);

      if (aiResult.includes("HIGH")) {
        setRisk("HIGH");
      } else if (aiResult.includes("MEDIUM")) {
        setRisk("MEDIUM");
      } else {
        setRisk("LOW");
      }

      toast.success("Analysis Completed!");
    } catch (error) {
      console.error(error);
      toast.error("Backend Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-16">

        <h1 className="text-5xl font-bold">
          SMS Scam Scanner
        </h1>

        <p className="text-slate-400 mt-4">
          Paste any SMS below and let AI analyze it.
        </p>

        <p className="mt-8 text-slate-300 font-semibold">
          Try an Example SMS
        </p>

        <div className="flex flex-wrap gap-3 mt-4">

          <button
            onClick={() =>
              setMessage(`Dear Customer,

Your SBI account has been blocked.

Click https://fake-bank.xyz immediately.

Regards,
SBI`)
            }
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            🏦 Banking Scam
          </button>

          <button
            onClick={() =>
              setMessage(`Your package delivery failed.

Pay ₹50 immediately:

https://delivery-update.xyz`)
            }
            className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
          >
            📦 Delivery Scam
          </button>

          <button
            onClick={() =>
              setMessage(`Congratulations!

You won ₹25,00,000.

Claim your prize now:

https://lottery-win.xyz`)
            }
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            🎁 Lottery Scam
          </button>

        </div>

        <button
          onClick={() => setMessage("")}
          className="mt-4 border border-slate-500 hover:bg-slate-800 px-5 py-2 rounded-lg"
        >
          🗑 Clear Message
        </button>

        <textarea
          className="mt-10 w-full max-w-3xl h-56 rounded-xl bg-slate-900 border border-slate-700 p-6 outline-none"
          placeholder="Paste suspicious SMS here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p
          className={`w-full max-w-3xl text-right mt-2 ${
            message.length > 800
              ? "text-red-400"
              : "text-slate-400"
          }`}
        >
          Characters: {message.length}/1000
        </p>

        <button
          disabled={loading}
          onClick={analyzeSMS}
          className="mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-8 py-4 rounded-xl font-semibold transition duration-300"
        >
          {loading ? "Analyzing..." : "Analyze SMS"}
        </button>
                {result && (
          <div className="mt-12 w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl p-8">

            <h2 className="text-4xl font-bold text-cyan-400">
              AI Analysis
            </h2>

            <div className="mt-6">

              {risk === "HIGH" && (
                <span className="bg-red-600 text-white px-5 py-2 rounded-full font-bold">
                  🔴 HIGH RISK
                </span>
              )}

              {risk === "MEDIUM" && (
                <span className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold">
                  🟡 MEDIUM RISK
                </span>
              )}

              {risk === "LOW" && (
                <span className="bg-green-600 text-white px-5 py-2 rounded-full font-bold">
                  🟢 LOW RISK
                </span>
              )}

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-bold text-cyan-400">
                📌 Why is this suspicious?
              </h3>

              <ul className="mt-4 space-y-3">
                {reasons.map((item, index) => (
                  <li
                    key={index}
                    className="bg-slate-800 rounded-xl p-4"
                  >
                    ✔ {item.replace("-", "").trim()}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-green-400 mt-10">
                💡 Recommended Actions
              </h3>

              <ul className="mt-4 space-y-3">
                {recommendations.map((item, index) => (
                  <li
                    key={index}
                    className="bg-slate-800 rounded-xl p-4"
                  >
                    ✔ {item.replace("-", "").trim()}
                  </li>
                ))}
              </ul>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  toast.success("Report copied!");
                }}
                className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-semibold transition duration-300"
              >
                📋 Copy Report
              </button>

              <button
                onClick={() => {
                  setMessage("");
                  setResult("");
                  setReasons([]);
                  setRecommendations([]);
                  setRisk("");
                }}
                className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl transition duration-300"
              >
                🔄 Analyze Another SMS
              </button>

            </div>

          </div>
        )}

      </div>

      {loading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-slate-900 rounded-3xl p-10 text-center border border-cyan-500 shadow-2xl max-w-md w-full">

            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <h2 className="text-2xl font-bold text-cyan-400 mt-6">
              Analyzing SMS...
            </h2>

            <p className="text-slate-400 mt-3">
              AI is checking for phishing links,
              scam keywords, urgency tactics,
              and social engineering attacks.
            </p>

          </div>

        </div>
      )}

    </>
  );
}

export default SmsScanner;