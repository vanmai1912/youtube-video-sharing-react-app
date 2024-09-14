import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Header from "./components/Header";
import { routers } from "./routes";

function App() {
  const element = useRoutes(routers);

  return (
    <div className="relative">
      <Header />
      <main className="w-full md:container md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      </main>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        stacked
      />
    </div>
  );
}

export default App;
