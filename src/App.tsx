import React from "react";
import BurgerBuilder from "./containters/BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";

function App() {
   return (
      <div>
         <Layout>
            <BurgerBuilder />
         </Layout>
      </div>
   );
}

export default App;
