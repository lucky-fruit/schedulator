import React from 'react'
import './TypeSelect.css'
import {Button} from 'react-bootstrap'

const TypeSelect = ({ types, changeType, selected }) => (
    <div className="type-select">
        {types.map((type, index) => (
            <Button
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name ? 'active' : ''}
            >
                {type.name}
            </Button>
        ))}
    </div>
);

export default TypeSelect