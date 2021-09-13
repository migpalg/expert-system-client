// @packages
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// @scripts
import { useStyles } from "./questions.styles";

/**
 * This screen displays a question
 */
export const QuestionsScreen = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth="md">
      <Box
        paddingTop={5}
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Grid direction="column" spacing={2} container>
          <Grid item>
            <Typography variant="h3">1/20</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus reiciendis reprehenderit, ad dolorem delectus?
            </Typography>
          </Grid>
        </Grid>
        <Box flex={1} position="relative">
          <Box position="absolute" top={15} left={0} bottom={15} right={0}>
            <Card style={{ maxHeight: "100%", overflowY: "auto" }}>
              <CardContent>
                <Box marginBottom={1}>
                  <Typography variant="caption">Select an answer</Typography>
                </Box>
                <Grid spacing={2} container>
                  {Array.from(new Array(2)).map((_, index) => (
                    <Grid key={`ans-${index}`} xs={12} md={6} item>
                      <Button variant="outlined" fullWidth>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box marginBottom={2}>
          <ButtonGroup fullWidth>
            <Button disabled>
              <ArrowBackIos />
            </Button>
            <Button disabled>
              <ArrowForwardIos />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
};
