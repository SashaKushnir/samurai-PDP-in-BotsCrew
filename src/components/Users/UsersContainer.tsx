import {
    getUsersTK, unfollowCircle, followCircle, getUserByCursorTK, getLocalUsersByDimaTK,
    setNonLocalUsersByDimaTK
} from '../Redux/users/usersReducer'
import Users from './Users'
import { connect, ConnectedProps } from 'react-redux'

import React from 'react'
import loader from '../../images/VAyR.gif'
import { compose } from 'redux'
import {
    getUserListSel, getCurrentUserPageSel, getTotalUserPagesSel, getPageNumbersSel,
    getTotalUserItemsSel, getIsUserFetchingSel, getButtonIsEnableSel
} from '../Redux/selectors/selectors'
import { RootState } from '../Redux/reduxStore'


class UserAPIContainer extends React.Component<UCProps> {

    componentDidMount = () => {
        this.props.getUsersTK(this.props.currentUserPage, this.props.pageNumber)

    }

    changeCurrentPage_ = (index: number) => {
        this.props.getUserByCursorTK(index, this.props.pageNumber)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <img src={loader} alt="img"/> : null}
                <Users  {...this.props} changeCurrentPage_={this.changeCurrentPage_}
                />
            </>
        )
    }

}

const mapStateToProps = (state: RootState) => {

    return {
        UserList: getUserListSel(state),
        currentUserPage: getCurrentUserPageSel(state),
        totalUserPages: getTotalUserPagesSel(state),
        pageNumber: getPageNumbersSel(state),
        totalUserItems: getTotalUserItemsSel(state),
        isFetching: getIsUserFetchingSel(state),
        buttonIsEnable: getButtonIsEnableSel(state),
        currentArrayElement: state.usersInfo.currentArrayElement
    }

}
const connector = connect(mapStateToProps,
    {
        getUsersTK, unfollowCircle, followCircle, getUserByCursorTK, getLocalUsersByDimaTK,
        setNonLocalUsersByDimaTK
    })
export type UCProps = ConnectedProps<typeof connector>
export default compose(
    connector
)(UserAPIContainer)





