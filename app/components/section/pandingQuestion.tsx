const PendingQuestions = () => {
    const questions = [
      {
        user: "Phoenix Baker",
        handle: "@phoenix",
        time: "5min ago",
        question: "What are the requirements for opening a new store?",
      },
      {
        user: "Kory Okumus",
        handle: "@kory",
        time: "4hr ago",
        question: "How do I manage inventory effectively?",
      },
    ];
  
    return (
      <div className="bg-white rounded-2xl shadow p-4 col-span-2">
        <h2 className="text-lg font-semibold mb-4">Pending Questions</h2>
        {questions.map((q) => (
          <div key={q.user} className="border-b py-2">
            <p className="font-medium">{q.user} <span className="text-gray-500 text-sm">({q.handle})</span></p>
            <p className="text-gray-600 text-sm">{q.question}</p>
            <p className="text-xs text-gray-400">{q.time}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default PendingQuestions;