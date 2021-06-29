import React from 'react'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

const TypeSelect = ({ types, changeType, selected }) => (
    <div className="type-select">
        <Grid container spacing={5} direction="row"> 
        {types.map((type, index) => (
            <Grid item key={type.name}>
            <Button variant="contained"
                size = "small"
                key={type.name}
                onClick={() => changeType(type)}
                className={type.name === selected.name ? 'active' : ''}
                color={type.name === selected.name ? 'secondary' : 'primary'}
            >
                {type.name}
            </Button>
            </Grid>
        ))}
        </Grid>
    </div>

);

export default TypeSelect