import { useRouter } from "next/router";
import React, { useState } from "react";

export default function MainPage({ data }) {
  console.log(data);
  const router = useRouter();
  const [cityName, setCityName] = useState();

  const check = (e) => {
    console.log("e-g hewlej baina", e.target.value);
    console.log("ckeck fn ajillaj baina");
    setCityName(e.target.value);
  };

  const getStaticProps = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=259a45291c170c5c423ff8ba7728828c`
    );
    // "https://api.openweathermap.org/data/2.5/weather?lat=-73.990593&lon=40.740121&appid=259a45291c170c5c423ff8ba7728828c"
    // 259a45291c170c5c423ff8ba7728828c
    const data = await res.json();
    return { props: { data } };
  };
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-4">
      <p>Main page</p>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-blue-400 text-black px-5 py-2 rounded-xl"
      >
        Go home page
      </button>
      <input
        type="text"
        className="text-black"
        onChange={(e) => {
          check(e);
        }}
      />
      <button
        onClick={() => {
          console.log(cityName);
        }}
        className="bg-green-400 text-black px-5 py-2 rounded-xl"
      >
        Search
      </button>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=-73.990593&lon=40.740121&appid=259a45291c170c5c423ff8ba7728828c"
//     // "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
//   );
//   const data = await res.json();
//   console.log(data);
//   return { props: { data } };
// };

//-73.990593
//40.740121
