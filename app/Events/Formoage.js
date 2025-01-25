"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Eventspag() {
  const [body, setBody] = useState({});

  const { mutate } = useMutation({
    mutationFn: () => axios.post("http://localhost:3000/api/Event", body),
  });

  return (
    <div className="">
      <button
        className=""
        type="submit"
        onClick={(e) => {
          e.stopPropagation,
            e.preventDefault,
            setBody({
              FirstName: "Taiwo",
              LastName: "Taiwo",
              ProfileName: "Taiwoalak",
              email: "taiwowmail@mail.com",
              Email: "taiwomail@mail.com",
              Age: 23,
              password: "Thatsmypassword",
              Phone: 9027272665,
              address: "my address to my place",
            }),
            mutate(body);
        }}
      >
        Submit
      </button>
    </div>
  );
}
