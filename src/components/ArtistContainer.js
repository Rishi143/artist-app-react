import React, { Fragment, useContext, useState } from 'react';
import { Button, Grid, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField, Typography, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { UserCard } from './userCard';
import { Context } from '../store';

export const ArtistContainer = () => {
    const [data, dispatch] = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', nationality: '', age: 14 });
    const [hasError, setHasError] = useState(false)

    const handleArtistClick = (id) => {
        dispatch({
            type: "updateArtist",
            id
        })
    };

    const toggleDisplayModal = () => {
        setIsOpen(item => !item);
    }

    const handleAddArtist = () => {
        toggleDisplayModal();
    }

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            toggleDisplayModal();
            setFormData({ name: '', nationality: '', age: 14 })
        }
    }

    const handleRemoveArtist = () => { }

    const handleFieldChange = (fieldName, value) => {
        setFormData(prevData => ({ ...prevData, [fieldName]: value }));

    }

    const handleAddNewArtist = () => {
        if (!Object.values(formData).includes("")) {
            setHasError(false);
        } else {
            setHasError(true);
        }
    }

    return (
        <Fragment>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>New Artist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography color={hasError ? 'red' : 'black'}>
                            Please fill all the fields to add a new artist to the list
                        </Typography>
                    </DialogContentText>
                    <Grid container>
                        <Grid xs={12}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                placeholder="John Doe"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={formData.name}
                                onChange={(event) => handleFieldChange('name', event.target.value)}
                                style={{ margin: '2rem 0' }}
                                InputProps={{
                                    endAdornment: <PersonIcon />
                                }}
                            />
                        </Grid>
                        <Grid xs={9}>
                            <TextField
                                required
                                id="nationality"
                                label="Nationality"
                                placeholder="Brazilian"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={formData.nationality}
                                onChange={(event) => handleFieldChange('nationality', event.target.value)}
                                style={{ margin: '0.5rem 0' }}
                                InputProps={{
                                    endAdornment: <FlagIcon />
                                }}
                            />
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid xs={2}>
                            <TextField
                                required
                                id="age"
                                label="Age"
                                placeholder="21"
                                type="number"
                                fullWidth
                                variant="outlined"
                                value={formData.age}
                                onChange={(event) => handleFieldChange('age', event.target.value)}
                                style={{ margin: '0.5rem 0' }}
                                InputProps={{
                                    endAdornment: <CalendarMonthIcon />
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant={'outlined'}
                        onClick={handleAddNewArtist}
                        // endIcon={<CircularProgress />}
                    >
                        Add</Button>
                    <Button variant={'outlined'} color='error' onClick={() => handleClose(null, 'cancel')}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Grid item xs="auto" sm={3} className={'artistContainer'} style={{
                overflowY: 'auto',
                height: '93vh',
                padding: '1rem 1rem 1rem 3rem'
            }}>
                {data.artists.length ? data.artists.map(artist => <UserCard {...artist} handleClick={handleArtistClick} isSelected={data.artistId === artist.id} />) : "Add an artist"}
                <Grid container spacing={0} style={{ padding: 10, margin: '0 0 10px 10px', borderRadius: 10, width: '95%' }}>
                    <Button variant={'outlined'} endIcon={<AddIcon />} style={{ marginRight: 10, backgroundColor: '#fff' }} onClick={handleAddArtist}>Add Artist</Button>
                    <Button variant={'outlined'} endIcon={<DeleteIcon />} style={{ backgroundColor: '#fff' }} color='error' onClick={handleRemoveArtist}>Remove Artist</Button>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ArtistContainer