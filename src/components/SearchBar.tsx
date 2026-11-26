interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search company or position..."
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;