
import { Clock, Truck, Utensils } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Find a Restaurant',
    description: 'Browse restaurants or search for your favorite cuisine',
    icon: <Utensils className="w-8 h-8 mb-4 text-foodie-500" />,
  },
  {
    id: 2,
    title: 'Place Your Order',
    description: 'Choose meals and pay securely online with quick checkout',
    icon: <Clock className="w-8 h-8 mb-4 text-foodie-500" />,
  },
  {
    id: 3,
    title: 'Fast Delivery',
    description: 'Track your order in real-time until it arrives at your door',
    icon: <Truck className="w-8 h-8 mb-4 text-foodie-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-2 text-3xl font-bold text-center">How It Works</h2>
        <p className="mb-12 text-gray-600 text-center">
          Getting your favorite food delivered has never been easier
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-foodie-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                <span className="mr-2 text-foodie-500">{step.id}.</span>
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
