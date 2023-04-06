import i18n from 'i18next';
import * as yup from 'yup';

const schemaLogin = yup
  .object({
    userName: yup.string().required(() => ('auth.required')),
    paSsword: yup.string().required(() => ('auth.required')),
  })
  .required();

export default schemaLogin;