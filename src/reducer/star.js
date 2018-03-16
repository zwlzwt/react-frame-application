import * as actionTypes from '../action/actionTypes'

const initial = {
  num: 0,
}

export const addStars = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.ADD_STAR:
      const totleNum = state.num + 1
      return {
        ...state,
        num: totleNum,
      }
    case actionTypes.RUDCE_STAR:
      if (state.num === 0) {
        return state
      } else {
        const Num = state.num - 1
        return {
          ...state,
          num: Num,
        }
      }
    default:
      return state
  }
}
