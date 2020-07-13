import React from 'react'
import {compose} from 'redux';
import {connect} from "react-redux";
import {AppStateType} from "../strore/redux-store";
import {IApp} from "../strore/dashboard/types";
import {addApp} from "../strore/dashboard/dashboard-reducer";
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

type PropsType = IMapStateToProps & IMapDispatchToProps;

class DashboardContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.addApp("da" ,"pd" , "ss" , "dd");
    console.log(this.props.apps)
    }

    render() {
        return <div>

        </div>
    }


}

let mapStateToProps = (state: AppStateType): IMapStateToProps => {
    return {apps: state.dashboardPage.apps}
};


export default connect(mapStateToProps, {addApp})(DashboardContainer)