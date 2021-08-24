import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('email obrigatorio'),
    address: yup.string().required('Endereço obrigatorio'),
    district: yup.string().required('Bairro obrigatorio'),
    telephone: yup.string().required('Telefone obrigatorio'),
    password: yup.string().required('Senha obrigatoria')
});

export const SigninSchema = yup.object().shape({
    email: yup.string().required('Email obrigatorio'),
    password: yup.string().required('Senha obrigatoria')
})