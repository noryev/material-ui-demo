import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import  Button  from '@material-ui/core/Button';
import  ButtonGroup  from '@material-ui/core/ButtonGroup';

const App = () => {
    return (
      <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        IPFS Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone, this is a photo ablum and I'm trying to make this sentence as long as possible to test to see what the sentence looks like on the screen
                        </Typography>
                    </Container>
                </div>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </main>
      </>
    );
}

export default App;