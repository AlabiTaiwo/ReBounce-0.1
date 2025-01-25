"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const CartComponent = () => {
    const { } = useQuery({
        queryKey: ["Cart"],
        queryFn: () => axios.get("http://localhost:3000")
    })

}



export default CartComponent;