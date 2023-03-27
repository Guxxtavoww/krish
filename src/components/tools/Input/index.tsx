import { forwardRef, InputHTMLAttributes } from 'react';

import { useUniqueId } from '@/hooks';

import { InputContainer } from './styles';

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, Omit<iInputProps, 'id' | 'ref'>>(
  (props, ref) => {
    const { label, name, placeholder, ...rest } = props;

    const uniqueId = useUniqueId(name);

    return (
      <InputContainer hasLabel={!!label}>
        {label ? <label htmlFor={uniqueId}>{label}</label> : null}
        <input
          ref={ref}
          name={name}
          id={uniqueId}
          placeholder={placeholder}
          {...rest}
        />
      </InputContainer>
    );
  }
);

export default Input;
