import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullName: "Roman",
      phoneNumber: "+380987654321",
    },
    {
      id: uuidv4(),
      fullName: "Anton",
      phoneNumber: "+380987654321",
    },
  ],
};

const contactSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

const { reducer, actions } = contactSlice;
const { contacts } = actions;

export default reducer;
