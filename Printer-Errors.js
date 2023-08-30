console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
function printerError(s) {
    let errors = 0;
    s.split("").map((character) => errors = character > 'm' ? ++errors : errors);
    
    return `${errors}/${s.length}`;
}