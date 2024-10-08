import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pb-6">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
