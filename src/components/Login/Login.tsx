import React from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {ThunkAction} from 'redux-thunk';
import {Input} from "../../assets/FormsControls";
import {AuthActionType, login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux_store';
import {maxLengthCreator, required} from "../../utils/validators/validators";

type FormDataType = {
    password: string
    rememberMe: boolean
    email: string
}

const Login = (props: LoginPropsType) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const loginString = useSelector<AppStateType, string| null>(state => state.auth.login)
    const onSubmit = (data: FormDataType,) => {
        props.login(data.password, data.email, data.rememberMe);
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>;
    }
        return (
            <div>
                <h1>{'Login'}</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
};
const maxLength12 = maxLengthCreator(30)
export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Login</h3>
            <Field
                component={Input}
                name={'password'}
                type={'text'}
                validate={[required, maxLength12,]}/>
            <h3>Password</h3>
            <Field
                component={Input}
                name={'email'}
                type="password"
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

const connector = connect(null, {login})
type LoginPropsType = ConnectedProps<typeof connector>;
export default connector(Login)
