export function LivingReviewRadio({ name, onClick, value, theme, title }) {
  return (
    <>
      <input
        id={`${name}_${title}`}
        type="radio"
        onClick={onClick}
        className={`btn-check`}
        style={{ padding: "5px", margin: "5px" }}
        value={value}
        name={name}
        autoComplete="off"
      />
      <label className={`btn btn-outline-${theme}`} htmlFor={`${name}_${title}`}>
        {title}
      </label>
    </>
  );
}
