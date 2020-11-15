
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


const storage_drive = [
  { _id: 1, name: "Samsung 970 Evo Plus NVMe PCIe", capacity: "1TB", seq_read: "3,500MB/s", seq_write: "3,200MB/s", pwr:"9 W", interface_type: "PCIe Gen 3.0 x 4, NVMe 1.3"},
  { _id: 2, name: "870 QVO ", capacity: "2TB", seq_read: "560 MB/s", seq_write: "530 MB/s", pwr:"50 mW", interface_type: "SATA III"}

]
function App() {

  const classes = useStyles();
  const [open, setOpen ] = React.useState(false);
  const [isNew, setIsNew ] = React.useState(true);
  const [storage, setStorage ] = React.useState(storage_drive);
  const [updateitem, setUpdateItem ] = React.useState({});

  const openAddItem = () => {
    setIsNew(true);
    setOpen(true);
  }

  const handleClose = () => {
    setIsNew(true);
    setOpen(false);
  }

  const handleUpdate = (id) => {

    const newUpdateItem = storage.find((item) => id === item._id);
    setUpdateItem(newUpdateItem)
    setIsNew(false);
    setOpen(true);
  }
  return (
    <div className="App">
        <Navbar></Navbar>
        <Container fixed>
          <br />
          <br />
        <StorageDrive storage_drive={storage} update={handleUpdate} />
      </Container>
      <StorageDriveForm storage_drive={updateitem} isNew={isNew} open={open} close={handleClose} />
      <Fab size="large" color="primary" aria-label="add" onClick={openAddItem} className={classes.fab}>
          <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
