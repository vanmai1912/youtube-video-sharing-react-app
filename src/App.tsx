import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { routers } from "./routes";

function App() {
  const element = useRoutes(routers);

  return (
    <>
      <Header />
      <main className="w-full md:container md:mx-auto">
        <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
      </main>
    </>
  );
}

export default App;
