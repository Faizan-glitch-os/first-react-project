import TabButton from "./tab-button";
import { EXAMPLES } from "../data";

import { useState } from "react";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState(null);
  function clickHandler(buttonName) {
    setSelectedTab(buttonName);
    console.log(`Button clicked: ${buttonName}`);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTab === "components" ? true : false}
          onClick={() => {
            clickHandler("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTab === "jsx" ? true : false}
          onClick={() => {
            clickHandler("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTab === "props" ? true : false}
          onClick={() => {
            clickHandler("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTab === "state" ? true : false}
          onClick={() => {
            clickHandler("state");
          }}
        >
          State
        </TabButton>
      </menu>
      {selectedTab == null ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
