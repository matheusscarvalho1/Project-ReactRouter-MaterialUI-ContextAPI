import {
    Snackbar,
} from '@mui/material';

import MuiAlert from '@mui/material/Alert';


const Toasty = ({ open, message, onClose, severity })  => {
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" severity={severity}>{message}</MuiAlert>
        </Snackbar>
    </>
  );
}
export default Toasty