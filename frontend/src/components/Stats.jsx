function Stats() {
  const stats = [
    {
      number: "99%",
      title: "Detection Accuracy",
    },
    {
      number: "24/7",
      title: "AI Protection",
    },
    {
      number: "3",
      title: "Languages",
    },
    {
      number: "4",
      title: "Detection Modules",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-blue-500 transition duration-300"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="mt-3 text-slate-400">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;