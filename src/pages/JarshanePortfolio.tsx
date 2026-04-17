export default function JarshanePortfolio() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl animate-in fade-in slide-in-from-left duration-1000">
        
        <div className="flex-shrink-0 transition-transform hover:scale-105 duration-500">
          <img 
            src="/jarshane.png" 
            alt="Jarshane Tolentino" 
            className="w-64 h-80 object-cover border-4 border-slate-900" 
          />
        </div>

        <div className="text-left animate-in fade-in slide-in-from-right duration-1000 delay-200">
          <h1 className="text-5xl font-black mb-2 uppercase tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Jarshane Tolentino
            </span>
          </h1>
          
          <p className="text-blue-600 font-bold text-lg mb-4 uppercase tracking-widest">
            IT Student
          </p>

          <p className="text-slate-700 max-w-md leading-relaxed border-l-4 border-slate-900 pl-4">
            Hello! I'm Jarshane Tolentino, an IT student passionate about technology and innovation. 
            I have a strong foundation in programming, networking, and cybersecurity. 
            I'm eager to apply my skills in real-world projects and contribute to the tech community.
          </p>
        </div>
      </div>
    </div>
  );
}
