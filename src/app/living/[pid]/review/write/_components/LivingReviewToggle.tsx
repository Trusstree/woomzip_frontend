export function LivingReviewToggle({ name, onClick, theme }) {
  return (
    <>
      <input
        id={name}
        type="checkbox"
        onClick={onClick}
        className={`btn-check`}
        style={{ padding: "5px", margin: "5px" }}
        value={name}
        autoComplete="off"
      />
      <label className={`btn btn-outline-${theme}`} htmlFor={name}>
        {name}
      </label>
    </>
  );
}
