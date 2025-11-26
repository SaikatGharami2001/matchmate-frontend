import { useEffect } from "react";
import { useConnectionStore } from "../store/useConnectionStore ";

const Connections = () => {
  const { connections, fetchConnections } = useConnectionStore();

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (!Array.isArray(connections))
    return <h1>Error: connections is not an array</h1>;

  if (connections.length === 0) return <h1>No Connections Found</h1>;

  return (
    <div className="flex flex-col items-center gap-5 my-10">
      <h1 className="text-bold text-2xl">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, age, gender, _id } = connection;
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        console.log(gender);

        return (
          <div
            key={_id}
            className="bg-white/10 p-4 rounded-xl w-80 text-center text-white"
          >
            <h2 className="text-xl font-semibold">
              {firstName} {lastName}
            </h2>
            <p className="text-gray-300 text-sm">
              {age ? age : "Age N/A"} • {gender ? gender : "Gender N/A"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
