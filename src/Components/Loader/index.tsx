import React from 'react';
import { Load } from 'style/Loader';


const Loader: React.FC = () => {
    return (
        <Load>
            <span>&#123;</span>
            <span>&#125;</span>
        </Load>
    );
};

export default Loader;
