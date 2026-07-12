function Stats() {
  const stats = [
    {
      number: "99%",
      title: "Detection Accuracy",
      color: "text-cyan-400",
    },
    {
      number: "24/7",
      title: "AI Protection",
      color: "text-green-400",
    },
    {
      number: "3",
      title: "Languages Supported",
      color: "text-yellow-400",
    },
    {
      number: "4",
      title: "Detection Modules",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          RakshakAI in Numbers
        </h2>

        <p className="text-center text-slate-400 mt-4 mb-12">
          AI-powered protection against scams and phishing attacks.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-700 text-center hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className={`text-4xl font-bold ${item.color}`}>
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;