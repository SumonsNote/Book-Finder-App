import { useState } from "react";

export default function SortFunc({ onSort }) {
  const [sortTerm, setSortTerm] = useState("");

  function handleSortChange(event) {
    setSortTerm(event);
    onSort(event);
  }

  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortTerm"
        id="sortTerm"
        value={sortTerm}
        onChange={(event) => handleSortChange(event.target.value)}
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </div>
  );
}
