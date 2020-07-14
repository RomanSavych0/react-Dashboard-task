import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {IApp} from "../../strore/dashboard/types";
import {addApp, closeEditor, openEditor} from "../../strore/dashboard/dashboard-reducer";
// @ts-ignore
import classes from "./DashboardContainer.module.scss"
import {ModalProps, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppCreator from "../app-editor/AppCreator";
import Apps from "./apps/Apps";

interface IMapStateToProps {
    apps: Array<IApp>
    isEditorOpen:boolean

}

interface IMapDispatchToProps {
closeEditor:()=>void
openEditor:()=>void
}



type PropsType = IMapStateToProps & IMapDispatchToProps;

class DashboardContainer extends React.Component<PropsType> {
    render() {
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
                    <Paper elevation={2} className={classes.appsWrapper}>
                        <Apps apps={this.props.apps}
                              isOpened={this.props.openEditor}
                              isClosed={this.props.closeEditor}
                        />
                    </Paper>
                </div>

            </div>
        )
    }


}

let mapStateToProps = (state: AppStateType): IMapStateToProps => {
    return {apps: state.dashboardPage.apps ,
        isEditorOpen :state.dashboardPage.isEditorOpened}
};


export default connect(mapStateToProps,{openEditor, closeEditor})(DashboardContainer)