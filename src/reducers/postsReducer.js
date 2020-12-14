import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  console.log(action.type,"aaaa")

  switch (action.type) {

    case NEW_POST:
      console.log('hellooooo', action, state)
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}
