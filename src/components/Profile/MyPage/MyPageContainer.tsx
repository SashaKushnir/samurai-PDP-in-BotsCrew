import {connect, ConnectedProps} from "react-redux";
import {
    friendsIn, setProfileStatus, updateProfileStatus,
    savePhoto, updateProfileData
} from '../../Redux/profile/profileInfoReducer'
import React from 'react'
import {RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { getDefAuthorisedUserIdSel, getIsAuthSel, getProfileByUserIdSel, getStatusSel } from "../../Redux/selectors/selectors";
import MyPage from "./MyPage";
import {RootState} from "../../Redux/reduxStore";
import { profileActions } from "../../Redux/profile/profileActions";
export type MyPageProps = ProfilePropsFromRedux & WithRoutePropsType
class MyPageContainer extends React.PureComponent<MyPageProps> {
    state = {
        userId: null
    }
    componentUpMounted = () => {
        let temp: any
        if (this.state.userId !== this.props.match.params.userId)
            temp = this.props.match.params.userId
        if (!temp)
            { // @ts-ignore
                if (temp !== this.props.defAuthorisedUserId)
                                temp = this.props.defAuthorisedUserId
            }
        if (!temp)
            this.props.history.push('/login')


        this.props.friendsIn(temp)
        this.props.setProfileStatus(temp)
        if (this.state.userId !== temp)
            this.setState({
                userId: temp
            })
    }

    componentDidMount = () => {
        this.componentUpMounted()

    }
    componentDidUpdate = (prevProps : MyPageProps, prevState : MyPageProps) => {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.componentUpMounted()
    }
    render() {
        let cantChangeStatus = (this.state.userId && this.state.userId !== this.props.defAuthorisedUserId) ? true : false
        //window.page.push(this.props)

        return (
            <div>
                <MyPage  {...this.props} cantChangeStatus={cantChangeStatus} />
            </div>
        )
    }
}
const mstp = (state : RootState) => {
    return {
        profileByUserId: getProfileByUserIdSel(state),
        isAuth: getIsAuthSel(state),
        status: getStatusSel(state),
        defAuthorisedUserId: getDefAuthorisedUserIdSel(state)
    }
}
const connector = connect(mstp, {
    friendsIn ,
    updateProfileStatus,
    setProfileStatus,
    savePhoto,
    updateProfileData
})
type PathParamsType = {
    userId: string
}

// Your component own properties
type WithRoutePropsType = RouteComponentProps<PathParamsType>
type ProfilePropsFromRedux = ConnectedProps<typeof connector>
export default compose(
    withRouter,
    connector
)(MyPageContainer)
