const initialState = {
  tries : 0,
  best: 0,
}

const displayReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        tries: state.tries + 1,
      }
    case 'RESTART':
      return {
        ...state,
        tries: 0,
      }
    default:
      return state;
  }

}

export default displayReducer;
