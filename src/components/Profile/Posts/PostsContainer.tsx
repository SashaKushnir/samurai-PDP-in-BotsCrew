import {connect, ConnectedProps} from "react-redux";
import {  } from '../../Redux/profile/profileInfoReducer'
import React from 'react'
import {withRouter} from "react-router-dom";
import { compose } from "redux";
import { getPostsObjectsSel } from "../../Redux/selectors/selectors";
import Posts from "./Posts";
import {RootState} from "../../Redux/reduxStore";
import { profileActions } from "../../Redux/profile/profileActions";
//window.posts = []
class PostsContainer extends React.PureComponent<PostsPropsFromReduxType> {
    render (){
        //window.posts.push(this.props)
        return (
            <Posts {...this.props}/>
        )

    }
}
const mstp = (state: RootState) => {
    return {
        postsObjects : getPostsObjectsSel(state),
    }
}
const connector = connect(mstp, {
    addPost: profileActions.addPost})
export type PostsPropsFromReduxType = ConnectedProps<typeof connector>
export default compose  (
    withRouter,
    connector
)(PostsContainer)