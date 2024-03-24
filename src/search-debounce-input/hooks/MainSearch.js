import React from "react";
import { useState, useEffect } from "react";
import useDebounce from "../useDebounce";

const MainSearch = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);

  const debouncedValue = useDebounce(search, 1000);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `https://dummyjson.com/users/search?q=${debouncedValue}`
      ).then((res) => res.json());
      setUser(data.users);
      console.log(data.users);
      setLoading(false);
    }
    if (debouncedValue) fetchData();
  }, [debouncedValue]);

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      {loading && <div>Loading...</div>}
      {user.map((user) => (
        <div key={user.id}>
          <h1>{user.firstName}</h1>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default MainSearch;