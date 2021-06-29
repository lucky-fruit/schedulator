import React from 'react'
import { Button } from '@material-ui/core';

const TypeSelect = ({ types, changeType, selected }) => (
    <div className="type-select">
        {types.map((type, index) => (
            <Button variant="contained"
                size = "large"
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name ? 'active' : ''}
                color={type.name === selected.name ? 'secondary' : 'primary'}
            >
                {type.name}
            </Button>
        ))}
    </div>
);

export default TypeSelect