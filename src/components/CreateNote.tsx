import React, { useState } from "react";
import { Box, InputBase, Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import { NoteObject } from "../models/note";

const Container = styled(Box)`
    & > * {
        margin-right: 20px !important;
        margin: 20px 0;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width: 300px;
        padding-right: 25px;
    }
    & > div > input[type="color"] {
        position: relative;
        bottom: -10px;
        width: 40px;
        height: 30px;
    }
    & > span {
        font-size: 10px;
        position: relative;
        right: 40px;
    }
`;

const defaultObj = {
    id: 0,
    title: '',
    text: '',
    color: '',
    date: (new Date().toLocaleString()).toString()
}

interface ICreateNoteProps {
    addNote: (note: NoteObject) => void
}


const CreateNote: React.FC = () => {

    const [note, setNote] = useState<NoteObject>(defaultObj);

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {


        setNote({ ...note, [e.target.name]: e.target.value });
        console.log(note);
    }

    return (
        <>
            <Container>
                <InputBase placeholder="Title"
                    onChange={(e) => onValueChange(e)}
                    name="title"
                />
                <Box component="span">50</Box>
                <InputBase placeholder="Details"
                    onChange={(e) => onValueChange(e)}
                    name="detail"
                />
                <Box component="span">50</Box>
                <InputBase
                    type="color"
                    name="color"
                    defaultValue={'#F5F5F5'}
                    onChange={(e) => onValueChange(e)}
                    placeholder="Choose color"
                />
                <Button
                    variant="outlined"
                >
                    Create
                </Button>
            </Container>
        </>
    )
}

export default CreateNote;