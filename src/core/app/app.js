import { LinearProgress } from "@material-ui/core";
import { Suspense } from "react";
import { RootRouter } from "../router";

export const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <RootRouter />
    </Suspense>
  );
};
