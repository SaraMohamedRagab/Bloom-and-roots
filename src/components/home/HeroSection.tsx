import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-sage-800 mb-6 leading-tight">
            Beautiful <span className="text-terracotta-500">Plants</span> for Your Home
          </h1>
          <p className="text-lg md:text-xl text-sage-700 mb-8">
            Send a bouquet to someone you love 🌷 or find the perfect plant to brighten your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-6 text-lg rounded-full"
            >
              <Link to="/shop">
                Shop Now
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-sage-500 text-sage-700 hover:bg-sage-100 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/bouquets/custom">
                Create Custom Bouquet
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;