import React, { useContext } from "react";
import "../components-styles/shopChildStyle.css";
import { modifyQuantity, processOrder } from "../../actions/actionCreator";
import { Button } from "@material-ui/core";
import { OrderContext } from "../../contexts/OrderContext";

export const OrderChild = (props) => {
  const [ordersState, dispatchOrders] = useContext(OrderContext);
  const { orders } = ordersState;
  const orderQuantityHandler = (id, count) => {
    dispatchOrders(modifyQuantity(id, count));
  };
  const orderInitializeHandler = (id, value) => {
    dispatchOrders(processOrder(id, value));
  };
  return (
    <div className="shop-child">
      <h1>Orders</h1>
      <div>
        <ul style={{ listStyle: "none" }}>
          {orders.map((order) => (
            <li key={order.id}>
              <div>
                <div style={{ float: "left" }}>{order.name}</div>
                <div className="shop-child-order">
                  <p>
                    <b>Rs.{order.price}</b>
                  </p>
                  <div
                    style={{
                      justifyContent: "space-around",
                      display: order.isprocessed ? "flex" : "none"
                    }}
                  >
                    <Button
                      onClick={() =>
                        order.quantity <= 1
                          ? orderInitializeHandler(order.id, false)
                          : orderQuantityHandler(order.id, order.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <p>{order.quantity}</p>
                    <Button
                      onClick={() =>
                        orderQuantityHandler(order.id, order.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                  <div
                    style={{ display: order.isprocessed ? "none" : "block" }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => orderInitializeHandler(order.id, true)}
                    >
                      Add +
                    </Button>
                  </div>
                </div>
              </div>
              <div style={{ width: "95%", clear: "both", margin: "10px" }}>
                <hr />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
