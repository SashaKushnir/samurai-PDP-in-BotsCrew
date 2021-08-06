import profileInfoReducer, { addPost } from '../profile/profileInfoReducer'

let posts = {
    postsObjects : [
    { id: 1, message: "Hello!!!", likesAm: 25 },
    { id: 2, message: "Hello!!!", likesAm: 25 },
    { id: 3, message: "Hello!!!", likesAm: 25 }
  ],
}
it("post length is correct", () => {
    let action = addPost("Mypost")
    let res = profileInfoReducer(posts,action)
    expect(res.postsObjects.length).toBe(4)
})
