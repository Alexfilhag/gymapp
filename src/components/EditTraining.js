import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditTraining(props) {

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({

        customer: props.params.value,
        date: '',
        duration: '',
        activity: ''
       
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setTraining ({
            customer: props.params.data.customer,
            date: props.params.data.date,
            duration: props.params.data.duration,
            activity: props.params.data.activity
        })
      setOpen(false);
    };

    const inputChanged = (event) => {
        setCustomer({...training, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        props.updateTraining(props.params, training);
    handleClose();
    }
  
  
    return(
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Edit training
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit training</DialogTitle>
          <DialogContent>
           
          <TextField
            name="activity"
            value={training.activity}
            onChange={inputChanged}
            margin="dense"
            label="Activity"
            fullWidth
          />

           <TextField
            name="date"
            value={training.date}
            onChange={inputChanged}
            margin="dense"
            label="Date"
            fullWidth
          />

          <TextField
            name="duration"
            value={training.duration}
            onChange={inputChanged}
            margin="dense"
            label="Duration"
            fullWidth
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    )
}

export default EditTraining;