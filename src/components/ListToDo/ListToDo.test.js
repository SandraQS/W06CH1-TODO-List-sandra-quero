import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";
import ListToDo from "./ListToDo";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a ListToDo component", () => {
  describe("When it reciver a array", () => {
    test("Then it should show list a to do list", async () => {
      const store = configureStore();

      render(
        <Provider store={store}>
          <ListToDo />
        </Provider>
      );

      const taskText1 = await screen.findByText("prueba");
      const taskText2 = await screen.findByText("Hola");

      await waitFor(() => {
        expect(taskText1).toBeInTheDocument();
        expect(taskText2).toBeInTheDocument();
      });
    });
  });
});
