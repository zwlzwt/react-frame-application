import * as alltypes from './actionTypes'
import { CALL_API } from '../middlewares/fetch'

export const addStar = () => (
  {
    type: alltypes.ADD_STAR,
  }
)
export const reduceStar = () => (
  {
    type: alltypes.RUDCE_STAR,
  }
)

// export const order = () => ({
//   [CALL_API]: {
//     endpoint: `/user/orders`,
//     types: [alltypes.ORDER_REQ, alltypes.ORDER_SUCCESS, alltypes.ORDER_FAILURE],
//     method: 'get',
//   },
// })
