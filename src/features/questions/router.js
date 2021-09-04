// @packages
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

// @scripts
import { LobbyScreen, QuestionsScreen } from "./screens";

export const QuestionsRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/outlet`} component={QuestionsScreen} />
      <Route path={`${url}/lobby`} component={LobbyScreen} />
      <Redirect to={`${url}/lobby`} />
    </Switch>
  );
};

export default QuestionsRouter;
