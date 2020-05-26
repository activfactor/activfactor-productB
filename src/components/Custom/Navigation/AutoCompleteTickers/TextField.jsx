import React from "react";
import { TextField, CircularProgress } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useStyles } from './style';

const TextInput = ({ params, loading, noMargin, placeholder = "Search for stocks" }) => {
    const classes = useStyles();
  return (
    <TextField
      {...params}
      style={{ margin: noMargin ? "0px" : "0px 20px" }}
      label={placeholder}
      variant="outlined"
      fullWidth={true}
      InputProps={{
        ...params.InputProps,
        style: {
          padding: '2px 8px'
        },
        endAdornment: (
          <React.Fragment>
            {loading ? <CircularProgress color="#ccc" size={20} /> : <SearchIcon />}
          </React.Fragment>
        ),
      }}
      InputLabelProps={{
        color: "primary",
        disabled: true,
        classes: {
            ...classes
        }
      }}
    />
  );
};

export default TextInput;
