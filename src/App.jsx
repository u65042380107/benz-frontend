import React, { useState, useEffect } from "react";

export default function App() {
  const [todo, settodo] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API+"/todo")
      .then((res) => res.json())
      .then((result) => {
        settodo(result);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <ul>
        {todo.map((item) => (
          <li>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
