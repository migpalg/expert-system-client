// @packages
import { render } from "@testing-library/react";

// @script
import { LobbyScreen } from "./lobby";

describe('LobbyScreen unit testing', () => {
    it('should render correctly', () => {
        render(
            <LobbyScreen />
        );
    });
});
