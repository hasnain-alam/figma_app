const FinancialCard = () => {
    return (
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Financial Wellbeing</h2>
        <p className="text-sm text-gray-500">20 Total Franchisees <span className="text-green-500">+2.1%</span></p>
        <div className="mt-4">
          <p className="text-sm">Target: <strong>$500,000</strong></p>
          <p className="text-sm">Current: <strong>$450,000</strong></p>
        </div>
      </div>
    );
  };
  
  export default FinancialCard;