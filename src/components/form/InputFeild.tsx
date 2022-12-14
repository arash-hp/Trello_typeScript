import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import React from "react";

export function InputField(props: any) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;

  return (
    <>
      <TextField
        type="text"
        {...field}
        {...props}
        helperText={<ErrorMessage {...props} />}
        error={error}
      />
    </>
  );
}
