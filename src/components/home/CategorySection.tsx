import { Link } from 'react-router-dom';

type CategoryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Indoor Plants",
    description: "Beautiful plants to brighten up your home",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=600&q=80",
    url: "/shop?category=plants"
  },
  {
    id: 2,
    title: "Fresh Bouquets",
    description: "Handcrafted bouquets for any occasion",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=600&q=80",
    url: "/shop?category=bouquets"
  },
  {
    id: 3,
    title: "Ceramic Pots",
    description: "Stylish homes for your beloved plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&h=600&q=80",
    url: "/shop?category=pots"
  },
  {
    id: 4,
    title: "Quality Seeds",
    description: "Start your own garden with our premium seeds",
    image: "https://images.unsplash.com/photo-1599685315640-9ceab2f58148?auto=format&fit=crop&w=600&h=600&q=80",
    url: "/shop?category=seeds"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-800 mb-4">
            Shop Our Collections
          </h2>
          <p className="text-sage-600 max-w-xl mx-auto">
            Explore our carefully curated categories of plants, bouquets, pots, and seeds to find what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              to={category.url} 
              key={category.id}
              className="group block overflow-hidden rounded-xl shadow-md hover-lift"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sage-600 mb-4">
                  {category.description}
                </p>
                <span className="inline-block font-medium text-terracotta-500 group-hover:translate-x-2 transition-transform">
                  Shop now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;