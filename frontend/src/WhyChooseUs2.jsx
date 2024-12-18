import React from 'react';

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <div className="text-orange-500 text-xl font-bold mb-4">01</div>
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-4xl mb-2">🔒</div>
          <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
          <div className="w-2/3 h-1 bg-orange-500 mt-4"></div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <div className="text-orange-500 text-xl font-bold mb-4">02</div>
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-4xl mb-2">🚚</div>
          <h3 className="text-lg font-semibold mb-2">On - Time Delivery</h3>
          <div className="w-2/3 h-1 bg-orange-500 mt-4"></div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <div className="text-orange-500 text-xl font-bold mb-4">03</div>
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-4xl mb-2">⏰</div>
          <h3 className="text-lg font-semibold mb-2">Real Time Tracking</h3>
          <div className="w-2/3 h-1 bg-orange-500 mt-4"></div>
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <div className="text-orange-500 text-xl font-bold mb-4">04</div>
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-4xl mb-2">💬</div>
          <h3 className="text-lg font-semibold mb-2">24/7 Online Support</h3>
          <div className="w-2/3 h-1 bg-orange-500 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
