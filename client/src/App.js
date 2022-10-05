import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="grow flex flex-col p-2 max-w-full max-h-full">
      <Header />
      <main className="flex grow max-w-full max-h-full">
        <Outlet />
      </main>      
      <Footer />
    </div>    
  );
}

export default App;
