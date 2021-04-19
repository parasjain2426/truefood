import { initialOrders } from "../initialStates/initialOrders";
import { BUY, MODIFYQUANTITY, PROCESS } from "../actions/actionVars";

export const orderReducer = (state = initialOrders, action) => {
  switch (action.type) {
    case MODIFYQUANTITY:
      return {
        orders: state.orders.map((order) => {
          if (order.id === action.id) {
            order.quantity = action.count;
          }
          return order;
        })
      };
    case PROCESS:
      return {
        orders: state.orders.map((order) => {
          if (order.id === action.id) {
            order.isprocessed = action.value;
          }
          return order;
        })
      };
    case BUY:
      return {
        orders: state.orders.map((order) => {
          if (order.id === action.id) {
            order.isConfirm = true;
          }
          return order;
        })
      };
    default:
      return state;
  }
};
