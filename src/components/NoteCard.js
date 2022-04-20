import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, green, pink, yellow } from '@mui/material/colors';

const NoteCard = ({ note, onDelete }) => {
    return (
        <Card>
            <CardHeader

                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: () => {
                                if (note.category === 'work') {
                                    return yellow[700]
                                }
                                if (note.category === 'money') {
                                    return green[500]
                                }
                                if (note.category === 'todos') {
                                    return pink[500]
                                }
                                return blue[500]
                            }
                        }}
                    >
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => onDelete(note.id)}>
                        <DeleteIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            >

            </CardHeader>
            <CardContent>
                <Typography
                    color='textSecondary'
                    variant='body2'>
                    {note.details}
                </Typography>

            </CardContent>

        </Card>
    );
}

export default NoteCard;