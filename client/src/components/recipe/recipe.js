import react from "react";

export default function Recipe({ name, image, summary }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="food" />
      <p>{summary}</p>
    </div>
  );
}
