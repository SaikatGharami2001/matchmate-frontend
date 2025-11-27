import { useEffect } from "react";
import { useConnectionStore } from "../store/useConnectionStore ";

const Connections = () => {
  const { connections, fetchConnections } = useConnectionStore();

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.length === 0)
    return (
      <h1 className="text-center text-gray-400 mt-10 text-xl font-semibold">
        No Connections Found
      </h1>
    );

  return (
    <div className="flex flex-col items-center gap-8 my-12 px-4">
      <h1 className="text-3xl font-extrabold text-white tracking-wide">
        Connections
      </h1>

      <div className="grid grid-cols-1 gap-8 place-items-center">
        {connections.map((connection) => {
          const { firstName, lastName, age, gender, _id } = connection;

          return (
            <div
              key={_id}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl w-80 text-center text-white 
                         border border-white/10 shadow-xl shadow-black/30
                         hover:scale-[1.03] hover:shadow-pink-500/30 
                         transition-all duration-300"
            >
              <div
                className="w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full mx-auto 
                              flex items-center justify-center text-3xl font-bold shadow-md shadow-black/40"
              >
                {firstName[0]}
              </div>

              <h2 className="text-2xl font-semibold mt-4 tracking-wide">
                {firstName} {lastName}
              </h2>

              <p className="text-gray-300 text-sm mt-1">
                {age ? age : "Age N/A"} • {gender ? gender : "Gender N/A"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
