import React from "react";

import CustomizPlan from "./components/CustomizPlan";
import Layout from "./Layouts/AppLayout";
import Plan from "./components/Plan";

function App() {
  return (
    <Layout>
      <div className="  container max-w-xl  gap-4  mx-auto grid grid-cols-12">
        <div className="  md:col-span-8 col-span-12 bg-paper">
          <CustomizPlan />
        </div>
        <div className=" md:col-span-4  col-span-12">
          <Plan />
        </div>
      </div>
    </Layout>
  );
}

export default App;
