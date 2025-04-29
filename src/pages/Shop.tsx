import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/shop/ProductGrid';
import ProductFilters from '@/components/shop/ProductFilters';
import ProductSort from '@/components/shop/ProductSort';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [, setPriceRange] = useState({ min: 0, max: 100 });
  const [, setSortOption] = useState('featured');

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    
    if (newCategory) {
      searchParams.set('category', newCategory);
    } else {
      searchParams.delete('category');
    }
    
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-2">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
        </h1>
        <p className="text-sage-600 mb-8">
          Discover our curated selection of premium products
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-28">
              <ProductFilters
                onCategoryChange={handleCategoryChange}
                onSearchChange={setSearchQuery}
                onPriceChange={(min, max) => setPriceRange({ min, max })}
                selectedCategory={category}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sage-600">
                Showing all products
              </p>
              <ProductSort onSortChange={setSortOption} />
            </div>

            <ProductGrid
              category={category}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;