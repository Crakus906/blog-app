import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import { Input as InputAntd } from 'antd';

export default function TextArea(props) {
  const {
    disabled,
    type,
    className,
    name,
    onChange
  } = props;

  const [field, meta] = useField(name);

  const { TextArea } = InputAntd;

  return (
    <TextArea showCount handlOonChange onChange={onChange}
      {...field}
      className={cn(`input ${meta.error ? 'input__error' : null}`,className)}
      type={type}
      disabled={disabled}
      name={field.name}
    />
  );
}
