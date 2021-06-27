import React from 'react'
import './TypeSelect.css'

const TypeSelect = ({ types, changeType, selected }) => (
    <div className="type-select">
        {types.map((type, index) => (
            <button
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name ? 'active' : ''}
            >
                {type.name}
            </button>
        ))}
    </div>
);

export default TypeSelect