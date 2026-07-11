import { Upload, Brain, ShieldCheck, CheckCircle } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={40} />,
      title: "Upload",
      description: "Paste an SMS, upload a screenshot, or enter a website URL.",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Analysis",
      description: "RakshakAI analyzes the content using AI.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Risk Detection",
      description: "Detect phishing, scams, and fake payment requests.",
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Get Recommendation",
      description: "Receive an explanation and safety advice.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white">
          How RakshakAI Works
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Just four simple steps to stay safe online.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500 transition"
            >
              <div className="text-cyan-400">
                {step.icon}
              </div>

              <h3 className="text-white text-2xl mt-6">
                {step.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;