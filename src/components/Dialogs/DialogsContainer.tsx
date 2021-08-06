import React from 'react'
import Dialogs from './Dialogs'
import {connect, ConnectedProps} from 'react-redux'
import { withRedirect } from '../../hoc/hoc'
import { compose } from 'redux'
import { getIsAuthSel, getD_MessagesInfoSel, getD_FriendsInfoSel } from '../Redux/selectors/selectors'
import {RootState} from "../Redux/reduxStore";
import { dialogsActions } from "../Redux/dialogs/dialogsActions";


class DialogsContainer extends React.Component<ConnectPropsDialogsType> {
    render() {
        return (
            <div>
                <Dialogs {...this.props}  />
            </div>
        )
    }
}

const mstp = (state:RootState) => {
    return {
        isAuth: getIsAuthSel(state),
        d_MessagesInfo: getD_MessagesInfoSel(state),
        d_FriendsInfo: getD_FriendsInfoSel(state),
       
    }
}
const connector = connect(mstp, { sendingM: dialogsActions.sendingM })
export type ConnectPropsDialogsType = ConnectedProps<typeof connector>
export default compose  (
    connector,
    withRedirect
)(DialogsContainer) as React.ComponentType<any>