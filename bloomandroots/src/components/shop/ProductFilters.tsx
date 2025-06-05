import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

interface ProductFiltersProps {
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
  onPriceChange: (min: number, max: number) => void;
  selectedCategory: string;
}

const categories = [
  { value: '', label: 'All Products' },
  { value: 'plants', label: 'Plants' },
  { value: 'bouquets', label: 'Bouquets' },
  { value: 'pots', label: 'Pots' },
  { value: 'seeds', label: 'Seeds' }
];

const ProductFilters = ({ 
  onCategoryChange, 
  onSearchChange, 
  onPriceChange,
  selectedCategory 
}: ProductFiltersProps) => {
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(search);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onPriceChange(value[0], value[1]);
  };

  return (
    <div className="space-y-8">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="bg-sage-500 hover:bg-sage-600">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <RadioGroup 
          defaultValue={selectedCategory} 
          onValueChange={onCategoryChange}
        >
          {categories.map((category) => (
            <div key={category.value} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={category.value} id={`category-${category.value || 'all'}`} />
              <Label 
                htmlFor={`category-${category.value || 'all'}`}
                className="cursor-pointer"
              >
                {category.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <Button 
        variant="outline" 
        className="w-full border-sage-300 text-sage-700"
        onClick={() => {
          onCategoryChange('');
          setSearch('');
          onSearchChange('');
          setPriceRange([0, 100]);
          onPriceChange(0, 100);
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default ProductFilters;