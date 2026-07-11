function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-500">
          🛡 RakshakAI
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;