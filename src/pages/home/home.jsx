import React from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));
export default function Home() {
    const classes = useStyles();

    return (
        <Container className="Body" maxWidth="md">
            <h2 style={{ fontSize: 30, display: 'flex', justifyContent: 'center' }} className="Title">CUT</h2>
            <div className="InputUrl">
                <div>Paste your URL here</div>
                <div style={{ display: 'flex', width: 'auto', marginTop: 10, marginBottom: 10 }}>
                    <TextField
                        label="URL here"
                        style={{ width: '70%', height: 'auto', backgroundColor: 'white' }}
                        id="filled-margin-none"
                        fullWidth
                        className={classes.textField}
                        variant="outlined"
                    />
                    <Button color="primary" variant="contained" style={{ width: '30%', height: 'auto' }}>CLICK HERE!</Button>
                </div>
                <div>Shortening will help you to decrease the size of your URLs</div>
            </div>
            <h2 className="title" style={{ marginTop: 50 }}>How does the CUT work?</h2>
            <p className="desc">CUT is a URL shortener, it takes your URL and shortens it to make it easier to remember or send to anyone.</p>
            <h2 className="title">How to use?</h2>
            <p className="desc">Just enter your URL and click on the button, it will be shortened afterwards and you will be able to copy</p>
        </Container>
    );
}
