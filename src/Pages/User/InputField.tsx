import React, { FC } from 'react';
import { useField, FieldAttributes as FormikFieldAttributes } from 'formik';
import { CFormGroup, CLabel, CInput, CFormText } from '@coreui/react';

type Props = {
  label: string;
  type: string;
  required?: boolean;
} & FormikFieldAttributes<any>;

const InputField: FC<Props> = ({ label, type, required, ...otherProps}) => {
  const [field, meta] = useField(otherProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
        <CFormGroup>
            <CLabel htmlFor={otherProps.name}>{label}</CLabel>
            <CInput
                type={type}
                {...field}
                {...otherProps}
            />
            <CFormText className="help-block">Please enter your {label}</CFormText>
        </CFormGroup>
  );
};

export default InputField;