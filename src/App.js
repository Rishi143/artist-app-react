import './App.css';
import { Grid, Typography } from '@mui/material';
import DetailsContainer from './components/detailsContainer';
import ArtistsContainer from './components/ArtistContainer';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} style={{ padding: 16, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" style={{ fontFamily: 'cursive' }}><b>Artist Management App</b></Typography>
      </Grid>
      <ArtistsContainer />
      {/* <Grid item xs={0.5}></Grid> */}
      <DetailsContainer />
    </Grid>
  );
}

export default App;
