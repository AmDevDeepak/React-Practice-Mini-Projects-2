import React from "react";

const Sorting = () => {
  const [users, setUsers] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const usersCopy = [...users];

  React.useEffect(() => {
    let copyOfUsers = [...users];
    if (sort === "") setUsers(usersCopy);
    if (sort === "ascending") {
      copyOfUsers.sort((a, b) => (a.name > b.name ? 1 : -1));
      setUsers(copyOfUsers);
    }
    if (sort === "descending") {
      copyOfUsers.sort((a, b) => (a.name > b.name ? -1 : 1));
      setUsers(copyOfUsers);
    }
  }, [sort]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-indigo-600">
      <div className="flex flex-col gap-2.5 w-full bg-indigo-900 text-white p-4 rounded-md max-w-md ">
        <h1 className="text-white text-2xl font-bold border-b-2 border-red-50">
          Users List
        </h1>
        <div className="sort">
          <select
            value={sort}
            onChange={(ev) => setSort(ev.target.value)}
            className="bg-slate-700 text-white outline-none font-medium p-2 rounded-md"
          >
            <option value={""}>Sort</option>
            <option value={"ascending"}>A-Z</option>
            <option value={"descending"}>Z-A</option>
          </select>
        </div>
        <div className="flex flex-col gap-2.5">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <h3 className="text-white font-semibold">{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
