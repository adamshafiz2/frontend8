const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        isPending: false,
      };
    case "REGISTER_USER":
      return {
        ...state,
        isPending: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
