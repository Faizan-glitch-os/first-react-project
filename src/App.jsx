import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/header.jsx";
import CoreConcept from "./components/core-components.jsx";
import TabButton from "./components/tab-button.jsx";

import { useState } from "react";

let tabContent = null;

function App() {
  const [tabContent, setTabContent] = useState(null);

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
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept {...item} key={item.title} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components" ? true : false}
              onClick={() => {
                clickHandler("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx" ? true : false}
              onClick={() => {
                clickHandler("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props" ? true : false}
              onClick={() => {
                clickHandler("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state" ? true : false}
              onClick={() => {
                clickHandler("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent == null ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
