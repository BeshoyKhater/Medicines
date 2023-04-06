import i18n from 'i18next';
import * as yup from 'yup';

const schemaRegister = yup
  .object({
    email: yup.string().required(() =>('auth.required')),
    user_name: yup.string().required(() => ('auth.required')),
    password: yup.string().required(() => ('auth.required')),
    confirm_password: yup.string().required(() => ('auth.required'))
    .oneOf([yup.ref('password')],() => ('auth.passwordMatch') ),
  })
  .required();

export default schemaRegister;