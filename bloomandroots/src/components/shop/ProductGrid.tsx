import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCard';
import { Product } from '../../types/product'; 
import { products } from '@/data/products';

type ProductGridProps = {
  category?: string;
  searchQuery?: string;
};

const ProductGrid = ({ category, searchQuery }: ProductGridProps) => {
  const { addToCart } = useCart();
  
  const filteredProducts = products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product: Product) => ( // ✅ FIXED: typed `product`
          <div key={product.id} className="group rounded-xl overflow-hidden shadow-md hover-lift bg-white">
            <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden">
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
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-sage-600">No products found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
