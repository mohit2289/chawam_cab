import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Login from '../pages/Login';

export default function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       <div className="listing-button col-md-3 float-end" style={{ float: 'right' }}>
            <button type="submit" className="btn btn-order" onClick={handleClickOpen}><span><i className="feather-calendar me-2"></i></span>Book Now</button>
        </div>
      {/* <Button class="btn btn-primary submit-review w-100" variant="contained" onClick={handleClickOpen}>
        Login
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogContent>
            <Login />
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}