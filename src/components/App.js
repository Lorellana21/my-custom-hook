import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useToggle from "../components/hooks/useToggle";

const App = () => {


  const [isOn, isOnActions] = useToggle(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            Switch
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={3}>

          {isOn
            ? <h1 style={{ color: 'lime' }}>ON</h1>
            : <h1 style={{ color: 'silver' }}>OFF</h1>}
          <Button
            color="primary"
            variant="contained"
            onClick={isOnActions.toggle}
          >
            Toggle
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default App;
