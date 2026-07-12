import { motion } from "framer-motion";

import {
  ShieldCheck,
  Smartphone,
  Globe,
  Brain,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Smartphone size={40} />,
      title: "SMS Guardian",
      description:
        "Detect phishing and scam SMS instantly using advanced AI analysis.",
      color: "text-cyan-400",
    },

    {
      icon: <Globe size={40} />,
      title: "Website Guardian",
      description:
        "Identify fake banking and phishing websites before visiting them.",
      color: "text-blue-400",
    },

    {
      icon: <ShieldCheck size={40} />,
      title: "Screenshot Guardian",
      description:
        "Detect fake payment screenshots using intelligent image analysis.",
      color: "text-green-400",
    },

    {
      icon: <Brain size={40} />,
      title: "Explainable AI",
      description:
        "Understand exactly why the AI considers a message or website risky.",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-white"
        >
          Our Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mt-5 max-w-2xl mx-auto"
        >
          Intelligent protection powered by Artificial Intelligence to keep your
          digital life safe.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}

              viewport={{ once: true }}

              whileHover={{
                scale: 1.05,
                y: -10,
              }}

              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-lg"
            >

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-800 ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;