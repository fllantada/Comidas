const { conn } = require("../src/database/database");

const { test_Db, close } = require("../src/controller/helpers");

describe("Conexion con la base de datos", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  test("Chequeo si estoy conectado a la base de datos", async () => {
    const conection = await test_Db(conn);
    expect(conection).toBe("conected");
  });
});

describe("En el modelo Recipes", () => {
  const { Recipe, Diet } = conn.models;
  it("deberia fallar si summary es null ", async () => {
    expect.assertions(1);

    try {
      const recipe1 = await Recipe.create({
        name: "ensalada",
        //summary: "se hace con sal",
      });
    } catch (error) {
      // console.error({ msg: error.message });
      expect(error.message).toBeDefined();
    }
  });
  it("deberia crear una recipe correctamente si le paso name, sumary", async () => {
    var recipe1;
    try {
      recipe1 = await Recipe.create({
        name: "ensalada",
        summary: "resumen_ensalada",
      });
    } catch (error) {
      console.error({ msg: error });
    }
    //console.log(recipe1.toJSON());
    expect(recipe1.toJSON()).toHaveProperty("name", "ensalada");
    expect(recipe1.toJSON()).toHaveProperty("summary", "resumen_ensalada");
    expect(recipe1.toJSON()).toHaveProperty("createdInDb", true);
  });
  it("deberia crear una diet correctamente si le paso name, sumary", async () => {
    var diet1;
    try {
      diet1 = await Diet.create({
        name: "dieta",
      });
    } catch (error) {
      console.error({ msg: error });
    }
    expect(diet1.toJSON()).toHaveProperty("name", "dieta");
  });
});

afterAll(() => close(conn));
