export default function DietSelect({ diets, handleAgregar }) {
  //
  return (
    <>
      {Array.isArray(diets) &&
        diets.map((e) => (
          <button
            key={Math.random(1)}
            value={e.name}
            onClick={(e) => handleAgregar(e)}
          >
            {e.name}
          </button>
        ))}
    </>
  );
}
