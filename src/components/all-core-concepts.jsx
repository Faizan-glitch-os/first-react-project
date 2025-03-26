import CoreConcept from "./core-concept";
import { CORE_CONCEPTS } from "../data";

export default function AllCoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept {...item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}
