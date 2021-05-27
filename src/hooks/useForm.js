import {useState} from 'react';

export const useForm = initialForm => {
  const [state, setState] = useState(initialForm);

  const onChange = (value, field) => {
    setState({...state, [field]: value});
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
