
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceRange: string;
  promoted?: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card 
        className={`card-hover h-full overflow-hidden ${
          isHovered ? 'shadow-lg -translate-y-1' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
  );
};

export default RestaurantCard;
