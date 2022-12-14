import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { createContext } from 'react';

export const BackendURLContext = createContext(null);

function App() {
  const url = 'https://waldo-backend.crespire.dev/'
  console.log('Backend url: ', url);

  return (
    <div className="mx-auto h-screen w-screen flex flex-col">
      <BackendURLContext.Provider value={url}>
        <Header />
        <main className="flex flex-1 max-h-[92.75vh] max-w-full">
          <Outlet />
        </main>      
        <Footer />
      </BackendURLContext.Provider>
    </div>
  );
}

export default App;
