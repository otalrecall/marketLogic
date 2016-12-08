import { combineReducers } from "redux"
import items from "./ItemsReducer"

const inventoryManagerApp = combineReducers({
  items
})

export default inventoryManagerApp