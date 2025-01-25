"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Query = () => {
  const EventQuery = useQuery({
    queryKey: ["Events"],
    queryFn: () => axios.get("http://localhost:3000/EventDetails"),
  });
};

const cart = 0;
const EventQueries = Query.EventQuery;

const EventSlice = createSlice({
  name: "Events",
  initialState: [EventQueries, cart],
  reducers: {
    AddToCart: (state, action) => {
      state.cart += action.payload;
    },

    RemoveFromCart: (state, action) => {
      state.cart -= action.payload;
    },
  },
});

export const { AddToCart, RemoveFromCart } = EventSlice.actions;
export default EventSlice.reducer;
