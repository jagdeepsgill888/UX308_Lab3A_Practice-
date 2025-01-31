import { suggestionClothing } from '../suggestionClothing.js'
//Take a variable with the temperature and another variable with the relative humidity and output a clothing suggestion.
describe("A suite", function() {
  it("suggest clothing for a hot and rainy day", function() {
    let sClothing = suggestionClothing(26, 80);
    expect(sClothing).toBe("shorts, t-shirt, birkenstock");
  });
  it("suggest clothing for a cold and snowy day", function() {
      let sClothing = suggestionClothing(-3, 100);
      expect(sClothing).toBe("toque, boots, coat");
    });
    it("suggest clothing for lovely spring day", function() {
      let sClothing = suggestionClothing(14, 35);
      expect(sClothing).toBe("long pants, running shoes, hoodie");
    });
  });
  
