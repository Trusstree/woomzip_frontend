import { useState, useEffect, ChangeEvent } from 'react';

export default function useEditor(callback: Function, validate: Function) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasErrors =
      Object.values(errors).filter((e) => {
        return e;
      }).length > 0;
    if (!hasErrors && isSubmitting) {
      callback(values);
    }
  }, [errors, isSubmitting]);

  const validObject = (obj: {}) => {
    return Object.fromEntries(
      Object.entries(obj).filter((e) => {
        return e[1];
      }),
    );
  };

  const handleSubmit = (event: ChangeEvent<any>) => {
    if (event) event.preventDefault();

    const { name, value } = event.target;

    setValues((oldValues) => {
      const newValues = validObject({ ...oldValues, [name]: value });

      return newValues;
    });

    setIsSubmitting(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.persist();

    const { name, value } = event.target;

    setValues((oldValues) => {
      const newValues = { ...oldValues, [name]: value };
      setErrors((errors) => ({ ...errors, [name]: validate(newValues)[name] }));
      setIsSubmitting(false);
      return validObject(newValues);
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    event.persist();

    const { name, value } = event.currentTarget;

    setValues((oldValues) => {
      const newValues = { ...oldValues, [name]: value };
      setErrors((errors) => ({ ...errors, [name]: validate(newValues)[name] }));
      setIsSubmitting(false);
      return validObject(newValues);
    });
  };

  return { handleChange, handleClick, handleSubmit, values, errors };
}
