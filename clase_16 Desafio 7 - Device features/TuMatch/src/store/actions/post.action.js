import { URL_API } from "../../constants/Database";

export const GET_POST = "GET_POST";

export const getPost = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/posts.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const posts = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(posts);
      dispatch({ type: GET_POST, payload: posts });
    } catch (error) {
      console.log(error);
    }
  };
};
