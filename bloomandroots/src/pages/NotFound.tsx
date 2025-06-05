import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-6xl font-serif font-bold text-sage-800 mb-6">404</h1>
          <p className="text-xl text-sage-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-sage-500 hover:bg-sage-600 text-white"
            >
              <Link to="/">Return to Home</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-sage-300 text-sage-700"
            >
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;