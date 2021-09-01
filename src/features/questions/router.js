// @packages
import { Route, Switch, useRouteMatch } from "react-router-dom";

// @scripts
import { LobbyScreen } from "./screens";

export const QuestionsRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/lobby`} component={LobbyScreen} />
    </Switch>
  );
};

export default QuestionsRouter;
