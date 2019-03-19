const CheckReducer = (state = [], action) => {

    switch(action.type) {
      case 'CHECK':
        return [...state, action.payload]
      default:
        return state
    }
  }
  
  export default CheckReducer