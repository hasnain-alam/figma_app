import Image from "next/image";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import AccountProgress from "./components/widgets/AccountProgress";
import FranchiseesCard from "./components/widgets/FranchiseesCard"
import InsightsCard from "./components/widgets/InsightsCard";
import FinancialCard from "./components/widgets/financialCard"
import LeadsCard from "./components/widgets/LeadCard";
import PendingQuestions from "./components/section/pandingQuestion";
import ChatAssistant from "./components/section/ChartAssistance"


export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 bg-gray-100 p-6">
          <div className="flex flex-row">
            <AccountProgress />
            <div className="grid grid-cols-2 p-4 ml-4 mr-4 gap-4">
              <FranchiseesCard />
              <InsightsCard />
              <FinancialCard />
              <LeadsCard />
            </div>
  
          </div>
          <div className="flex flex-row justify-space gap-4 m-1">
             <PendingQuestions/>
             <ChatAssistant/>
          </div>
        </div>
      </div>
    </div>
  );
}