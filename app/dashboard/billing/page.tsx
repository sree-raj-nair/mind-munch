import React from 'react'

function billing() {
  return (
    <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl p-4 font-bold text-center mb-12">Pricing Plans</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
              {[
                { plan: 'Basic', price: 'Free', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
                { plan: 'Pro', price: 'Rs.120/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
              ].map((pricing) => (
                <div key={pricing.plan} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">{pricing.plan}</h3>
                  <p className="text-xl font-bold text-purple-600 mb-6">{pricing.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-700 transition duration-300">Choose Plan</a>
                </div>
              ))}
            </div>
          </div>
  )
}

export default billing