import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    form: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
    textArea: {
      minWidth: 500,
      width: 500,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 600,
    },
    singleSpace: {
      margin: theme.spacing(1),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    }
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

function StorageDriveForm({storage_drive, open, close, isNew }) {

     const style = useStyles();
    const [value, setValue] = React.useState({
      name: "",
      capacity: "",
      seq_read: "",
      seq_write: "",
      pwr: "",
      interface_type: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
    console.log(value);
    };
  
    const handleChange = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };
  
    const onDialogOpen = () => {
      setValue({
        name: isNew? "" : storage_drive.name,
        capacity: isNew? "" : storage_drive.capacity,
        seq_read: isNew? "": storage_drive.seq_read,
        seq_write: isNew? "" : storage_drive.seq_write,
        pwr: isNew? "" : storage_drive.pwr,
        interface_type: isNew? "" : storage_drive.interface_type
      });
    console.log(storage_drive);
   };
    return (
        <Dialog
        onEnter={onDialogOpen}
        open={open}
        onClose={close}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        fullScreen
      >
        <AppBar className={style.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={style.title}>
              { isNew ? "Add New Item" : `Update - ${storage_drive._id}`}
            </Typography>
            <Button
              autoFocus
              type="submit"
              color="inherit"
              onClick={handleSubmit}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
  
        <Container maxWidth="md">
            <form className={style.form}>
                <div>
                    <TextField
                    label="Name"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    />
                </div>
                <div>
                    <TextField
                        label="Storage Capacity"
                        name="capacity"
                        value={value.capacity}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        />
                </div>
                <div>
                    <TextField
                        label="Max Read MB/s"
                        name="seq_read"
                        value={value.seq_read}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        />
                </div>
                <div>
                    <TextField
                            label="Max Write MB/s"
                            name="seq_write"
                            value={value.seq_write}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            />
                </div>
                <div>
                    <TextField
                            label="Power Consumption"
                            name="pwr"
                            value={value.pwr}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            />
                </div>
                <div>
                    <TextField
                            label="Interface Type"
                            name="interface_type"
                            value={value.interface_type}
                            onChange={handleChange}
                            fullWidth
                            size="small"
                            />
                </div>
                <div className={style.root}>
                    <Button type="submit" onClick={handleSubmit} variant="outlined" color="primary">
                     {isNew ? "Add" : "Update"}
                    </Button>
                    <Button onClick={close} variant="outlined">
                    Cancel
                    </Button>
                </div>
            </form>
        </Container>
      </Dialog>
    )
}

export default StorageDriveForm
