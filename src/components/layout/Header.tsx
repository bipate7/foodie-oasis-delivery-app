import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-6">
            <span className="text-2xl font-bold text-foodnest-500">Food</span>
            <span className="text-2xl font-bold text-gray-900">Nest</span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/restaurants" className="nav-link">Restaurants</Link>
            <Link to="/offers" className="nav-link">Offers</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <div className="relative animate-fade-in">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search restaurants or food..."
              className="w-40 pl-8 lg:w-64 focus:border-foodnest-500"
            />
          </div>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative animate-bounce-subtle">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-foodnest-500 text-[10px] font-medium text-white">3</span>
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="animate-fade-in">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button className="bg-foodnest-500 hover:bg-foodnest-600 animate-fade-in">Sign in</Button>
          </Link>
        </div>
        
        <div className="flex items-center space-x-2 md:hidden">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-foodnest-500 text-[10px] font-medium text-white">3</span>
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="flex flex-col p-4 space-y-4 border-t md:hidden animate-fade-in">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search restaurants or food..."
              className="w-full pl-8"
            />
          </div>
          <Link to="/" className="nav-link py-2">Home</Link>
          <Link to="/restaurants" className="nav-link py-2">Restaurants</Link>
          <Link to="/offers" className="nav-link py-2">Offers</Link>
          <Link to="/contact" className="nav-link py-2">Contact</Link>
          <Link to="/login">
            <Button className="w-full bg-foodnest-500 hover:bg-foodnest-600">Sign in</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
