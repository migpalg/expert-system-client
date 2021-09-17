// @packages
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";

// @scripts
import { AnswersCard, NavigationControls } from "../../components";
import { answersTypes } from "../../components/answers-card/answers-card";
import { questionsService } from "../../services";
import { usePager } from "../../hooks/use-pager/use-pager";
import { useStyles } from "./questions.styles";

/**
 * This screen displays a question
 */
export const QuestionsScreen = () => {
  const classes = useStyles();
  const [isFetching, setIsFetching] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionsCount, setQuestionsCount] = useState(0);
  const { currentPage, previousPage, nextPage } = usePager({
    max: questionsCount,
  });

  useEffect(() => {
    let mounted = true;

    questionsService.getAll().then((data) => {
      if (mounted) {
        setQuestionsCount(data.count);
        setQuestions(data.questions);
        setIsFetching(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

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
      {isFetching ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          paddingY={5}
        >
          <CircularProgress />
          <Box paddingTop={2}>
            <Typography variant="caption">Loading</Typography>
          </Box>
        </Box>
      ) : (
        <Box
          paddingTop={5}
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <Grid direction="column" spacing={2} container>
            <Grid item>
              <Typography variant="h3">
                {currentPage}/{questionsCount}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{questions[currentPage - 1]?.title}</Typography>
            </Grid>
          </Grid>
          <Box flex={1} position="relative">
            <Box position="absolute" top={15} left={0} bottom={15} right={0}>
              <AnswersCard
                type={answersTypes.unique}
                options={questions[currentPage - 1]?.options}
              />
            </Box>
          </Box>
          <Box marginBottom={2}>
            <NavigationControls
              onBackClick={handleQuestionBack}
              onForwardClick={handleQuestionForward}
              backDisabled
              forwardDisabled
              fullWidth
            />
          </Box>
        </Box>
      )}
    </Container>
  );
};
