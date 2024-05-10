export function LivingReviewToggle({ name, handleBadge, theme }) {
  return (
    <>
      <input
        id={name}
        type="checkbox"
        onClick={handleBadge}
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
