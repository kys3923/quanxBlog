import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardLanding from "../components/dashboard/DashboardLanding";
import DashboardRegister from "../components/dashboard/DashboardRegister";

import { useState } from 'react'

const Dashboard = (props) => {

  const [ currentSection, setCurrentSection ] = useState('landing')

  const SectionDistributor = (state) => {
    if(state === 'landing') {
      return <DashboardLanding />
    }
    if(state === 'register') {
      return <DashboardRegister />
    }
  }

  return (
    <div>
      <DashboardHeader currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {SectionDistributor(currentSection)}
    </div>
  );
}
export default Dashboard;