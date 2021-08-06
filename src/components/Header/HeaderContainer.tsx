
import React from 'react'
import { connect, ConnectedProps  } from 'react-redux'
import Header from './Header'
// @ts-ignore
import  Fetching from '../../images/VAyR.gif'
import { getIsAuthFetchingSel , getAuthDataSel , getIsAuthSel } from '../Redux/selectors/selectors'
import { toLogOut } from '../Redux/authorisation/authInfoReducer'
import { RootState } from '../Redux/reduxStore'
import {compose} from "redux";

class HeaderContainer extends React.Component<HeaderPropsFromRedux>  {
    render() {
        return (
            <div>
                { this.props.isFetching ?
                    <div>
                        <img  src={Fetching} alt="YourPhoto" />
                    </div>
                    : null}
                <Header {...this.props} />
            </div>
        )
    }
}

const mstp = (state: RootState) => {
    return {
        data: getAuthDataSel(state),
        isFetching: getIsAuthFetchingSel(state),
        isAuthorised: getIsAuthSel(state)
    }
}

const connector = connect(mstp, {toLogOut})
export type HeaderPropsFromRedux = ConnectedProps<typeof connector>
export default compose(
    connector
)(HeaderContainer)


