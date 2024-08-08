// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Admin() {
//   const [alluser, setalluser] = useState([]);
//   console.log(alluser);
//   useEffect(() => {
//     const GetUser = async () => {
//       try {
//         const Request = await axios.get("http://localhost:5000/getuser/admin", {
//           withCredentials: true,
//         });
//         const Response = Request.data.users;
//         console.log("admin Response", Response);
//         setalluser(Response);
//         console.log("sajid");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     GetUser();
//   }, []);
//   // Delete user function
//   const delUser = async (id) => {
//     const Request = await axios.post(
//       `http://localhost:5000/delete/delete/${id}`,
//       { withCredentials: true }
//     );
//     alert(id);
//   };
//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {alluser.map((data, index) => (
//         <div
//           key={index}
//           className="bg-slate-600  shadow-md rounded-lg overflow-hidden"
//         >
//           <div className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{data.Name}</h2>
//             <p className="text-white font-semibold">Email: {data.Email}</p>
//             <p className="text-white font-semibold">Role: {data.Role}</p>
//             <button
//               onClick={() => delUser(data._id)}
//               className="text-white py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Admin;

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Admin() {
  const [alluser, setalluser] = useState([]);

  useEffect(() => {
    const GetUser = async () => {
      try {
        const Request = await axios.get("http://localhost:5000/getuser/admin", {
          withCredentials: true,
        });
        const Response = Request.data.users;
        setalluser(Response);
      } catch (error) {
        console.log(error);
      }
    };
    GetUser();
  }, []);

  // Delete user function
  const delUser = async (id) => {
    try {
      const Request = await axios.post(
        `http://localhost:5000/delete/delete/${id}`,
        {},
        { withCredentials: true }
      );
      const message = Request.data;
      toast.success(message);
      // delet on ui
      setalluser(alluser.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {alluser.map((data, index) => (
        <div
          key={index}
          className="bg-slate-600 shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{data.Name}</h2>
            <p className="text-white font-semibold">Email: {data.Email}</p>
            <p className="text-white font-semibold">Role: {data.Role}</p>
            <button
              onClick={() => delUser(data._id)}
              className="text-white py-2 px-4 bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;
