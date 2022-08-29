import { TextField, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import axios from 'axios';

import post from "../api/post";

function UserInput({ readDataFromPost, loading }) {

    const url = "http://localhost:5000/predict";
    const [inputText, setInputText] = useState("");
    const [nerOutput, setNerOutput] = useState({ result: [] });
    const [buttonClicked, setButtonClicked] = useState(true);

    const getPostData = async (data) => {
        const ner = await post(data);
        setNerOutput(ner);
    }

    const updateValues = async () => {
        await getPostData(inputText);
        readDataFromPost(nerOutput);
        console.log(nerOutput);
        loading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loading(true);
        updateValues();
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField variant="standard" value={inputText} multiline fullWidth onChange={(e) => setInputText(e.target.value)}></TextField>
            <Button type="submit">
                Submit query
            </Button>
        </form>
    )
}

export default UserInput;