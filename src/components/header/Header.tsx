import React, {FC} from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {classes} from "istanbul-lib-coverage";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface IProps {

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

const Header: React.FC<IProps> = () => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Button color="inherit">Dashboard</Button>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>)
};

const mapStateToProps = (state: AppStateType) => {
    return {}

};
const mapDispatchToProps = (state: AppStateType) => {
    return {}

};


export default connect(mapStateToProps, mapDispatchToProps)(Header);