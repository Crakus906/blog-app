import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import { InputWrapper } from './style';

export default function Input(props) {
  const {
    disabled,
    type,
    className,
    name,
    label,
  } = props;

  const [field, meta] = useField(name)

  return (
    <InputWrapper>
      <div className="label">{label}</div>
      <input
        {...field}
        className={cn(`input ${meta.error ? 'input__error' : null}`,className)}
        type={type}
        disabled={disabled}
        name={field.name}
      />
      <div className="error">{meta && meta.error}</div>
    </InputWrapper>
  );
}
