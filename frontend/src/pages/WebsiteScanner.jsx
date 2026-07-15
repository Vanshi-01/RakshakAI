import { useState } from "react";
import toast from "react-hot-toast";
import API from "../services/api";

function WebsiteScanner() {

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [risk, setRisk] = useState("");
  const [reasons, setReasons] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const analyzeWebsite = async () => {
  if (url.trim() === "") {
    toast.error("Please enter a website URL!");
    return;
  }

  setLoading(true);
  setResult("");
  setRisk("");
  setReasons([]);
  setRecommendations([]);

  try {
    const response = await API.post("/analyze-website", {
      url: url,
    });

    const aiResult = response.data.result;

    setResult(aiResult);

    if (aiResult.includes("HIGH")) {
      setRisk("HIGH");
    } else if (aiResult.includes("MEDIUM")) {
      setRisk("MEDIUM");
    } else {
      setRisk("LOW");
    }

    const reasonMatch = aiResult.match(/Reason:([\s\S]*?)Recommendation:/);
    const recommendationMatch = aiResult.match(/Recommendation:([\s\S]*)/);

    if (reasonMatch) {
      setReasons(
        reasonMatch[1]
          .split("\n")
          .filter((item) => item.trim() !== "")
      );
    }

    if (recommendationMatch) {
      setRecommendations(
        recommendationMatch[1]
          .split("\n")
          .filter((item) => item.trim() !== "")
      );
    }

    toast.success("Website analyzed successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Backend Error!");
  } finally {
    setLoading(false);
  }
};

  return (

    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-16">

      <h1 className="text-5xl font-bold">
        Website Phishing Scanner
      </h1>

      <p className="text-slate-400 mt-4">
        Paste a website URL and let AI check whether it is safe.
      </p>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        className="mt-10 w-full max-w-3xl rounded-xl bg-slate-900 border border-slate-700 p-5 outline-none"
      />

      <button
  onClick={analyzeWebsite}
  disabled={loading}
  className="mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 px-8 py-4 rounded-xl font-semibold transition duration-300"
>
  {loading ? "Analyzing..." : "Analyze Website"}
</button>

    </div>

  );

}

export default WebsiteScanner;