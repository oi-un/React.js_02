import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice.js'

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, actions){// 장바구니 내 count 증가
      // state.map((item) => {
      //   if(item.id === actions.payload){
      //     item.count += 1;
      //   }
      // })

      let item = state.findIndex((item) => {return item.id == actions.payload})
      state[item].count++;
    },
    addCart(state, actions){ // detail에서 장바구니 추가
      let item = actions.payload;
      console.log(item.id);
      let sameItem = state.findIndex((a)=>{return a.id == item.id})
      if(sameItem == -1){ 
        let newItem = {id : item.id, name : item.title, count : 1}
        state.push(newItem);
      }else{
        state[sameItem].count++;
      }
    },
    removeItem(state, actions){ // 장바구니 항목 삭제
      let sameItem = state.findIndex((item)=>{return item.id === actions.payload.id});
      state.splice(sameItem, 1);
    }
  }
})
export let {addCount, addCart, removeItem} = cart.actions;


export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer, 
  }
})