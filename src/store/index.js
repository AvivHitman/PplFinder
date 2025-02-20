import { createStore } from "redux";
import { getPersistentUsersData, setPersistentUsersData } from "../utils";

const usersFromLocalStorage = getPersistentUsersData();

const favoriteUsersReducer = (state = usersFromLocalStorage, action) => {
  switch (action.type) {
    case 'REMOVE_FAV_USERS':
      const newState = state.filter(user => user !== action.payload);
      setPersistentUsersData(newState);
      return newState;

    case 'SAVE_FAV_USERS':
      if (!state.includes(action.payload)) {
        const newState = state.concat(action.payload)
        setPersistentUsersData(newState);
        return newState;
      }
      else {
        return state;
      }

    default:
      return state;
  }
}
const store = createStore(favoriteUsersReducer);

export default store;
