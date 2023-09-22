import { createSlice } from "@reduxjs/toolkit";

 const FavoruriteSlice = createSlice({
    name:"favorurite",
    initialState:{
        data : [],
    },
    

    reducers:{
        AddToFavorurite(state,action){

            let favData = state.data;
            let isproductExist = false;
      
            favData.map(item => {
              if (item.productId == action.payload.productId) {
                isproductExist = true;
                item.quantity = item.quantity + 1;
              }
            });
            if (!isproductExist) {
              favData.push(action.payload);
            }
            state.data = favData;
      
        },
         Remove(state,action){
          let favData = state.data;

          favData.splice(action.payload,1)

            }
         
        
    },
});

export const {AddToFavorurite,Remove} = FavoruriteSlice.actions; 
export default FavoruriteSlice.reducer;