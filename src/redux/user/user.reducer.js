const INITAL_STATE = {
  currrentUser: null
}

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currrentUser: action.payload
      };
    
    default:
      return state;
  }
}

export default userReducer;