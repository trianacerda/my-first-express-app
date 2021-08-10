const app = require("../app.js");
const supertest = require("supertest");
const request = supertest(app);

const data = require("../data.js");

it("gets the animals endpoint", async () => {
  const response = await request.get("/animals");

  expect(response.status).toBe(200);
  expect(response.body).toEqual(data);
});

it("gets the animal show endpoint", async () => {
  const response = await request.get("/animals/1");

  expect(response.status).toBe(200);
  expect(response.body).toEqual(data[0]);
});
