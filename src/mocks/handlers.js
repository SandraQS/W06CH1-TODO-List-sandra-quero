import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://todo-api-sqs.herokuapp.com/toDo/",
    async (req, res, ctx) => {
      const response = res(
        ctx.json([
          {
            name: "prueba",
            done: false,
            id: 1,
          },
          {
            name: "Hola",
            done: false,
            id: 2,
          },
        ])
      );
      return response;
    }
  ),
];
