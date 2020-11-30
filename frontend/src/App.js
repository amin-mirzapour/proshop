import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>welcom</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
