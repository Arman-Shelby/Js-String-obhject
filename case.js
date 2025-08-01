const school = 'Raj uk Utta aara Mod eeel Sch oo l';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

//comparing strings 
//-------->sob gula lowercase kore fele
if (subject.toLowerCase()===book.toLowerCase()){
    console.log('I am reading book , eibar exame fatai dibo ');
}
else{
    console.log('Hudai pata ultacchi');
}

const drink = 'Water';
const loquid = '       Wat   eR';
// trim ---> samne piche faka jayga trimming kore 
if(drink.trim().toLowerCase ===loquid.trim().toLowerCase){
    console.log('Panir opor naaam Life');
}
else{
    console.log('Somudrer lobon pani khaon jay na ');
}