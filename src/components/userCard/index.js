import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import user from '../../user.jpg'

export function UserCard({ name, nationality, age, handleClick, id, isSelected }) {
    return (
        <Grid container spacing={0} style={{ padding: 10, margin: '0 0 15px 0', border: '1px solid #12f523', backgroundColor: isSelected ? '#dbf2e6' : 'white', borderRadius: 10, width: '95%' }} onClick={() => handleClick(id)}>
            <Grid>
                <Avatar alt="Remy Sharp" src={user} sx={{ width: 80, height: 80, marginRight: '1rem' }} />
            </Grid>
            <Grid>
                <Typography variant="h4">{name}</Typography>
                <Typography>{nationality}</Typography>
                <Typography>{age}</Typography>
            </Grid>
        </Grid>
    )
}

export default UserCard;