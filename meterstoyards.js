//Take a variable with distance in metres as input and output the same distance converted to yards.

function convertMetersToYards(meters){
    let yards = meters * 1.09361;
    return yards;
}

//console.log(`3 meters is ${convertMetersToYards(3)} yards`);

export { convertMetersToYards }