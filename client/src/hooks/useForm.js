import { useState } from 'react';

const useForm = (callback, defaultValues = {}) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    let target = e.target;
    let property = target.name;
    let value = target.value;

    validate(property, value)

    setValues({
      ...values, [property]: value,
    })
  }

  const validate = (property, value) => {
    const errorSetter = (property, message) => {
      setErrors({
        ...errors, [property]: message
      })
    }

    const errorRemover = (property) => {
      let newErrors = delete errors[property];
      setErrors(newErrors);
    }

    // Specific rules for some properties.
    let regex;
    switch(property) {
      case 'name':
        regex = /^\w{2,3}$/;
        regex.test(value) ? errorRemover(property) : errorSetter(property, 'Must be 2 or 3 characters.');
        break;
   
      default:
        break;
    }
  }

  const handleSubmit = (e, ...args) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length > 0) {
      callback(e, ...args);
    }
  }

  return{
    values,
    errors,
    handleChange,
    handleSubmit
  };  
}

export default useForm