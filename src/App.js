import {useState} from "react";
import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography
} from "@mui/material";


function App() {
  const [openModal, setOpenModal] = useState(false);
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              My Material UI App
            </Typography>
          </Toolbar>
        </AppBar>

        <Container style={{textAlign: 'center', marginTop: '50px'}}>
          <Typography variant="h4" gutterBottom>
            Добро пожаловать в наше приложение!
          </Typography>

          <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
            открыть диалоговое окно
          </Button>

          <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle>Использовать Material UI?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                отмена
              </Button>
              <Button onClick={handleCloseModal} color="primary" autoFocus>
                согласен
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </div>
  );
}

export default App;
