const FranchiseesCard = () => {
    return (
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Total Franchisees Onboard</h2>
        <p className="text-2xl font-bold">14 <span className="text-green-500 text-sm">+2.4%</span></p>
        <div className="grid grid-cols-3">
          <div className="bg-blue-700 mr-2 rounded h-3 mt-2"></div>
          <div className="bg-blue-400 mr-2 rounded h-3 mt-2"></div>
          <div className="bg-blue-200 mr-2 rounded h-3 mt-2"></div>
        </div>
        <ul className="text-sm mt-3 space-y-1">
          <li className="flex flex-row">Stage 1 (Initial Inquiry): <strong className="ml-60">02</strong></li>
          <li>Stage 2 (Document Submission): <strong className="ml-44">07</strong></li>
          <li>Stage 3 (Training): <strong className="ml-66">05</strong></li>
        </ul>
      </div>
    );
  };
  
  export default FranchiseesCard;