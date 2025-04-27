
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foodie-500">Foodie</span>
              <span className="text-2xl font-bold">Oasis</span>
            </Link>
            <p className="max-w-md text-sm text-gray-600">
              Discover the best food and drinks in your area. FoodieOasis helps you find and order
              from the best local restaurants with just a few taps.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-600 hover:text-foodie-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-foodie-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-foodie-500">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-900 uppercase">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-foodie-500">About us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-foodie-500">FAQ</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-foodie-500">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-foodie-500">Contact us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-900 uppercase">For Restaurants</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/partner" className="text-gray-600 hover:text-foodie-500">Become a Partner</Link>
              </li>
              <li>
                <Link to="/restaurant-app" className="text-gray-600 hover:text-foodie-500">Restaurant App</Link>
              </li>
              <li>
                <Link to="/restaurant-signup" className="text-gray-600 hover:text-foodie-500">Sign up as Restaurant</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-bold text-gray-900 uppercase">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-foodie-500">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-foodie-500">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-foodie-500">Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} FoodieOasis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
