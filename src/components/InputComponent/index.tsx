import { forwardRef, InputHTMLAttributes } from "react";
import { FieldSetStyle } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  label: string;
}

const Input = (
  { label, type, placeholder, ...rest }: IInputProps,
  ref: any
) => {
  return (
    <FieldSetStyle>
      <label>{label}</label>
      <input type={type} ref={ref} placeholder={placeholder} {...rest} />
    </FieldSetStyle>
  );
};

export const InputComponent = forwardRef(Input);
