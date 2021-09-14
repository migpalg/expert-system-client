// @packages
import { Button, ButtonGroup } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import propTypes from "prop-types";

export const NavigationControls = ({
  backDisabled,
  forwardDisabled,
  fullWidth,
  onBackClick,
  onForwardClick,
}) => {
  return (
    <ButtonGroup fullWidth={fullWidth}>
      <Button onClick={onBackClick} disabled={backDisabled}>
        <ArrowBackIos />
      </Button>
      <Button onClick={onForwardClick} disabled={forwardDisabled}>
        <ArrowForwardIos />
      </Button>
    </ButtonGroup>
  );
};

NavigationControls.propTypes = {
  backDisabled: propTypes.bool,
  forwardDisabled: propTypes.bool,
  fullWidth: propTypes.bool,
  onBackClick: propTypes.func,
  onForwardClick: propTypes.func,
};
