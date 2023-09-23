import { FC, FormEvent, ClipboardEvent, FocusEvent, useEffect, useRef } from 'react';
import useStyles from './styles';
import { isNotEmpty } from '@helpers';

export interface IInputProps {
  value: string | undefined;
  onChange(value: string, event: FormEvent<HTMLInputElement>): void;
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
  onPaste?(event: ClipboardEvent<HTMLInputElement>): void;
}

// TODO: Инпут должен иметь width: 100% и break-word: break-all
// TODO: сделать адаптив

export const Input: FC<IInputProps> = ({ value = '', onChange, onFocus, onBlur }) => {
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value, event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  useEffect(() => {
    if (isNotEmpty(inputRef.current)) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        className={classes.input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  );
};
