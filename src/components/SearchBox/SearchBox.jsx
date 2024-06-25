import { useId } from "react";

import css from "./SearchBox.module.css";

const SearchBox = ({ handleFilter, filter }) => {
  const searchFieldId = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchFieldId}>Filter Contacts by Name</label>
      <input
        onChange={handleFilter}
        type="text"
        name="searchbox"
        id={searchFieldId}
        defaultValue={filter}
      />
    </div>
  );
};

export default SearchBox;
