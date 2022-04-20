import HeroSection from "../Components/HeroSection";
import { useRef, useState, useEffect } from "react";

export default function Home() {

  const slide0 = useRef();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (

    !mounted
      ? null
      : <div className={`mandatory-snap`}>

        <div
          className="snap-parent"
          ref={slide0}
        >
          <HeroSection />
        </div>
      </div >
  )
}

// export default function Home() {
//   return (
//     <div>
//       <h1 className="text-38 font-bold underline text-center">
//         Hello world!
//       </h1>
//     </div>
//   )
// }
