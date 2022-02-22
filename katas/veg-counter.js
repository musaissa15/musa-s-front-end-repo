/*
  The function countVeg should take an array of vegetables and a string of the type of vegetable and return the total quantity of that type of vegetable in the array.
  Vegetable types can be root, leaf, legume, bulb or brassica.
  e.g.
  vegCounter([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

function countVeg(veg, vegType) {
  if(veg.length === 0) {
    return 0;
  }
  let total = 0;
  for(let i = 0; i < veg.length; i++) {
    if(veg[i].type === vegType) {
      total += veg[i].quantity;
    }
  }
  return total;
  //const quant = veg[0].quantity;

 // return quant;

}

module.exports = countVeg;
