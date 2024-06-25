import { useId } from "react";

import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const searchFieldId = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchFieldId}>Filter Contacts by Name</label>
      <input
        onChange={(event) => dispatch(setFilter(event.target.value))}
        type="text"
        name="searchbox"
        id={searchFieldId}
        defaultValue={filter}
      />
    </div>
  );
};

export default SearchBox;
