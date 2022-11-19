import React, { useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import styled from "styled-components";
import Analytics from "./Analytics";
import Payments from "./Payments";
import FAQ from "./FAQ";
import Navbar from "./Navbar"; 
import Profile from "./Profile";
import Transfers from "./Transfers";
// import scrollreveal from "scrollreveal";
export default function Dashboard() {
  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "bottom",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: false,
  //   });
  //   sr.reveal(
  //     `
  //       nav,
  //       .row__one,
  //       .row__two
  //   `,
  //     {
  //       opacity: 0,
  //       interval: 100,
  //     }
  //   );
  // }, []);
  return (
    <div className="container-sm mg-10">
      <Routes>
                  <Route path="dashboard" element={<Dashboard/>}></Route>
                </Routes>
      <Navbar />
      <div className="row">
        <div className="col">
          <Analytics />
         
        </div>
        <div className="row__two">
          <Payments />
          
          <Profile />
        </div>
      </div>
    </div>
  );
}

// const Section = styled.section`
//   margin-left: 18vw;
//   padding: 2rem;
//   height: 100%;
//   .grid {
//     display: flex;
//     flex-direction: column;
//     height: 30%;
//     gap: 1rem;
//     margin-top: 2rem;
//     .row__one {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       height: 50%;
//       gap: 1rem;
//     }
//     .row__two {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 1rem;
//       height: 50%;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     margin-left: 0;
//     .grid {
//       .row__one,
//       .row__two {
//         grid-template-columns: 1fr;
//       }
//     }
//   }
// `;
