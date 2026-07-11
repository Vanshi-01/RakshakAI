import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex flex-col justify-center items-center px-6 text-center">
    <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <h1 className="text-6xl md:text-7xl font-extrabold max-w-5xl bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Protect Every Digital Transaction with AI
      </h1>

      <p className="mt-6 text-xl text-slate-400 max-w-2xl">
        RakshakAI protects users from phishing, fake UPI requests,
        scam SMS, fraudulent websites and fake payment screenshots.
      </p>

      <div className="mt-10 flex gap-4">

        <button
          onClick={() => navigate("/sms")}
          className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 rounded-xl font-semibold"
        >
          Analyze SMS
        </button>

        <button className="border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-xl">
          Watch Demo
        </button>

      </div>

    </section>
  );
}

export default Hero;