import styles from "./SearchBox.module.css";

type SearchBoxProps = {
  placeholder: string
  title?: string
  className?: string
}

export default function SearchBox(props: SearchBoxProps) {
  const { placeholder, title, className } = props; 
  return (
    <div>
      {title?<label>{title}</label>:undefined}
      <input
        className={`${className} ${styles.input} form-control form-control-lg rounded-3`}
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
    
  );
}