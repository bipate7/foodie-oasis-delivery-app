
import { Button } from '@/components/ui/button';
import { Download, Smartphone } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-foodie-600 to-foodie-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 text-center md:text-left md:mb-0 md:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
              <Download className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm font-medium text-white">Free Download</span>
            </div>
            
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl animate-fade-in">
              Get the FoodNest App
            </h2>
            
            <p className="mb-6 text-lg text-white/90 max-w-md animate-fade-in">
              Order food from your favorite restaurants, track deliveries in real-time, and discover exclusive deals. Experience the best food delivery at your fingertips.
            </p>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-black hover:bg-gray-900 flex items-center justify-center space-x-2 animate-fade-in card-hover text-white"
                variant="default"
              >
                <svg viewBox="0 0 384 512" width="20" className="mr-2 text-white">
                  <path 
                    fill="currentColor" 
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
                <div>
                  <div className="text-xs font-light text-left text-white">Download on the</div>
                  <div className="text-sm font-semibold text-left text-white">App Store</div>
                </div>
              </Button>
              
              <Button 
                className="bg-black hover:bg-gray-900 flex items-center justify-center space-x-2 animate-fade-in card-hover text-white"
                variant="default"
              >
                <svg viewBox="0 0 512 512" width="20" className="mr-2 text-white">
                  <path 
                    fill="currentColor" 
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  />
                </svg>
                <div>
                  <div className="text-xs font-light text-left text-white">GET IT ON</div>
                  <div className="text-sm font-semibold text-left text-white">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="w-72 h-auto md:w-1/3 relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-foodie-400/30 to-foodie-600/30 blur-2xl rounded-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="FoodNest App" 
              className="relative rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-500"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl animate-bounce-subtle">
              <div className="flex items-center space-x-2 text-white">
                <Smartphone className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Available on all devices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
