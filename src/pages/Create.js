import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('work');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title === '') {
            setTitleError(true);
        }
        if (details === '') {
            setDetailsError(true);
        }

        if (title && details) {
            fetch(`http://localhost:8000/notes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, details, category })
            })
                .then(() => navigate('/'))
        }

    };

    return (
        <Container>
            <Typography
                variant='h5'
                component='p'
                color='textSecondary'
                sx={{
                    marginTop: 2,
                    marginBottom: 2
                }}
                gutterBottom
            >
                Create A New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>

                <TextField
                    sx={{ marginBottom: 2 }}
                    variant='outlined'
                    label='Note Title'
                    fullWidth
                    required
                    color='secondary'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={titleError}
                />
                <TextField
                    variant='outlined'
                    label='Details'
                    required
                    fullWidth
                    multiline
                    rows={4}
                    color='secondary'
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    error={detailsError}
                />
                <FormControl
                    sx={{
                        marginTop: 2,
                        marginBottom: 2,
                        display: 'block'
                    }}
                    color='secondary'
                >
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="remainder" control={<Radio color='secondary' />} label="Remainder" />
                        <FormControlLabel value="todos" control={<Radio color='secondary' />} label="Todos" />
                        <FormControlLabel value="money" control={<Radio color='secondary' />} label="Money" />
                        <FormControlLabel value="work" control={<Radio color='secondary' />} label="Work" />
                    </RadioGroup>
                </FormControl>
                <Button
                    type='submit'
                    variant='contained'
                    color="warning"
                    endIcon={<SendIcon />}
                >
                    Add New Note
                </Button>
            </form>
        </Container>
    );
}

export default Create;