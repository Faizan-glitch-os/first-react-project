import AllCoreConcepts from "./components/all-core-concepts.jsx";
import Examples from "./components/examples.jsx";

import Header from "./components/header.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <AllCoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </>
  );
}

export default App;
