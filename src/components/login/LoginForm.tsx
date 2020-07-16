import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {renderField} from "../../forms/formsControll";
import {aol, email, minValue6} from "../../forms/validators";
// @ts-ignore
import styles from "./Login.module.scss";
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";


interface IFormData {
    email: string;
    password: string;
}

interface IProps {
    login: (email: string, password: string) => void;
    register: (email: string, password: string) => void;
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


let LoginForm: React.FC<InjectedFormProps<IFormData, IProps> & IProps> = (
    props
) => {
    const onSubmit = (formData: IFormData) => {
        props.login(formData.email, formData.password);
    };
    const onRegister = (formData: IFormData) => {
        props.register(formData.email, formData.password);
    };
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={email}
                        warn={aol}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="password"
                        validate={minValue6}
                        warn={aol}
                    />

                    <div className={styles.LoginButtons}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={props.handleSubmit(onSubmit)}
                        >
                            Sign in
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={props.handleSubmit(onRegister)}
                        >
                            Sign up
                        </Button>

                    </div>


                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
    );
};

export default reduxForm<IFormData, IProps>({form: "login"})(LoginForm);