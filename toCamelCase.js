console.log(toCamelCase("the_stealth_warrior"));

function toCamelCase(str){
    let output;

    for (let i = 0; i < str.length; i++)
        output += (str[i] == '_' || str[i] == '-') ? str[++i].toUpperCase() : str[i];

    return output;
}