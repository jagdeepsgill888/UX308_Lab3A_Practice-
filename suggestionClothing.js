// Take a variable with the *temperature* and another variable with the *relative humidity* and output a *clothing* *suggestion*.

function suggestionClothing(temperature, humidity) {
    let ClothingSuggestion = "shorts, t-shirt, birkenstock";
    if(temperature > 25) { 
    //return "shorts, t-shirt, birkenstock";
    } else if (temperature >10) {
    ClothingSuggestion = "long pants, running shoes, hoodie";
      //  return "long pants, running shoes, hoodie"
    } else {
    ClothingSuggestion = "toque, boots, coat";
        // return "toque, boots, coat";
    }
    return ClothingSuggestion;
}

export {suggestionClothing}