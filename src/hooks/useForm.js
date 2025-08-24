import { useState } from 'react';

function useForm(initialValues = {}, initialErrors = {}) {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form state
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return {
    form,
    errors,
    setForm,
    setErrors,
    handleChange,
  };
}

export default useForm;
