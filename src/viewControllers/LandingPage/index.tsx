import type { SignUp } from 'types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from 'schemas';

import View from './view';

const Controller = () => {
  const signUpForm = useForm<SignUp>({
    criteriaMode: 'all',
    resolver: yupResolver(emailSchema, { abortEarly: false }),
    mode: 'onTouched',
  });

  const submit = signUpForm.handleSubmit(({ email }) => {
    alert(`${email} signed up successfully!`);
  });

  return <View signUpForm={signUpForm} submit={submit} />;
};
export default Controller;
