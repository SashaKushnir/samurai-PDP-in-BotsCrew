

import React from 'react'
import PostClass from "./Post.module.css"
import {PostsPropsFromReduxType} from "../PostsContainer";
import {PostsObjectsType} from "../../../Redux/profile/profileInfoReducer";
const Post: React.FC<{postObj: PostsObjectsType }> = (props) => {
  return (
    <div className={`${PostClass.content} ${PostClass.posts}`} >
     
      <div>
       <img src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg" alt=""/>
    </div>  
        <div>         
            {props.postObj.message}
        </div>
        <div>
          <input type ="submit" value = "like" /> {props.postObj.likesAm}
        </div>
    </div>
  )
}

export default Post