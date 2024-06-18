export function HouseReviewToggle({ name, onClick, theme }) {
  return (
    <>
      <input
        id={name}
        type="checkbox"
        onClick={onClick}
        className={`btn-check`}
        style={{ padding: "30px", margin: "10px" }}
        value={name}
        autoComplete="off"
      />
      <label className={`btn btn-outline-${theme}`} htmlFor={name}>
        {name}
      </label>
    </>
  );
}
