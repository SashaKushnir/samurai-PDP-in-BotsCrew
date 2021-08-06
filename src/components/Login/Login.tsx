/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { Myinput } from '../common/Forms/Mytextarea'
import { requiredField, minLengthCreator, maxLengthCreator} from '../FormControl/Validators/Validators'
import { toLogIn } from '../Redux/authorisation/authInfoReducer'
import loginFormBll from '../common/Forms/Mytextare.module.css'
import { getIsAuthSel } from '../Redux/selectors/selectors'
import {RootState} from "../Redux/reduxStore";


let minLength = minLengthCreator(6)
let maxLength = maxLengthCreator(15)

const Login: React.FC<connectorType> = (props) => {
    const login = (val: FormDataType) => {           //dsddddddddddddddddddd
        console.log("LoginValue",val) 
        props.toLogIn(val)
    }

    return (
        <div>
            {props.isAuthorised && <Redirect to = '/profile'/>}
            <h1>
                Login
            </h1>
            <div>
                <LoginFormContainer onSubmit={login} captchaUrl = {props.captchaUrl} />
            </div>
        </div>
    )

}
type connectorType = ConnectedProps<typeof connector>
type mstpLoginReturnType = {isAuthorised : boolean
    captchaUrl: string | null}
const mstp = (state:RootState):mstpLoginReturnType=> ({isAuthorised : getIsAuthSel(state), captchaUrl : state.authInfo.captchaUrl})
const connector =  connect( mstp ,{toLogIn})

export default compose(
    connector
)(Login)


export type FormDataType = {
    email : string
    password : string
    rememberMe : boolean
    captcha : string | null
}
type LoginFormOwnProps = {
    captchaUrl : string | null
}


let LoginFormComponent: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({captchaUrl,...props}) => {
    return (<form onSubmit={props.handleSubmit} >
        <div>
            <Field name='email' component={Myinput} placeholder={'login'} validate={requiredField} />
        </div>
        <div>
            <Field name='password' component={Myinput} validate={[requiredField, minLength, maxLength]} placeholder={'password'} />
        </div>
        <div>
            <Field id='rememberMe' name='rememberMe' type={'checkbox'} component={'input'} />
            <label htmlFor='rememberMe'>remember me</label>
        </div>
        {props.error && <div className = {loginFormBll.errorM}>
            {props.error}
        </div>
        }
        <div>
        {captchaUrl && <img src = {captchaUrl} alt ="Captcha image"/>}
        </div>
        {captchaUrl && <Field name = "captcha" placeholder = "write info from image" 
        component = "input"   />}
        <button>Login</button>
    </form>
    )

}
const LoginFormContainer = reduxForm<FormDataType, LoginFormOwnProps>({ form: 'login' })(LoginFormComponent)


