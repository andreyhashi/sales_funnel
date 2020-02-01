import {
  HIDE_SALE_HISTORY,
  SHOW_SALE_HISTORY,
} from "../actions"
const initialState = {
  openSaleProgression: false,
  currentProgression: {},
}
export const saleProgressionModal = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_SALE_HISTORY:
      return ({ ...state, openSaleProgression: false })

    case SHOW_SALE_HISTORY:
      return ({ ...state, currentProgression: action.currentProgression, openSaleProgression: true })
    default:
      return state
  }
}
export default saleProgressionModal