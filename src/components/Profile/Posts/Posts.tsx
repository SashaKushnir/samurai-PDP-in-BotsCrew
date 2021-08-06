import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Post from './Post/Post'
import s from './Posts.module.css'
import { maxLengthCreator, requiredField } from '../../FormControl/Validators/Validators'
import { Mytextarea } from '../../common/Forms/Mytextarea'
import { PostsPropsFromReduxType } from "./PostsContainer";
import { PostsObjectsType } from "../../Redux/profile/profileInfoReducer";

const maxLength15 = maxLengthCreator(15)
const Posts: React.FC<PostsPropsFromReduxType> = (props) => {
    let mapPosts = [...props.postsObjects].map((obj: PostsObjectsType) => <Post postObj={obj} key={obj.id}/>)
    let addPost = (val: { postform: string }) => {
        props.addPost(val.postform)
    }
    return (
        <div>
            <h3><label htmlFor="post"> Posts</label></h3>

            <div className={s.button}>
                <div>
                </div>
                <PostContainerForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {mapPosts}
            </div>
        </div>
    )
}

export default Posts

type postFormType = { postform: string }

const PostTextAreaForm: React.FC<InjectedFormProps<postFormType>> = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field id="post" name="postform" cols="30" rows="4"
                   placeholder="Add your post" component={Mytextarea}
                   validate={[requiredField, maxLength15]}
            />
            <div>
                <button>Leave Post</button>
            </div>
        </form>
    )
}
const PostContainerForm = reduxForm<{ postform: string }>({form: 'posttextarea'})(PostTextAreaForm)