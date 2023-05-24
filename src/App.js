import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/SidebarforNav';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
