import i18n from 'i18next';
import * as yup from 'yup';

const schemaRegister = yup
  .object({
    email: yup.string().required(() =>('This field is required')),
    user_name: yup.string().required(() => ('This field is required')),
    password: yup.string().required(() => ('This field is required')),
    confirm_password: yup.string().required(() => ('This field is required'))
    .oneOf([yup.ref('password')],() => ('Password does not match') ),
  })
  .required();

export default schemaRegister;