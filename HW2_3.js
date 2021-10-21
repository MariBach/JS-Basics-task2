//3. function to convert a string into abbreviation form

function abbrev(str3) {
    name_ab = str3.charAt(0).toUpperCase();
    ind = str3.indexOf(" ");
    surname_ind = str3.substring(ind + 1);
    surname_ab = surname_ind.charAt(0).toUpperCase();    
    console.log(name_ab + "." + surname_ab + ".");
}
let str = "maryna bachynska";
abbrev(str);
