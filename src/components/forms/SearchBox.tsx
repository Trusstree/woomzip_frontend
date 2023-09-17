import styles from "./SearchBox.module.css";

type SearchBoxProps = {
  placeholder: string
  title?: string
  className?: string
}

export default function SearchBox(props: SearchBoxProps) {
  const { placeholder, title, className } = props;
  return (
    <div
      className={`input-group rounded-4`}>
      {title?<label>{title}</label>:undefined}

      <div className="input-group-prepend" id="search-addon">
        <span className="input-group-text bg-white rounded-start-4 rounded-end-0"
          style={{
            borderColor:"#101648",
            borderWidth:"3px",
            borderRightWidth:"0px",
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={50}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
      </div>

      <input
        className={`${className} ${styles.input} form-control form-control-lg rounded-0`}
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-addon"
        style={{
          borderColor:"#101648",
          borderWidth:"3px",
          borderLeftWidth:"0px",
          borderRightWidth:"0px",
        }}
      />

      <button className="btn btn-lg btn-outline-white fw-bold rounded-start-0 rounded-end-4"
        type="button"
        id="button-addon2"
        style={{
          borderColor:"#101648",
          borderWidth:"3px",
          borderLeftWidth:"3px",
          color:"#101648",
        }}>
        Search
      </button>
    </div>
    
  );
}