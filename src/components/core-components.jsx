export default function CoreConcept({ image, title, description }, key) {
  return (
    <li key={key}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
