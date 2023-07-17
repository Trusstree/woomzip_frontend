type SearchBarProps = {
  title: string
  className?: string
}

export default function SearchBar(props: SearchBarProps) {
  const { title, className } = props; 
  return (
    <div className="mt-3">
      <label>{title}</label>
      <input type="search" className={`${className} form-control form-outline form-control-lg rounded`} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    </div>
    
  );
}