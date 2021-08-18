import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  return state;

  throw new Error(`no matching action type - ${action.type}`);
};

export default reducer;
