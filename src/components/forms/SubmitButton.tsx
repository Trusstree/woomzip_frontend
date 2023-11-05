import { EventHandler } from 'react';

interface SubmitButtonProps {
  title: string;
  handleSubmit: EventHandler<any>;
  values: any;
  errors: any;
  keys: string[];
  allRequired: boolean;
  className?:string
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { title, handleSubmit, values, errors, keys, allRequired, className } = props;

  const disabled = !(
    keys.every((e) => {
      return errors[e] == undefined;
    }) &&
    keys.some((e) => {
      return values[e] != undefined;
    }) &&
    (!allRequired ||
      keys.every((e) => {
        return values[e] != undefined;
      }))
  );

  return (
    <button type="submit" className={`${className} w-100 btn btn-lg fw-bold ${disabled?"btn-secondary":"btn-light"}`} onClick={handleSubmit} disabled={disabled}>
      {title}
    </button>
  );
}