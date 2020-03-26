import React from 'react';
import { Icons } from './Icons.js';

const Icon = props => {

    const icon = Icons[props.icon];
    // add a path tag for each path incase their are multiple
    const setPaths = paths => {
        let children = [];
        for (let j = 0; j < paths.length; j++) {
            children.push(
                <path 
                    d={paths[j]} 
                    key={`path ${j + 1}`} 
                    style={icon.outlined ? 
                        {strokeWidth: "1px",
                            fill: "none",
                            strokeMiterlimit: "10"
                        } :
                        {
                            stroke: "none"
                        }
                    }
                />
            );
        }
        return children;
    };

    return (
        <svg 
            width={ icon.width } 
            height= { icon.height } 
            viewBox={`0 0 ${icon.width} ${icon.height}`} 
            alt={`${props.icon} icon`} 
            className={`${props.icon}_icon icon`}
        >
            {setPaths(icon.paths)}
        </svg>
    );
};

export default Icon;