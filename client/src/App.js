import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="mx-auto h-screen w-screen flex flex-col">
      <Header />
      <main className="flex flex-1 max-h-[93.5vh] max-w-full">
        <Outlet />
      </main>      
      <Footer />
    </div>    
  );
}

export default App;
