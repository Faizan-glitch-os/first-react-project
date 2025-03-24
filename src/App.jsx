import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

function HeaderComponent() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConceptComponent({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConceptComponent {...CORE_CONCEPTS[0]} />
            <CoreConceptComponent {...CORE_CONCEPTS[1]} />
            <CoreConceptComponent {...CORE_CONCEPTS[2]} />
            <CoreConceptComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
