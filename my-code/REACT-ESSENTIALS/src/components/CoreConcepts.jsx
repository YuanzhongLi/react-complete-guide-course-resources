import { CORE_CONCEPTS } from "../data.js";

import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  console.log("CoreConcepts component rendered");
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => <CoreConcept key={`${concept.title}:${index}`} {...concept} />)}
      </ul>
    </section>
  );
}
