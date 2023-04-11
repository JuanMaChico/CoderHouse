import React from "react";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

const CartWidget = () => {
  return (
    <div className="CartWidget">
      <ShoppingCartCheckoutRoundedIcon
        sx={{ width: 50, heigth: 500, fontSize: "50px" }}
      />
    </div>
  );
};

export default CartWidget;
