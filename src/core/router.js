// @packages
import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// @lazyroutes
const QuestionsRouter = lazy(() => import('../features/questions/router'));

export const RootRouter = () => {
    return (
        <Switch>
            <Route path="/questions" component={QuestionsRouter} />
        </Switch>
    );
}