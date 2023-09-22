import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },


  reducers: {
    AddToCart(state, action) {

      let tempData = state.data;
      let isproductExist = false;

      tempData.map(item => {
        if (item.productId == action.payload.productId) {
          isproductExist = true;
          item.quantity = item.quantity + 1;
        }
      });
      if (!isproductExist) {
        tempData.push(action.payload);
      }
      state.data = tempData;

    },
    ReduceProductQty(state, action) {
      
      let tempData = state.data;
      
      tempData.map(item => {
        if (item.productId == action.payload.productId) {
            item.quantity = item.quantity - 1;
        }
      });
      state.data = tempData;

    },
    RemoveProductFromCart(state, action) {
      
      let tempData = state.data;
      tempData.splice(action.payload,1);

      state.data = tempData;

    },
  },

});

export const { AddToCart, ReduceProductQty,RemoveProductFromCart } = CartSlice.actions;
export default CartSlice.reducer;