import React, { useEffect, useState } from 'react'
// import { db } from "../../firebase/firebase";

/*const [posts, setPosts] = useState([]);
useEffect(() => {
    db.collection("music")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => (doc.data()))
        );
      });
  }, [])*/

const Music = () => {

 return (

        <div>
            Music
            {/*{posts.map(m => <div>{m.Song}: {m.Author}</div>)}*/}
        </div>
    )

}

export default Music