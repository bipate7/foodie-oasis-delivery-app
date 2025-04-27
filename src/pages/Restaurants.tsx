
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RestaurantCard, { Restaurant } from '@/components/restaurant/RestaurantCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

// Mock data
const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Italian', 'Pizza', 'Pasta'],
    rating: 4.5,
    deliveryTime: '25-35 min',
    priceRange: '$$',
    promoted: true,
  },
  {
    id: '2',
    name: 'Burger Joint',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['American', 'Burgers', 'Fast Food'],
    rating: 4.3,
    deliveryTime: '15-25 min',
    priceRange: '$',
    promoted: false,
  },
  {
    id: '3',
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.7,
    deliveryTime: '30-40 min',
    priceRange: '$$$',
    promoted: true,
  },
  {
    id: '4',
    name: 'Delhi Delights',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Indian', 'Curry', 'Vegetarian'],
    rating: 4.4,
    deliveryTime: '35-45 min',
    priceRange: '$$',
    promoted: false,
  },
  {
    id: '5',
    name: 'Taco Town',
    image: 'https://images.unsplash.com/photo-1570461226587-22c0b4864db4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Mexican', 'Tacos', 'Latin'],
    rating: 4.2,
    deliveryTime: '20-30 min',
    priceRange: '$$',
    promoted: true,
  },
  {
    id: '6',
    name: 'Pasta Paradise',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Italian', 'Pasta', 'Wine'],
    rating: 4.6,
    deliveryTime: '30-40 min',
    priceRange: '$$$',
    promoted: false,
  },
  {
    id: '7',
    name: 'Dessert Dream',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Desserts', 'Bakery', 'Café'],
    rating: 4.8,
    deliveryTime: '15-25 min',
    priceRange: '$$',
    promoted: true,
  },
  {
    id: '8',
    name: 'Healthy Harvest',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Salads', 'Healthy', 'Smoothies'],
    rating: 4.4,
    deliveryTime: '20-30 min',
    priceRange: '$$',
    promoted: false,
  },
  {
    id: '9',
    name: 'Spice Kingdom',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Indian', 'Spicy', 'Curry'],
    rating: 4.5,
    deliveryTime: '30-40 min',
    priceRange: '$$',
    promoted: false,
  },
  {
    id: '10',
    name: 'Noodle House',
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Asian', 'Noodles', 'Soup'],
    rating: 4.2,
    deliveryTime: '25-35 min',
    priceRange: '$',
    promoted: true,
  },
  {
    id: '11',
    name: 'Seafood Haven',
    image: 'https://images.unsplash.com/photo-1605209971703-94da75dfa6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Seafood', 'Grill', 'Fine Dining'],
    rating: 4.7,
    deliveryTime: '35-50 min',
    priceRange: '$$$',
    promoted: false,
  },
  {
    id: '12',
    name: 'Mediterranean Delights',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    cuisine: ['Mediterranean', 'Healthy', 'Vegetarian'],
    rating: 4.6,
    deliveryTime: '30-40 min',
    priceRange: '$$',
    promoted: true,
  },
];

const cuisines = [
  'Italian', 'American', 'Japanese', 'Indian', 'Mexican', 
  'Chinese', 'Thai', 'Mediterranean', 'Vegetarian', 'Seafood'
];

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number[]>([0]);
  const [maxPrice, setMaxPrice] = useState<string>('$$$');
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);

  useEffect(() => {
    const category = searchParams.get('category');
    
    // Apply filters based on URL params and local state
    let results = restaurants;
    
    if (category) {
      const categoryLower = category.toLowerCase();
      results = results.filter((restaurant) => 
        restaurant.cuisine.some((c) => c.toLowerCase() === categoryLower)
      );
      
      // Update selected cuisines if category is present
      if (!selectedCuisines.includes(category)) {
        setSelectedCuisines([...selectedCuisines, category]);
      }
    }
    
    if (searchTerm) {
      results = results.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCuisines.length > 0) {
      results = results.filter((restaurant) =>
        restaurant.cuisine.some((c) => selectedCuisines.includes(c))
      );
    }
    
    if (minRating[0] > 0) {
      results = results.filter((restaurant) => restaurant.rating >= minRating[0]);
    }
    
    if (maxPrice !== '$$$') {
      results = results.filter((restaurant) => restaurant.priceRange.length <= maxPrice.length);
    }
    
    setFilteredRestaurants(results);
  }, [searchParams, searchTerm, selectedCuisines, minRating, maxPrice]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simply trigger re-filtering without changing the URL
  };

  const toggleCuisine = (cuisine: string) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCuisines([]);
    setMinRating([0]);
    setMaxPrice('$$$');
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Restaurants</h1>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <form onSubmit={handleSearch} className="flex w-full md:w-1/2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search restaurants or cuisines..."
                className="pl-9 pr-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="ml-2 bg-foodie-500 hover:bg-foodie-600">Search</Button>
          </form>
          
          <Button
            variant="outline"
            className="flex items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters {showFilters ? '(Hide)' : '(Show)'}
          </Button>
        </div>
        
        {showFilters && (
          <div className="p-4 mt-4 bg-gray-50 rounded-lg animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Filter Options</h3>
              <Button variant="ghost" onClick={clearFilters} className="text-sm">
                Clear filters
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-medium">Cuisines</h4>
                <div className="flex flex-wrap gap-2">
                  {cuisines.map((cuisine) => (
                    <Badge
                      key={cuisine}
                      variant={selectedCuisines.includes(cuisine) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedCuisines.includes(cuisine)
                          ? "bg-foodie-500 hover:bg-foodie-600"
                          : ""
                      }`}
                      onClick={() => toggleCuisine(cuisine)}
                    >
                      {cuisine}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="mb-2 font-medium">Minimum Rating</h4>
                <div className="px-2">
                  <Slider
                    value={minRating}
                    max={5}
                    step={0.5}
                    onValueChange={setMinRating}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Any</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">
                    {minRating[0] > 0 ? `${minRating[0]}+ stars` : "Any rating"}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="mb-2 font-medium">Price Range</h4>
                <div className="flex gap-2">
                  {['$', '$$', '$$$'].map((price) => (
                    <Button
                      key={price}
                      variant={maxPrice === price ? "default" : "outline"}
                      className={`flex-1 ${
                        maxPrice === price ? "bg-foodie-500 hover:bg-foodie-600" : ""
                      }`}
                      onClick={() => setMaxPrice(price)}
                    >
                      {price}
                    </Button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {maxPrice === '$' ? 'Budget' : maxPrice === '$$' ? 'Moderate' : 'Any price range'}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <p className="mb-4 text-gray-600">
            {filteredRestaurants.length} restaurants found
          </p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
          
          {filteredRestaurants.length === 0 && (
            <div className="p-8 text-center">
              <h3 className="mb-2 text-xl font-medium">No restaurants found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search term to find restaurants.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;
