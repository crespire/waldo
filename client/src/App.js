import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>      
      <Footer />
    </div>    
  );
}

export default App;
