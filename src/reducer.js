const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_MODEL':
      return [{...action.payload},...state]
  default:
    return state
  }
}

export default reducer