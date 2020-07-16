import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import styles from "./Login.module.scss";
import {login, register} from "../../strore/auth/auth-reducer";
import {AppStateType} from "../../strore/redux-store";
import LoginForm from "./LoginForm";

interface IProps {
    login: (email: string, password: string) => void;
    isAuthorized: boolean;
    register: (email: string, password: string) => void;

}

const Login: React.FC<IProps> = (props) => {
    if (props.isAuthorized) {
        return <Redirect to={"/dashboard"}/>;
    }
    return (
        <div>
            <div className={styles.LoginForm}>
                <LoginForm login={props.login} register={props.register}/>
            </div>
        </div>
    );
};
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuthorized: state.auth.isAuth,
    };
};
export default connect(mapStateToProps, {login, register})(Login);