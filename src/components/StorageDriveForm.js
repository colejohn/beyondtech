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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

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
        //   width: 300,
      },
    },
    textArea: {
      minWidth: 500,
      width: 500,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    singleSpace: {
      margin: theme.spacing(1),
    },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

function StorageDriveForm({open, close}) {

     const style = useStyles();
    // const [value, setValue] = React.useState({
    //   name: "",
    //   category: "",
    //   description: "",
    //   company: "",
    // });
    // const [updateSeries] = useMutation(UPDATE_SERIES);
    // const { _id } = series;
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    // //   updateSeries({
    // //     variables: {
    // //       id: _id,
    // //       series: value,
    // //     },
    // //   })
    // //     .then((data) => {
    // //     //   refetch();
    // //     //   close();
    // //     })
    // //     .catch((e) => {
    // //       console.log(e);
    // //     });
    // };
  
    // const handleChange = (e) => {
    //   setValue({ ...value, [e.target.name]: e.target.value });
    // };
  
    // const onDialogOpen = () => {
    //   setValue({
    //     name: series.name,
    //     category: series.category,
    //     description: series.description,
    //     company: series.company ? series.company._id : "",
    //   });
   // };
  


    return (
        <Dialog
        // onEnter={onDialogOpen}
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
              {/* {`Update - ${series._id}`} */}
            </Typography>
            <Button
              autoFocus
              type="submit"
              color="inherit"
            //   onClick={handleSubmit}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
  
        <Container maxWidth="md">
          {/* <form onSubmit={handleSubmit} className={style.form}>
            <div>
              <TextField
                label="name"
                name="name"
                value={value.name}
                onChange={handleChange}
              />
  
              <FormControl className={style.formControl}>
                <InputLabel id="series_category">Category</InputLabel>
                <Select
                  name="category"
                  onChange={handleChange}
                  labelId="series_category"
                  value={value.category}
                >
                  {p_category.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
  
              <FormControl className={style.formControl}>
                <InputLabel id="series_company">Company</InputLabel>
                <Select
                  name="company"
                  labelId="series_company"
                  onChange={handleChange}
                  value={value.company}
                >
                  {p_company.map((c, index) => (
                    <MenuItem key={index} value={c._id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={style.textArea}>
              <TextField
                placeholder="Description"
                multiline
                fullWidth
                rows={5}
                label="Description"
                onChange={handleChange}
                name="description"
                value={value.description}
              />
            </div>
            <div className={style.singleSpace}>
              <Button type="submit" variant="outlined" color="primary">
                Update
              </Button>
              <Button onClick={close} variant="outlined">
                Cancel
              </Button>
            </div>
          </form> */}
        </Container>
      </Dialog>
    )
}

export default StorageDriveForm
