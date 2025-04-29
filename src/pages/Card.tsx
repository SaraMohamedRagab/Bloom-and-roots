import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCard';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const { toast } = useToast();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. Your order has been placed successfully."
      });
      navigate('/');
      setIsCheckingOut(false);
    }, 2000);
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-6">
          Your Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <p className="text-lg text-sage-700 mb-6">
              Your cart is empty. Start shopping to add items to your cart.
            </p>
            <Button 
              asChild
              className="bg-sage-500 hover:bg-sage-600 text-white"
            >
              <Link to="/shop">
                Browse Products
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-cream-100">
                      <tr>
                        <th className="py-4 px-6 text-left text-sage-800">Product</th>
                        <th className="py-4 px-6 text-left text-sage-800">Price</th>
                        <th className="py-4 px-6 text-left text-sage-800">Quantity</th>
                        <th className="py-4 px-6 text-left text-sage-800">Total</th>
                        <th className="py-4 px-6 text-right text-sage-800">Remove</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cream-100">
                      {cartItems.map((item) => (
                        <tr key={item.id} className="hover:bg-cream-50">
                          <td className="py-4 px-6">
                            <div className="flex items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md mr-4"
                              />
                              <div>
                                <p className="font-medium text-sage-800">{item.name}</p>
                                <p className="text-sm text-sage-600 capitalize">{item.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sage-700">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center border border-sage-300 rounded-md w-min">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="text-sage-700 h-8 w-8"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sage-800">{item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-sage-700 h-8 w-8"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sage-700 font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-sage-700 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sage-700">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sage-700">
                    <span>Shipping</span>
                    <span>${(5.99).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-sage-200 pt-3 flex justify-between font-semibold text-sage-800">
                    <span>Total</span>
                    <span>${(getTotalPrice() + 5.99).toFixed(2)}</span>
                  </div>
                </div>
                <Button 
                  className="bg-sage-500 hover:bg-sage-600 text-white w-full mb-4"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-sage-300 text-sage-700 w-full"
                >
                  <Link to="/shop">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;