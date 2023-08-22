import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholder: string
  title?: string
  className?: string
}

export default function SearchBar(props: SearchBarProps) {
  const { placeholder, title, className } = props; 
  return (
    <div>
      {title?<label>{title}</label>:undefined}
      <input
        type="search"
        className={`${className} ${styles.input} form-control form-outline form-control-lg rounded-0`}
        placeholder={placeholder}
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
    
  );
}