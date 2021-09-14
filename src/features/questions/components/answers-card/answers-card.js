// @packages
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import propTypes from "prop-types";

// @scripts
import { useStyles } from "./answers-card.styles";

export const answersTypes = {
  unique: "unique",
  multiple: "multiple",
};

export const AnswersCard = ({ type, options }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <Box marginBottom={1}>
          <Typography variant="caption">Select an answer</Typography>
        </Box>
        <Grid spacing={2} container>
          {options.map((text, index) => (
            <Grid key={`ans-${index}`} xs={12} md={6} item>
              <Button variant="outlined" fullWidth>
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

AnswersCard.propTypes = {
  type: propTypes.oneOf(Object.values(answersTypes)),
  options: propTypes.arrayOf(propTypes.string).isRequired,
};

AnswersCard.defaultProps = {
  type: answersTypes.unique,
  options: [],
};
