import { useEffect, useState } from "react";
export default function Github() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/shuvo2566")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followrs: {data ? data.followers : "Loading..."}
    </div>
  );
}
