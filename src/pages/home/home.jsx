import React, { useEffect, useRef } from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {api} from "../../api"

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
    const inputRef = useRef();

    function copy() {
        if (!inputRef.current) return false;

        inputRef.current.select();
        document.execCommand("copy");
        setCor("primary")
        setButton("COPY!")
    }
    const classes = useStyles();
    const [ivalue, setIvalue] = React.useState("teste")
    const [cor, setCor] = React.useState("default")
    const [button, setButton] = React.useState("CLICK HERE!")
    const [value, setValue] = React.useState(null)
    const [data,setDate] = React.useState({"url":"https://moises-portfolio.vercel.app/"})
  
    const encurtarURL = async () => {
        try {
            const response = await api.post(``,data);
           console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
    }, []);

    return (
        <Container className="Body" maxWidth="md">
            <h2 style={{ fontSize: 30, display: 'flex', justifyContent: 'center' }} className="Title">CUT</h2>
            <div className="InputUrl">
                <div>Paste your URL here</div>
                <div style={{ display: 'flex', width: 'auto', marginTop: 10, marginBottom: 10,gap:8 }}>
                    <input
                        label="URL here"
                        style={{ width: '70%', height: '40px', border: "1px solid gray", borderRadius: 5, paddingLeft: 10 }}
                        id="fi"
                        ref={inputRef}
                        type="text"
                        fullWidth
                        onChange={e => setValue(e.target.value)}
                        className={classes.textField}
                        variant="outlined"
                    />
                    <Button
                        onClick={encurtarURL}
                        color={cor} variant="contained" style={{ width: '30%', height: 'auto' }}>{button}</Button>
                </div>
                <div>Shortening will help you to decrease the size of your URLs</div>
            </div>
            <h2 className="title" style={{ marginTop: 50 }}>How does the CUT work?</h2>
            <p className="desc">CUT is a URL shortener, it takes your URL and shortens it to make it easier to remember or send to anyone.</p>
            <h2 className="title">How to use?</h2>
            <p className="desc">Just enter your URL and click on the button, it will be shortened afterwards and you will be able to copy</p>
        </Container >
    );
}
