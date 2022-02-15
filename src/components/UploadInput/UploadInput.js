import React, { useCallback } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export default function UploadInput({
  name,
  field,
  error,
  onFocus,
  onChange,
  ...rest
}) {
  const handleChange = useCallback(
    (e) => {
      const filesList = e.target.files;
      const length = filesList.length;
      const files = [];
      for (let i = 0; i < length; i++) {
        files.push(filesList.item(i));
      }

      onChange({ name, value: files });
    },
    [onChange, name]
  );

  return (
    <TextField
      error={!!error}
      fullWidth
      helperText={!!error ? error : "Selecione o arquivo"}
      // inputProps={{
      //   accept: ".csv",
      // }}
      name={name}
      type="file"
      onChange={handleChange}
      variant="outlined"
      {...rest}
    />
  );
}
UploadInput.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
};
