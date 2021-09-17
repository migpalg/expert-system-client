// @packages
import { Box, Container, Grid, Typography } from "@material-ui/core";

// @scripts
import { AnswersCard, NavigationControls } from "../../components";
import { answersTypes } from "../../components/answers-card/answers-card";
import { usePager } from "../../hooks/use-pager/use-pager";
import { useStyles } from "./questions.styles";

/**
 * This screen displays a question
 */
export const QuestionsScreen = () => {
  const classes = useStyles();
  const { currentPage, previousPage, nextPage } = usePager({ max: 20 });

  /**
   * Handles behaviour when users click back button
   */
  const handleQuestionBack = () => {
    previousPage();
  };

  /**
   * Handles behaviour when users click forward button
   */
  const handleQuestionForward = () => {
    nextPage();
  };

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Box
        paddingTop={5}
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Grid direction="column" spacing={2} container>
          <Grid item>
            <Typography variant="h3">{currentPage}/20</Typography>
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
            <AnswersCard type={answersTypes.unique} options={["A", "B"]} />
          </Box>
        </Box>
        <Box marginBottom={2}>
          <NavigationControls
            backDisabled={false}
            forwardDisabled={false}
            fullWidth
            onBackClick={handleQuestionBack}
            onForwardClick={handleQuestionForward}
          />
        </Box>
      </Box>
    </Container>
  );
};
