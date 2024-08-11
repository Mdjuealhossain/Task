import React from "react";

import CustomizPlan from "./components/CustomizPlan";
import Layout from "./Layouts/AppLayout";
import Plan from "./components/Plan";

function App() {
  return (
    <Layout>
      <div className=" container gap-4  mx-auto grid grid-cols-8">
        <div className=" col-span-6 bg-paper">
          <CustomizPlan />
        </div>
        <div className=" col-span-2 bg-dark-light">
          <Plan />
        </div>
      </div>
    </Layout>
  );
}

export default App;
