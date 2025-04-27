
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroBanner = () => {
  const [location, setLocation] = useState('');

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-full h-full px-4 text-white">
        <h1 className="mb-2 text-4xl font-bold text-center md:text-5xl lg:text-6xl animate-fade-in">
          Discover the best food in your area
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-center opacity-90 animate-fade-in">
          Order from your favorite restaurants and track your delivery in real-time
        </p>
        
        <div className="w-full max-w-md animate-fade-in">
          <div className="relative flex">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Enter your delivery location"
                className="pl-10 pr-4 py-6 rounded-l-md w-full border-r-0 focus-visible:ring-foodie-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button className="px-8 rounded-l-none bg-foodie-500 hover:bg-foodie-600 text-white">
              Find Food
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
