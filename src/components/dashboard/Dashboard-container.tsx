import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../strore/redux-store";
import {IApp} from "../../strore/dashboard/types";
import {addApp} from "../../strore/dashboard/dashboard-reducer";
// @ts-ignore
import classes from "./Dashboard-container.module.scss"
import {ModalProps, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppEditor from "../app-editor/AppEditor";

interface IMapStateToProps {
    apps: Array<IApp>
}

interface IMapDispatchToProps {
    addApp: (
        name: string,
        image: HTMLImageElement | File | String,
        description: string,
        location: string) => void

}
interface IState {
    editorOpened: boolean;
}
type PropsType = IMapStateToProps & IMapDispatchToProps;

class DashboardContainer extends React.Component<PropsType , IState> {
    constructor(props:PropsType) {
        super(props);
        this.state = {
            editorOpened: false,
        };
    }
    openEditor=()=>{this.setState({editorOpened:true})};
    closeEditor=()=>{this.setState({editorOpened:false})};


    componentDidMount(): void {
        this.props.addApp("da", "pd", "ss", "dd");
        console.log(this.props.apps)
    }

    render() {
        return <div className={classes.apps}>
            <div className={classes.dashboardTools}>
                <div>
                    <h2>My Dashboard</h2>
                </div>
                <div>
                    <h2>
                        <Button variant="outlined" color="primary" onClick={this.openEditor}>
                            <b>+</b> Create App
                        </Button>
                    </h2>
                </div>
            </div>

            <Paper elevation={2}>
            </Paper>

            <AppEditor isOpened={this.state.editorOpened} onClose={this.closeEditor}/>
        </div>
    }


}

let mapStateToProps = (state: AppStateType): IMapStateToProps => {
    return {apps: state.dashboardPage.apps}
};


export default connect(mapStateToProps, {addApp})(DashboardContainer)