import React from 'react';
import { TextField, IFormFieldProps } from 'arcadia-common-fe';

interface ITypeFieldProps extends IFormFieldProps {
  type?: string
}

export const TypeField: React.FC<ITypeFieldProps> = ({ className, label = 'Type', type = 'number' }) => (
  <TextField
    className={className}
    name="typeId"
    label={label}
    type={type}
  />
);
