import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Context } from '../../store';

export const DetailsContainer = () => {
    const [data, dispatch] = useContext(Context);
    return (
        <Grid item xs="auto" sm={9} className={'artistDetailsContainer'} style={{ minHeight: '93vh', padding: 16 }}>
            {data.artists.length ? data.artists.filter(artist => data.artistId == artist.id).map(artist => 
                <div style={{ backgroundColor: '#fff', minHeight: '87vh', borderRadius: 10, padding: 10 }} className='lyricsContainer'>
                    {artist.lyrics? artist.lyrics[0] : "No Lyrics Found For Artist"}
                </div>
            ) : "No Artist Found"}
        </Grid>
    )
}

export default DetailsContainer;