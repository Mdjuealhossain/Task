import React from "react";

import CustomizPlan from "./components/CustomizPlan";
import Layout from "./Layouts/AppLayout";
import Plan from "./components/Plan";

function App() {
  return (
    <Layout>
      <div className=" container gap-4  mx-auto grid grid-cols-8">
        <div className="  md:col-span-6 col-span-8 bg-paper">
          <CustomizPlan />
        </div>
        <div className=" md:col-span-2  col-span-8">
          <Plan />
        </div>
      </div>
    </Layout>
  );
}

export default App;
