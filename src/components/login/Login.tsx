import React, { useEffect } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// @ts-ignore
import styles from "./Login.module.scss";
import { Button } from "@material-ui/core";
import * as firebase from "firebase";
import { firebaseApp } from "../../firebase/firebase";
import {login, register} from "../../strore/auth/auth-reducer";
import { AuthThunkType } from "../../strore/auth/types";
import { AppStateType } from "../../strore/redux-store";
import LoginForm from "./LoginForm";

interface IFormData {
    email: string;
    password: string;
}
interface IMapDispatchToProps {
    login: (email: string, password: string, rememberMe: boolean) => void;
    register: (email: string, password: string, rememberMe: boolean) => void;
}
interface IMapStateToProps {
    isAuth: boolean;
}

interface IProps {
    login: (email: string, password: string) => void;
    isAuthorized: boolean;
    register: (email: string, password: string) => void;

}
const Login: React.FC<IProps> = (props) => {
    if (props.isAuthorized) {
        return <Redirect to={"/dashboard"} />;
    }

    return (
        <div>
            <div className={styles.LoginForm}>
                <LoginForm login={props.login} register={props.register} />
            </div>
        </div>
    );
};
let mapStateToProps = (state: AppStateType) => {
    return {
        isAuthorized: state.auth.isAuth,
    };
};
export default connect(mapStateToProps, {login , register} )(Login);