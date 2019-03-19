import { createStore, combineReducers } from 'redux'
import listReducer from '../components/List/reducer'
import checkReduce from '../components/List/checkReducer'
import faroritesReducer from '../components/Singlealbum/Favorites'


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const rootReducer = combineReducers({
  list: listReducer,
  checkReduce: checkReduce,
  favorites: faroritesReducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
