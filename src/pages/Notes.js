import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";

const Notes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, []);

    const onDelete = (id) => {
        fetch(`http://localhost:8000/notes/${id}`, { method: 'DELETE' })
            .then(() => setNotes(notes.filter(note => note.id !== id)))
    };

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map(note => (
                    <div key={note.id}> <NoteCard note={note} onDelete={onDelete} /> </div>
                ))}
            </Masonry>
        </Container>
    );
}

export default Notes;