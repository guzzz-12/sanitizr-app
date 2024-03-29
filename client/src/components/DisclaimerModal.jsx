import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DisclaimerModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableBackdropClick={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">¡Precaución!</DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          <span style={{display: "block", marginBottom: "1rem"}}>El Hipoclorito de Sodio, utilizado comúnmente como blanqueador para ropa (mal llamado &laquo;cloro&raquo;), es una sustancia tóxica y corrosiva, su uso y manejo inadecuados pueden producir resultados indeseados.</span>
          <span style={{display: "block", marginBottom: "1rem"}}>El Hipoclorito de Sodio, aún en concentraciones bajas, puede producir irritación de la piel, especialmente en personas con pieles sensibles. Aunque se ha demostrado su eficacia en la eliminación de diversos organismos patógenos al emplearse como desinfectante alternativo en el lavado de las manos en concentraciones diluidas, su uso excesivo o continuo podría generar resultados indeseados. Es por ello que se debe considerar como un último recurso.</span>
          <span style={{display: "block", marginBottom: "1rem"}}>Los íconos de ayuda presentes en la aplicación muestran información más detallada, ante las dudas haga click en ellos para obtener más información acerca del item correspondiente.</span>
          <span>Al usar esta aplicación acepta que <strong>usted y sólo usted</strong> acepta total responsabilidad en el uso de la misma así como cualquier daño a su persona o a terceros que pudieran derivar del uso indebido de la información que se presenta en la misma.</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          variant="contained"
          color="secondary"
          onClick={handleClose}
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DisclaimerModal;