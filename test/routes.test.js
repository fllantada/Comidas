const { app } = require("../src/app");
const request = require("supertest");
var response = 0;

describe("Rutas correctamente agregadas al servidor", () => {
  test("Deben responder con status correcto", async () => {
    await process.nextTick(() => {});
    response = await request(app).get("/recipes").send();
    expect(response.status).toBe(200);
    response = await request(app).get("/recipes/1243").send();
    expect(response.status).toBe(200);
    response = await request(app).get("/diets").send();
    expect(response.status).toBe(200);
    response = await request(app).post("/recipes").send();
    expect(response.status).toBe(500);
    response = await request(app).post("/reciaapes").send();
    expect(response.status).toBe(404);
  });
});
