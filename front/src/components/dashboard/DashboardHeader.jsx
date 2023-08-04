const DashboardHeader = ({currentSection, setCurrentSection}) => {

  const StateSetter = (e, state) => {
    if(state==='landing') {
      setCurrentSection('landing')
    }
    if(state==='register') {
      setCurrentSection('register')
    }
  }

  const listStyles = 'hover:cursor-pointer hover:text-blue-800'

  return (
    <header className="absolute top-0 w-full flex justify-center bg-blue-300 text-white py-4">
      <ul className="flex flex-row gap-4 ">
        <li onClick={(e) => StateSetter(e, 'landing')} className={listStyles}>Dashboard</li>
        <li onClick={(e) => StateSetter(e, 'register')} className={listStyles}>Register Todos</li>
      </ul>
    </header>
  );
}
export default DashboardHeader;