import { Suspense } from "react";
import { RootRouter } from "../router"

export const App = () => {
    return (
        <Suspense fallback={<div>...</div>}>
            <RootRouter />
        </Suspense>
    );
}