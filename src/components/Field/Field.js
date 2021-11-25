import React from "react";
import { Checkbox, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export default function Field({ name, field, error, ...rest }) {
  if (field.type === "checkbox")
    return <Checkbox name={name} checked={field.value} {...rest} />;

  return (
    <TextField
      error={!!error}
      fullWidth
      helperText={error ? error : field.placeholder}
      label={field.label}
      name={name}
      type={field.type}
      value={field.value}
      color="primary"
      variant="outlined"
      {...rest}
    />
  );
}
Field.propTypes = {
  name: PropTypes.string,
  field: PropTypes.object,
  error: PropTypes.string,
};
