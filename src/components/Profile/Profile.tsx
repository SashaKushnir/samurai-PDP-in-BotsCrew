
import React from 'react'
import Posts from './Posts/PostsContainer'
import MyPage from './MyPage/MyPageContainer'

const Profile : React.FC = () => {
  

    return (
    <div className = "AllText">
         {/*@ts-ignore*/}
      <MyPage />
        {/*@ts-ignore*/}
      <Posts />
    </div>
  )
}

export default Profile