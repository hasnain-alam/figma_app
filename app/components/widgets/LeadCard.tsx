const LeadsCard = () => {
    const leads = [
      { name: "Wade Warren", stage: "Initial Inquiry" },
      { name: "Ava Wright", stage: "Initial Inquiry" },
      { name: "Cody Fisher", stage: "Initial Inquiry" },
    ];
  
    return (
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Prospect Leads</h2>
        <ul className="space-y-2 text-sm">
          {leads.map((lead) => (
            <li key={lead.name} className="flex justify-between">
              <span>{lead.name}</span>
              <span className="text-gray-500">{lead.stage}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LeadsCard;