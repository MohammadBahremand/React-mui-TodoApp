import { Card, CardContent, Container, Typography, IconButton, Checkbox, FormControlLabel } from "@mui/material";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { useState } from "react";
export const TodoCarts = ({ title, checkTodo, id, deleteTodo, isCompleted }) => {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id)

    return (
        <Container >
            <Card component="h2" style={{ backgroundColor: isCompleted ? "#5A6C57" : "#D3F1DF", marginTop: 45, }}>
                <CardContent style={{ alignItems: "center" }}>
                    <Typography variant="h5" component="h6" />
                    <IconButton style={{ float: "right" }} onClick={delTodo}>
                        <AutoDeleteIcon style={{ color: "#2A3335", marginTop: 10 }} />
                    </IconButton>
                    {title}
                    <IconButton onClick={markComplete}>
                        {/* <PlaylistAddCheckCircleIcon style={{ color: "green" }} /> */}
                        <FormControlLabel control={<Checkbox style={{ color: "#1F4529" }} />} label="completed" />
                    </IconButton>
                </CardContent>
            </Card>
        </Container>
    )


}