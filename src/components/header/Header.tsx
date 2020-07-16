import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {NavLink} from "react-router-dom";
import {signOut} from "../../strore/auth/auth-reducer";

interface IProps {
    email: string | null,
    isAuthorized: boolean
    signOut: () => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header: React.FC<IProps> = (props) => {
    let [isAuth, setIsAuth] = React.useState<boolean>(props.isAuthorized);

    useEffect(() => {
        setIsAuth(props.isAuthorized)
    }, [props.isAuthorized]);

    const classes = useStyles();
    return (<div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to="/dashboard" style={{color: "white", textDecoration: "none"}}>
                        <Button color="inherit">
                            Dashboard
                        </Button>
                    </NavLink>
                </Typography>
                <NavLink to="/login" style={{color: "white", textDecoration: "none"}}>
                    <div>
                        {isAuth ?
                            (
                                <div>
                                    {props.email}
                                    <Button color="inherit" onClick={
                                        props.signOut}>
                                        Sign out
                                    </Button>
                                </div>
                            )
                            :('Login')
                        }
                    </div>
                </NavLink>
            </Toolbar>
        </AppBar>
    </div>)
};

const mapStateToProps = (state: AppStateType) => {
    return {
        email: state.auth.login,
        isAuthorized: state.auth.isAuth,
    }

};


export default connect(mapStateToProps, {signOut})(Header);