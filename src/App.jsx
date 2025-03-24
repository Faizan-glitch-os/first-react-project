import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/header.jsx";
import CoreConcept from "./components/core-components.jsx";
import TabButton from "./components/tab-button.jsx";

function clickHandler(buttonName) {
  console.log(`Button clicked: ${buttonName}`);
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept {...CORE_CONCEPTS[index]} key={index} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => {
                clickHandler("Components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("State");
              }}
            >
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
