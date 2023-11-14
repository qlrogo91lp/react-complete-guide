import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    // Only rendering once
    useEffect(() => {
      dispatch(fetchCartData());
    }, [dispatch]); // dispatch will never change

    // 이 방법은 component를 leaner하게 만든다
    // 여러 작업을 하지 않는다
    useEffect(() => {
        if (isInitial) {
          isInitial = false;
          return;
        }

        if (cart.changed) {
          dispatch(sendCartData(cart));
        }

    }, [cart, dispatch]); // dispatch will never change

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;

/*
function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        // async 코드를 사용하려면 useEffect() 안에서 사용해야만 한다
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data!",
                })
            );
            const response = await fetch(
                "https://react-http-4040a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending cart datat failed!");
            }

            if (isInitial) {
              isInitial = false;
              return;
            }

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sending cart data!",
                })
            );

          };

          sendCartData().catch((error) => {
              dispatch(
                  uiActions.showNotification({
                      status: "error",
                      title: "Error!",
                      message: "Sending cart data failed!",
                  })
              );
          });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
} 
*/