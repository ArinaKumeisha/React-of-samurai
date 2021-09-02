import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Login = () => {
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'Login'} component={'input'} type="text"/></div>
            <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
            <div><Field type={'checkbox'} name={'password'} component={'input'}/>remember me</div>
            <button>Login</button>
        </form>
    );
};
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default Login;