import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../../assets/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Login = () => {
    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength12 = maxLengthCreator(12)
export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Login</h3>
            <Field
                component={Input}
                name={'Login'}
                type="text"
                validate={[required, maxLength12,]}/>
            <h3>Password</h3>
            <Field
                component={Input}
                name={'password'}
                placeholder={'Password'}
                validate={[required, maxLength12,]}/>
            <p>remember me</p>
            <Field
                component={'input'}
                name={'remember me'}
                type={'checkbox'}
                />

            <button>Login</button>
        </form>
    );
}
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login;