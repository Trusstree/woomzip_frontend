type SearchBarProps = {
  className?: string
}

export default function SearchBar(props: SearchBarProps) {
  const { className } = props; 
  return (
    <input type="search" className={`${className} form-control form-outline form-control-lg rounded`} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  );
}