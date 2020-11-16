
import React from 'react'
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Navbar from './components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import StorageDrive from './components/StorageDrive'
import StorageDriveForm from './components/StorageDriveForm'
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from '@apollo/react-hooks'
import {GET_ALL_STORAGE_DRIVE, UPDATE_STORAGE_DRIVE} from './graphql/storage_drive'

const useStyles = makeStyles((theme) =>({
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));


function App() {

  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_ALL_STORAGE_DRIVE
  );
  const [updateStorageDrive] = useMutation(UPDATE_STORAGE_DRIVE);

  const classes = useStyles();
  const [open, setOpen ] = React.useState(false);
  const [isNew, setIsNew ] = React.useState(true);
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
  const { all_storage } = data;

    const newUpdateItem = all_storage.find((item) => id === item._id);
    setUpdateItem(newUpdateItem)
    setIsNew(false);
    setOpen(true);
  }

  const update_storage_drive =(id, data) =>{
    updateStorageDrive({
      variables:{
        id: id,
        storage: {
          name: data.name,
          capacity: data.capacity,
          seq_read: data.seq_read,
          seq_write: data.seq_write,
          power: data.power,
          interface_type: data.interface_type
        }
      }
    }).then((data)=>{
      console.log(data);
    }).catch((e)=>{
      console.log(e);
    })
  }

  if (error) return <p>Error :( </p>;
  if (networkStatus === 4) return "Refetching!";
  if (loading) {
      return <p>Loading...</p>;
    }

  return (
    <div className="App">
        <Navbar></Navbar>
        <Container fixed>
          <br />
          <br />
        <StorageDrive refresh={refetch} storage_drive={data} update={handleUpdate} />
      </Container>
      <StorageDriveForm update={update_storage_drive} refresh={refetch} storage_drive={updateitem} isNew={isNew} open={open} close={handleClose} />
      <Fab size="large" color="primary" aria-label="add" onClick={openAddItem} className={classes.fab}>
          <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
