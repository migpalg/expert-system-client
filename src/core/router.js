// @packages
import { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// @lazyroutes
const QuestionsRouter = lazy(() => import("../features/questions/router"));

export const RootRouter = () => {
  return (
    <Switch>
      <Route path="/questions" component={QuestionsRouter} />
      <Redirect to="/questions" />
    </Switch>
  );
};
