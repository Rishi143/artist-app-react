import React from 'react';
import { Grid } from '@mui/material';

export const DetailsContainer = () => {
    return (
        <Grid item xs="auto" sm={9} className={'artistDetailsContainer'} style={{ minHeight: '93vh', padding: 16 }}>
            <div style={{ backgroundColor: '#fff', minHeight: '87vh', borderRadius: 10, padding: 10 }}>DetailsContainer</div>
        </Grid>
    )
}

export default DetailsContainer;