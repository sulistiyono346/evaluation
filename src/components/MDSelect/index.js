import * as React from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selects = ({ value, handleOnChange }) => {
  const handleChange = (event) => {
    handleOnChange(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
      <Select
        labelId="select-filled-label"
        id="select-filled"
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: "#FFF" }}
      >
        {value === "" && (
          <MenuItem value="">
            <em>0</em>
          </MenuItem>
        )}

        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </FormControl>
  );
};

Selects.defaultProps = {
  value: 0,
  handleOnChange: () => {},
};

Selects.propTypes = {
  value: PropTypes.number,
  handleOnChange: PropTypes.func,
};

export default Selects;
