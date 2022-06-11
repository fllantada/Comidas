import react from "react";

export default function Recipe({ name, image, summary }) {
  return (
    <>
      
      <h3>{name}</h3>
      <div>

      <img src={image} alt="food" />
      <p>{summary}</p>
      </div>
    </>
  );
}
