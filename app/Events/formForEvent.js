"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function CreateEvent() {
  const [body, setBody] = useState({});
  const [time, setTime] = useState();

  const { mutate } = useMutation({
    mutationFn: () =>
      axios.post("http://localhost:3000/api/createEvents", body),
  });

  return (
    <div className="">
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button
        className=""
        type="submit"
        onClick={(e) => {
          e.stopPropagation,
            e.preventDefault,
            setBody({
              Name: "Taiwo",
              Artist: "Tblizz",
              EventImage: "Taiwoalak",
              Description: "taiwowmail@mail.com",
              Time: time,
              address: "This is my new address",
            }),
            mutate(body);
        }}
      >
        Submit
      </button>
    </div>
  );
}
