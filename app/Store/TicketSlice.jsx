import { createSlice } from "@reduxjs/toolkit";

const Initialstate = { TicketPrice: {}, TicketQuantity: {} };

const TicketSlice = createSlice({
  name: "Ticket",
  initialState: Initialstate,
  reducers: {},
});
