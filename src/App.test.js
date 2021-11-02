import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store";
import ReactTestRenderer from "react-test-renderer";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const store = configureStore();

      const app = ReactTestRenderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(app.toJSON()).toMatchSnapshot();
    });
  });
});
