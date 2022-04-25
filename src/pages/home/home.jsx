import React, { useState,useEffect, useRef } from 'react';
import './home.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {api} from "../../api"
import Copy from "../../assets/copy.svg"

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
    function copyToClipboard() {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", response);
      }
    const classes = useStyles();
    const [value, setValue] = useState("")
    const [response,setResponse] = useState("")
    const [open,setOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
  
    const encurtarURL = async () => {
        try {
            setIsLoading(true)
            const response = await api.post(`/encurtamentos`,{"url":value});
            setResponse(response.data.urlEncurtada)
            setOpen(true)
        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <Container className="Body" maxWidth="md">
            <h2 style={{ fontSize: 30, display: 'flex', justifyContent: 'center' }} className="Title">CUT</h2>
            <div className="InputUrl">
                <div>Paste your URL here</div>
                <div style={{ display: 'flex', width: 'auto', marginTop: 10, marginBottom: 10,gap:8 }}>
                    <input
                        label="URL here"
                        style={{ width: '70%', height: '40px', border: "1px solid gray", borderRadius: 5, paddingLeft: 10 }}
                        type="text"
                        fullWidth
                        onChange={e => setValue(e.target.value)}
                        className={classes.textField}
                        variant="outlined"
                        disabled={isLoading}
                    />
                    <Button disabled={isLoading}
                        onClick={encurtarURL} variant="contained" style={{ width: '30%', height: 'auto' }}>Click to cut!</Button>
                </div>
                
 {response && <div className="divResponse">
     <div title="Click to copy !"  onClick={() => navigator.clipboard.writeText(response)} className="divDashed">
     <img className="imgCopy" src={Copy}/>
      <span className="response">{response}</span>
      <img  className="imgCopy"src={Copy}/>
      </div>
  </div>}
           
                <div>Shortening will help you to decrease the size of your URLs</div>
            </div>
            <h2 className="title" style={{ marginTop: 50 }}>How does the CUT work?</h2>
            <p className="desc">CUT is a URL shortener, it takes your URL and shortens it to make it easier to remember or send to anyone.</p>
            <h2 className="title">How to use?</h2>
            <p className="desc">Just enter your URL and click on the button, it will be shortened afterwards and you will be able to copy</p>
        </Container >
    );
}
