import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { createContext } from 'react';

export const BaseURLContext = createContext(null);

function App() {
  const url = 'https://waldo-backend.onrender.com/'

  return (
    <div className="mx-auto h-screen w-screen flex flex-col">
      <BaseURLContext.Provider value={url}>
        <Header />
        <main className="flex flex-1 max-h-[92.75vh] max-w-full">
          <Outlet />
        </main>      
        <Footer />
      </BaseURLContext.Provider>
    </div>
  );
}

export default App;
