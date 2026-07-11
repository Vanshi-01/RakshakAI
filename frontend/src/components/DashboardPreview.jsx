function DashboardPreview() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white">
          Dashboard Preview
        </h2>

        <div className="mt-16 bg-slate-800 rounded-3xl p-10 border border-slate-700">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-blue-400 text-4xl font-bold">
                154
              </h3>

              <p className="text-slate-400 mt-2">
                Total Scans
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-red-400 text-4xl font-bold">
                12
              </h3>

              <p className="text-slate-400 mt-2">
                Threats Found
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-green-400 text-4xl font-bold">
                142
              </h3>

              <p className="text-slate-400 mt-2">
                Safe Results
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-cyan-400 text-4xl font-bold">
                98%
              </h3>

              <p className="text-slate-400 mt-2">
                AI Accuracy
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;