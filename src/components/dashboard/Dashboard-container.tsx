import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {IApp} from "../../strore/dashboard/types";
import {closeEditor, openEditor, setAppsThunk, setEditApp} from "../../strore/dashboard/dashboard-reducer";
// @ts-ignore
import classes from "./DashboardContainer.module.scss"
import {ModalProps, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppCreator from "../app-editor/AppCreator";
import Apps from "./apps/Apps";
import {Redirect} from "react-router";

interface IMapStateToProps {
    apps: Array<IApp>
    isEditorOpen: boolean
    userName: string | null
    isUserAuth: boolean
}

interface IMapDispatchToProps {
    closeEditor: () => void
    openEditor: () => void
    setEditApp: (app: IApp) => void
    setAppsThunk: (url: string | null) => void
}

interface StateType {
    apps: Array<IApp>
}

type PropsType = IMapStateToProps & IMapDispatchToProps;

class DashboardContainer extends React.Component<PropsType, StateType> {
    state = {
        apps: this.props.apps

    };


    componentDidUpdate(prevProps: PropsType, prevState: StateType) {


        if ((this.props.apps.length !== this.state.apps.length))
        {
            console.log('update');
            this.props.setAppsThunk(this.props.userName);
            this.setState({
                apps: this.props.apps
            });
        }

    }

    componentDidMount(): void {
        console.log("component did mount");
        if (this.props.isUserAuth) {
            this.props.setAppsThunk(this.props.userName);
        }
    }


    render() {
        if (!this.props.isUserAuth) {
            return <Redirect to={'/login'}/>
        }
        return (<div>
                <div className={classes.dashboardWrapper}>
                    <div className={classes.dashboardTools}>
                        <div>
                            <h2>My Dashboard</h2>
                        </div>
                        <div>
                            <h2>
                                <Button variant="outlined" color="primary" onClick={this.props.openEditor}>
                                    <b>+</b> Create App
                                </Button>
                            </h2>
                        </div>

                    </div>
                    <AppCreator isOpened={this.props.isEditorOpen} onClose={this.props.closeEditor}/>
                    <div className={classes.appsWrapper}>
                        <Apps apps={this.state.apps}
                              isOpened={this.props.openEditor}
                              isClosed={this.props.closeEditor}
                              setApp={this.props.setEditApp}

                        />
                    </div>
                </div>

            </div>
        )
    }


}

let mapStateToProps = (state: AppStateType): IMapStateToProps => {
    return {
        apps: state.dashboardPage.apps,
        isEditorOpen: state.dashboardPage.isEditorOpened,
        userName: state.auth.login,
        isUserAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {openEditor, closeEditor, setEditApp, setAppsThunk})(DashboardContainer)