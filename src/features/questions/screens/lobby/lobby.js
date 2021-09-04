import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const LobbyScreen = () => {
  const history = useHistory();

  const handleGetStartedClick = () => history.push("/questions/outlet");

  return (
    <Container maxWidth="sm">
      <Box marginTop={5} />
      <Typography variant="h1">Hi!</Typography>
      <Typography variant="h5">
        Welcome to the developer career selection expert system
      </Typography>
      <Box marginTop={5}>
        <Button
          onClick={handleGetStartedClick}
          variant="contained"
          color="primary"
          size="large"
        >
          Get started
        </Button>
      </Box>
    </Container>
  );
};
