import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/header.jsx";
import CoreConcept from "./components/core-components.jsx";
import TabButton from "./components/tab-button.jsx";

import { useState } from "react";

let tabContent = "components";

function App() {
  const [tabContent, setTabContent] = useState("components");

  function clickHandler(buttonName) {
    setTabContent(buttonName);
    console.log(`Button clicked: ${buttonName}`);
  }
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
                clickHandler("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                clickHandler("state");
              }}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
