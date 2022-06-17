export default function Recipe({ name, image, summary, diets, id, score }) {
  return (
    <>
      <h3>{name}</h3>
      <h4>Score:{score}</h4>
      <div>
        <img src={image} alt="food" />
        <p>{summary}</p>
      </div>
      <ul>
        {Array.isArray(diets) &&
          diets.map((e) => <li key={Math.random()}> {e}</li>)}
      </ul>
    </>
  );
}
