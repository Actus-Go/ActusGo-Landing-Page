import React from 'react';

const MonthlyUsageSelect = ({ formData, handleChange }) => {
  return (
    <div className="w-full mt-0 pt-0">
      <label htmlFor="monthly-usage" className="block text-lg text-gray-700 mb-2">
        Expected Monthly Usage
      </label>
      <select
        id="monthly-usage"
        name="monthlyUsage"
        value={formData.monthlyUsage}
        onChange={handleChange}
        className="w-full border-gray-300 border-2 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        <option value="1-100">1-100</option>
        <option value="101-500">101-500</option>
        <option value="501-1000">501-1000</option>
        <option value="1001-10000">1001-10,000</option>
        <option value="10001-100000">10,001-100,000</option>
        <option value="100001-1000000">100,001-1M</option>
        <option value="1000000+">1M+</option>
      </select>
    </div>
  );
};

export default MonthlyUsageSelect;