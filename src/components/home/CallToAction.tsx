import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div 
          className="rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-sage-800/50"></div>
          <div className="relative z-10 p-12 md:p-24">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Create Your Custom Bouquet Today
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Express your unique sentiment with a personalized arrangement made just for your special someone. Choose your favorite flowers, colors, and style.
              </p>
              <Button 
                asChild
                className="bg-terracotta-400 hover:bg-terracotta-500 text-white px-8 py-6 text-lg rounded-full"
              >
                <Link to="/bouquets/custom">
                  Start Designing →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;