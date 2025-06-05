import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCard';
import { Product } from '@/types';

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Peace Lily",
      category: "plants",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1616500644066-e73b5d403140?auto=format&fit=crop&w=400&h=500&q=80",
      description: "A beautiful indoor plant known for its air-purifying qualities."
    },
    {
      id: 2,
      name: "Summer Delight Bouquet",
      category: "bouquets",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1561181286-d5c68f3ee495?auto=format&fit=crop&w=400&h=500&q=80",
      description: "A vibrant mix of seasonal flowers to brighten any room."
    },
    {
      id: 3,
      name: "Terracotta Pot - Medium",
      category: "pots",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?auto=format&fit=crop&w=400&h=500&q=80",
      description: "Classic terracotta pot, perfect for medium-sized plants."
    },
    {
      id: 4,
      name: "Organic Herb Seeds Collection",
      category: "seeds",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1622974591457-a1019630bb13?auto=format&fit=crop&w=400&h=500&q=80",
      description: "Collection of organic seeds to start your own herb garden."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-2">
              Featured Products
            </h2>
            <p className="text-sage-600">
              Our most popular items this season
            </p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-4 md:mt-0 border-sage-500 text-sage-700"
          >
            <Link to="/shop">
              View All Products
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group rounded-xl overflow-hidden shadow-md hover-lift bg-white">
              <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-sage-800 mb-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sage-600 text-sm mb-2">{product.category}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
                  <Button 
                    size="sm"
                    onClick={() => addToCart(product)}
                    className="bg-sage-500 hover:bg-sage-600 text-white rounded-full h-10 w-10 p-0 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;