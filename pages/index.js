// import HeroSection from "../Components/HeroSection";
import { useRef, useState, useEffect } from "react";
import Footer from "../Components/Footer";

// export default function Home() {

//   return (
//     <div className={`mandatory-snap`}>
//       <div className="snap-parent">
//         <Footer />
//       </div>
//     </div >
//   )
// }

export default function Home() {
  return (
    <div>
      <h1 className="termina text-38 font-bold underline text-center">
        Hello world!
      </h1>
      <div className="bg-neutral-200 flex w-screen h-screen mt-9 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-38 text-neutral-800 termina font-bold">Taylor</div>
          <div className="text-28 text-neutral-700 font-semibold lato">ORUM Swift</div>
          </div>
      </div>
    </div>
  )
}
