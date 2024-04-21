import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState: {name: 'kim', age: 20}
})

export default user;