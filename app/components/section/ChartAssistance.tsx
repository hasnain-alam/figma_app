const ChatAssistant = () => {
    return (
      <div className="bg-white rounded-2xl shadow p-4 col-span-2">
        <h2 className="text-lg font-semibold mb-2">Welcome to the AI Chat Assistant</h2>
        <input
          type="text"
          placeholder="Ask your question here..."
          className="w-full p-2 border rounded mt-2"
        />
      </div>
    );
  };
  
  export default ChatAssistant;