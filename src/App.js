
import React from 'react'
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Navbar from './components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import StorageDrive from './components/StorageDrive'
import StorageDriveForm from './components/StorageDriveForm'
const useStyles = makeStyles((theme) =>({
  fab: {
    margin: theme.spacing(1),

    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen ] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleUpdate = (id) => {
    setOpen(true);

  }


  return (
    <div className="App">
        <Navbar></Navbar>
        <Container fixed>
          <br />
          <br />
        <StorageDrive update={handleUpdate} />
      </Container>
      <StorageDriveForm open={open} close={handleClose} />
      <Fab size="large" color="primary" aria-label="add" onClick={handleOpen} className={classes.fab}>
          <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
