import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-cream-100 text-sage-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-serif font-bold text-sage-600">
                Bloom <span className="text-terracotta-400">&</span> Root
              </span>
            </Link>
            <p className="text-sm text-sage-600 mt-2">
              Bringing nature's beauty to your doorstep with our handcrafted bouquets and carefully selected plants.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-500">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-500">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=plants" className="text-sage-600 hover:text-sage-500">Plants</Link></li>
              <li><Link to="/shop?category=bouquets" className="text-sage-600 hover:text-sage-500">Bouquets</Link></li>
              <li><Link to="/shop?category=pots" className="text-sage-600 hover:text-sage-500">Pots</Link></li>
              <li><Link to="/shop?category=seeds" className="text-sage-600 hover:text-sage-500">Seeds</Link></li>
              <li><Link to="/bouquets/custom" className="text-sage-600 hover:text-sage-500">Custom Bouquets</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sage-600 hover:text-sage-500">About Us</Link></li>
              <li><Link to="/contact" className="text-sage-600 hover:text-sage-500">Contact</Link></li>
              <li><Link to="/store" className="text-sage-600 hover:text-sage-500">Our Store</Link></li>
              <li><Link to="/sustainability" className="text-sage-600 hover:text-sage-500">Sustainability</Link></li>
              <li><Link to="/careers" className="text-sage-600 hover:text-sage-500">Careers</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates, seasonal tips, and exclusive offers.</p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="bg-sage-500 text-white hover:bg-sage-600">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-sage-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-sage-600">
              &copy; {new Date().getFullYear()} Bloom & Root. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-sage-600 hover:text-sage-500">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-sage-600 hover:text-sage-500">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;