
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceRange: string;
  promoted: boolean;
}

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
];

const FeaturedRestaurants = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-2 text-3xl font-bold text-center">Featured Restaurants</h2>
        <p className="mb-8 text-gray-600 text-center">Top-rated restaurants near you</p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
              <Card 
                className={`card-hover h-full overflow-hidden ${
                  hoveredId === restaurant.id ? 'shadow-lg -translate-y-1' : ''
                }`}
                onMouseEnter={() => setHoveredId(restaurant.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-48">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="object-cover w-full h-full"
                  />
                  {restaurant.promoted && (
                    <Badge className="absolute top-3 left-3 bg-foodie-500">Promoted</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                    <div className="flex items-center px-2 py-1 text-sm bg-green-100 text-green-800 rounded-md">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {restaurant.rating}
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-gray-500">{restaurant.cuisine.join(', ')}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{restaurant.deliveryTime}</span>
                    <span>{restaurant.priceRange}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
