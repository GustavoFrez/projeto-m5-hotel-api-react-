import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .min(2, 'O nome esta incompleto')
    .required('Este campo é obrigatório'),
  email: Yup.string()
    .email('O e-mail esta incorreto')
    .required('Este campo é obrigatório'),
  mensagem: Yup.string()
    .min(5, 'A mensagem esta incompleta')
    .required('Este campo é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha esta incorreta')
    .required('Este campo é obrigatório'),
});
