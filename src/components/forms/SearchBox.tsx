import styles from "./SearchBox.module.css";

type SearchBoxProps = {
  placeholder: string
  rows: number
  title?: string
  className?: string
}

export default function SearchBox(props: SearchBoxProps) {
  const { placeholder, rows, title, className } = props; 
  return (
    <div>
      {title?<label>{title}</label>:undefined}
      <textarea
        className={`${className} ${styles.input} form-control form-outline form-control-lg rounded-0`}
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-addon"
        rows={rows}
      />
    </div>
    
  );
}