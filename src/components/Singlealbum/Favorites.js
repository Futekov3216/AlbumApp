const faroritesReducer = (state = [], action) => {

    switch(action.type) {
      case 'INCLUDE':
        return [...state, action.payload]
        
      default:
        return state
    }
  }
  
  export default faroritesReducer