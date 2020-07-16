import React, {useEffect} from 'react'
import {Field , InjectedFormProps, reduxForm} from "redux-form";
import {renderField} from "../../forms/formsControll";
import {aol, email, maxLength15} from "../../forms/validators";
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

// @ts-ignore
import styles from './Login.module.scss'
import {Button} from "@material-ui/core";
import * as firebase from "firebase";
import {firebaseApp} from "../../firebase/firebase";
import {login} from "../../strore/auth/auth-reducer";
import {AuthThunkType} from "../../strore/auth/types";
import {AppStateType} from "../../strore/redux-store";

let LoginForm:React.FC<InjectedFormProps<IFormData>> = (props) => {


    return (
        <form>
            <Field name="email" type="email"
                   component={renderField} label="Email"
                   validate={email}
                   warn={aol}
            />
            <Field name="password" type="password"
                   component={renderField} label="password"
                   validate={maxLength15}
                   warn={aol}
            />
            <Field name="isRegister" type="hidden"
                   component={renderField}
                   validate={maxLength15}
                   warn={aol}
            />
            <div className={styles.LoginButtons}>
            <Button variant="contained" color="primary" onClick={props.handleSubmit}>
                Sign In
            </Button>


            </div>
        </form>
    )

};
const LoginReduxForm = reduxForm<IFormData>({form: 'login'})(LoginForm);

interface IFormData {
    email:string
    password:string
}
interface IMapDispatchToProps {
    login:(email:string , password:string , rememberMe:boolean)=>void
}
interface IMapStateToProps {
    isAuth:boolean
}

interface IProps {
    login:(email:string , password:string)=>void;
    isAuthorized:boolean
}
const Login:React.FC<IProps> = (props) => {
   const onSubmit =(formData:IFormData)=>{

       props.login(formData.email , formData.password)

   };
   const onRegister = (formData:IFormData)=>{
     console.log(formData.email, formData.password)

   };
    if(props.isAuthorized) {
        return<Redirect to={"/dashboard"}/>
    }

    return (
        <div>
            <div className={styles.LoginForm}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
};
let mapStateToProps=(state:AppStateType)=>{
    return{
        isAuthorized:state.auth.isAuth

    }

};
export default connect(mapStateToProps, {login})(Login);

