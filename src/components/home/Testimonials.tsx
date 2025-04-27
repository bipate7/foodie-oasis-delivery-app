
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Enthusiast',
    content: 'FoodNest has completely transformed how I order food. The variety of restaurants and quick delivery is amazing!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'The best food delivery app I\'ve used. Great selection and always on time!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    content: 'As a food blogger, I appreciate the quality and reliability FoodNest provides. Simply the best!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-2 text-3xl font-bold text-center text-gray-800 dark:text-white animate-fade-in">
          What Our Customers Say
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-300 text-center animate-fade-in">
          Trusted by thousands of food lovers across the city
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in dark:bg-gray-800 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
