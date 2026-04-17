import jarshane1 from '../assets/1.png';

export default function JarshanePortfolio() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-200">

        <img src={jarshane1} 
        alt="Jarshane" 
        className="h-150 mx-auto mb-4" />

        <h1 className="text-5xl font-black mb-2 uppercase tracking-tighter">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-pink-600">
            Jarshane Tolentino
          </span>
        </h1>

        <p className="text-lg text-gray-600">
          Frontend Developer
        </p>
      </div>
    </div>

  );
}
