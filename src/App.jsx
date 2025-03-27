import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import GlobalStyles from "./components/GlobalStyles";
import Sidebar from "./components/Layout/components/Sidebar";

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;
