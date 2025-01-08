import React from 'react';
import { Load } from 'style/Loader';
import Typewriter from "typewriter-effect";


const Loader: React.FC = () => {
    return (
        <Load>
            {/* <span>{`{ Kajal`}</span>
            <span>{`Raj }`}</span> */}
            <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: ["Kajal Raj"],
                  }}
                />
              </span>
        </Load>
    );
};

export default Loader;
