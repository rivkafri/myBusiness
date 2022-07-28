// import React, { useState, useEffect } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { getBusinessByUserId, getServicesByBusinessId } from '../data/api';


// export const Customer = () => {
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         console.log('useEffect1');
//         getBusiness();
//         console.log("---");
//     });

//     const getBusiness = async () => {
//         try {
//             await getBusinessByUserId('6999b812-3235-4502-aea1-3771b2fc6d1c').then((business) => {
//                 console.log(business);
//                 getServicesByBusinessId(business.id).then((services) => {
//                     setServices([...services]);
//                 });
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     return (
//         <div>
//             <h1>customer</h1>
//             <Link to={`/Customer/${s.id}`}></Link>
//             {/* <ul>
//                 {services.map((s) => {
//                     <li key={s.id}>
//                         {" "}
//                         <Link to={`/Customer/${s.id}`}></Link>
//                     </li>
//                 })}
//             </ul> */}
//         </div>
//     );
// };
