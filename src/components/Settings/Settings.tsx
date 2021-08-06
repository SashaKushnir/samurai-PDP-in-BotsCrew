import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import LogoutNavLink from '../common/Navigation/LogoutNavLink';
import {toLogOut} from '../Redux/authorisation/authInfoReducer'
import SettingsClass from './Settings.module.css';
import { RootState } from "../Redux/reduxStore";


const Settings: React.FC<SettinsConnectedType> = (props) => {
    return (
        <div>
            <LogoutNavLink  {...props} />
        </div>
    )

}
const mstp = (state: RootState)=> {

    return { isAuth : state.authInfo.isAuthorised}
}
const connector = connect(mstp, {toLogOut})
type SettinsConnectedType = ConnectedProps<typeof connector>
export default compose(
    connector
)(Settings)