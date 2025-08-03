const mobile  = {
    brand: 'Samsung',
    price: 34500,
    color: 'Skyblue',
    camera: '50MP+8MP+2MP',
    isNew: true  
}
//for of: array
//for in: object
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);
for (const key of keys){
    console.log(key, ': ', mobile[key]);
}