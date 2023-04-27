import i18n from 'i18next';
import * as yup from 'yup';

const schemaLogin = yup
  .object({
    userName: yup.string().required(() => ('This field is required')),
    paSsword: yup.string().required(() => ('This field is required')),
  })
  .required();

export default schemaLogin;