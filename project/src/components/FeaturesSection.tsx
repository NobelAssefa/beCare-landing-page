import React from 'react';
import { Search, CreditCard, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 text-blue-600" />,
    title: "Search",
    description: "Browse our vast selection of tickets for events, travel, and more.",
    step: "01"
  },
  {
    icon: <CreditCard className="h-10 w-10 text-blue-600" />,
    title: "Book & Pay",
    description: "Secure your tickets with our fast and safe payment system.",
    step: "02"
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: "Get Tickets",
    description: "Receive your e-tickets instantly via email or in the app.",
    step: "03"
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "24/7 Support",
    description: "Our dedicated team is always ready to help with any questions.",
    step: "04"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've simplified the booking process so you can get tickets to your favorite events in just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative mb-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex justify-center items-center">
                  {feature.icon}
                </div>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {feature.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of happy customers who book with us every day
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;