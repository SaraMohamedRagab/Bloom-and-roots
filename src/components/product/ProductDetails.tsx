import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCard';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find product by id
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-sage-800 mb-4">Product not found</h2>
          <Button 
            variant="outline" 
            className="border-sage-300 text-sage-700"
            onClick={() => navigate('/shop')}
          >
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-6 text-sage-700"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-sage-600 capitalize">{product.category}</p>
          </div>

          <span className="text-2xl font-medium text-sage-800 block">
            ${product.price.toFixed(2)}
          </span>

          <div className="border-t border-b border-sage-200 py-6">
            <p className="text-sage-700">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-sage-700">Quantity:</span>
            <div className="flex items-center border border-sage-300 rounded-md">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={decrementQuantity}
                className="text-sage-700"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center text-sage-800">{quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={incrementQuantity}
                className="text-sage-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="bg-sage-500 hover:bg-sage-600 text-white w-full py-6 text-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>

          {/* Additional Product Info */}
          <div className="space-y-4 text-sage-700">
            <p>
              <span className="font-semibold">Care Level:</span> Easy
            </p>
            <p>
              <span className="font-semibold">SKU:</span> BNR-{product.id.toString().padStart(4, '0')}
            </p>
            <p>
              <span className="font-semibold">Delivery:</span> 2-5 business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;