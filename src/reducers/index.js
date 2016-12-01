import { combineReducers } from "redux"
import items from "./itemsReducer"

const inventoryManagerApp = combineReducers({
  items
})

export default inventoryManagerApp