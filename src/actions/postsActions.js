import { FETCH_POSTS, NEW_POST } from "./types";
// export const fetchPosts = () => (dispatch) => {
//   dispatch({
//     type: FETCH_POSTS,
//     payload,
//   });
// };
export const newPost = (postData) => ({
    type: NEW_POST,
    payload: postData,
  });
