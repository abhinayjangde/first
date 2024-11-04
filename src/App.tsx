import { useEffect, useState } from "react";

const Home = () => {
  const [count,setCount]=useState(0);

  // useEffect(() => {
  // },[count])
  const increment = ()=>{
    setCount(count+1);
  }

  const decrement = ()=>{
    setCount(count-1);
  }
  return (
    <div>
      <nav className="flex items-center justify-between px-2 py-2 bg-blue-200">
        <h1 className="text-2xl underline">Counter App</h1>
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
      <main className="flex items-center justify-between flex-col">
        <h2 className="text-center text-4xl my-4">Counter App</h2>
        <div className="flex gap-4 items-center">

          <button onClick={decrement} className="bg-red-400 border px-4 p-1">-</button>

          <p>{count}</p>

          <button onClick={increment} className="bg-green-400 border px-4 p-1">+</button>
        </div>
      </main>
      
    </div>
  );
}

export default Home;