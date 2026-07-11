import {
  Shield,
  MessageSquare,
  Globe,
  Camera,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <MessageSquare size={40} />,
      title: "SMS Guardian",
      description:
        "Detect scam messages instantly using AI.",
    },

    {
      icon: <Camera size={40} />,
      title: "Screenshot Guardian",
      description:
        "Detect fake payment screenshots.",
    },

    {
      icon: <Globe size={40} />,
      title: "Website Guardian",
      description:
        "Identify phishing websites before opening them.",
    },

    {
      icon: <Shield size={40} />,
      title: "Explainable AI",
      description:
        "Understand why AI flagged content as dangerous.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white">
          Our Features
        </h2>

        <p className="text-center text-slate-400 mt-5">
          Intelligent protection powered by AI
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-400">
                {feature.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;