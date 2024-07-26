import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import GenericLoadingButton from '../form-elements/genericLoadingButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GenericDialog = (props) => {
  const { children, title, onAgreeHandlerClick, onDisagreeHandlerCick, open } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onDisagreeHandlerCick}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <GenericLoadingButton
          onClick={onAgreeHandlerClick}
          title={'Agree'}
          color={'success'}
        ></GenericLoadingButton>
        <GenericLoadingButton
          onClick={onDisagreeHandlerCick}
          title={'Disagree'}
          color={'error'}
        ></GenericLoadingButton>
      </DialogActions>
    </Dialog>
  );
};
export default GenericDialog;
