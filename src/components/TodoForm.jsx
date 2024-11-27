import React, { useState } from "react"
import { Button, Container, FormControl, TextField } from "@mui/material"


const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("")
    const hadlesubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return (
        <Container maxWidth="sm" style={{ marginTop: 55 }}>
            <form onSubmit={hadlesubmit}>
                <FormControl fullWidth={true} >
                    <TextField label="I will do this " required={true} value={text} onChange={(e) => setText(e.target.value)}  style={{color:"#3D5300"}}/>
                    <Button  variant="contained" type="submit" style={{
                        marginTop: 10,
                        backgroundColor:"#525B44",
                        
                    }}>
                        add
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default TodoForm
