import * as yup from 'yup';

import type { SignUp } from 'types';

export const emailSchema: yup.SchemaOf<SignUp> = yup.object().shape({
  email: yup
    .string()
    .trim()
    .lowercase()
    .required('Required')
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Must be a valid email address.'),
});
