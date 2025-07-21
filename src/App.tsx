import Galaxy from './components/Galaxy';

export default function App() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Galaxy mouseRepulsion={true} mouseInteraction={true} density={1.5} glowIntensity={0.6} saturation={0.8} hueShift={240}/>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-transparent bg-clip-text">
          Premium Domains Marketplace
        </h1>
        <p className="text-gray-200">Your future brand starts here.</p>
      </div>
    </div>
  );
}
