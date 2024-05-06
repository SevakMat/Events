import { TextField } from "@mui/material";
import useDebounce from "components/hooks/useDebounce";
import { ChangeEvent, useState } from "react";
import { getEventsFx } from "store/events/effects";

const SearchEvent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounce = useDebounce();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debounce(() => {
      getEventsFx({
        searchTerm: e.target.value,
      });
    })();
  };

  return (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      value={searchTerm}
      onChange={handleOnChange}
    />
  );
};
export default SearchEvent;
