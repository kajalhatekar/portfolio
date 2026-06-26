import React from 'react';
import { Load } from 'style/Loader';
import Typewriter from "typewriter-effect";

const Loader: React.FC = () => {
    return (
        <Load>
            {/* <span>{`{ Kajal`}</span>
            <span>{`Raj }`}</span> */}
            <span className="name">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: ["Kajal Hatekar"],
                  }}
                />
              </span>
        </Load>
    );
};

export default Loader;

// import { memo, useState } from "react";
// import classNames from "classnames";
// import { Load, ScrollDownDiv } from "style/Loader";
// import Typewriter from "typewriter-effect";
// import styles from "./WavyBackground.module.css";

// const Loader: React.FC = () => {
//   const [showProfession, setShowProfession] = useState(false);
//   return (
//     <div style={{ position: "relative" }}>
//       <div aria-hidden className={styles.waveBackground}>
//         <svg>
//           <defs>
//             <path
//               d="M 0 47.8 C 50.432 47.8 90.43 0 139.988 0 C 189.548 0 229.545 47.8 279.977 47.8 L 279.977 48.938 C 229.545 48.938 189.548 1.138 139.988 1.138 C 90.43 1.138 50.432 48.938 0 48.938 Z"
//               id="wave_path"
//             />
//             {(["primary", "secondary"] as const).map((type) => (
//               <pattern
//                 height="102"
//                 id={`wave_${type}`}
//                 key={type}
//                 patternUnits="userSpaceOnUse"
//                 width="280"
//               >
//                 <use
//                   className={styles.wavePattern}
//                   fill={type === "primary" ? "#f461ea" : "#97abe2"}
//                   xlinkHref="#wave_path"
//                 />
//               </pattern>
//             ))}
//           </defs>

//           <g
//             style={{
//               transform: "translateX(-100px)",
//             }}
//           >
//             <rect
//               className={classNames(styles.wave, styles.wavePrimary)}
//               fill="url(#wave_primary)"
//               height="100%"
//               width="100%"
//             />
//           </g>
//           <g
//             style={{
//               transform: "translate(-100px, 51px)",
//             }}
//           >
//             <rect
//               className={classNames(styles.wave, styles.waveSecondary)}
//               fill="url(#wave_secondary)"
//               height="100%"
//               width="100%"
//             />
//           </g>
//         </svg>

//         <Load className={styles.typewriter}>
//           <span className="name">
//             <Typewriter
//               options={{
//                 autoStart: false,
//                 loop: false,
//                 delay: 45,
//                 strings: ["Kajal Raj"],
//                 cursor: "",
//               }}
//               onInit={(typewriter) => {
//                 typewriter
//                   .typeString("Kajal Raj")
//                   .pauseFor(1000)
//                   .callFunction(() => setShowProfession(true)) // Trigger profession after name
//                   .start();
//               }}
//             />
//           </span>
//           {showProfession && (
//             <span className="profession">
//               <Typewriter
//                 options={{
//                   autoStart: true,
//                   loop: true,
//                   delay: 45,
//                   strings: [
//                     "MERN Stack Developer",
//                     "Software Engineer",
//                     "Frontend Developer",
//                     "UI Developer",
//                   ],
//                 }}
//               />
//             </span>
//           )}

//           {/* <span>
//             <ScrollDownDiv bottom={25} delay={0.15} />
//             <ScrollDownDiv bottom={40} />
//           </span>
//           <span> <h4>Scroll Down!</h4></span> */}
         
//         </Load>
//       </div>
//     </div>
//   );
// };

// export const WavyBackground = memo(Loader);
