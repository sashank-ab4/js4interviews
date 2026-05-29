const obj = {
  id: 11,
  firstName: "Sashank",
  lastName: "Akkabattula",
  gender: "Male",
  age: 25,
  details: {
    height: 185,
    weight: 80,
    complexion: "brown",
  },
  address: {
    town: "Koyyalagudem",
    city: "Rajahmundry",
    district: "Eluru",
    state: "Andhra Pradesh",
    country: "India",
    pinCode: 534312,
  },
};
//shallowCopy vs deepCopy

//shallowCopy

/* const shallowCopyOfObj = Object.assign({}, obj);
shallowCopyOfObj.address.district = "West Godavari";
console.log(shallowCopyOfObj.address.district);
console.log(obj.address.district); */

//deepCopy

const deepCopyOfObj = structuredClone(obj);
deepCopyOfObj.address.town = "JangareddyGudem"; //cloned object shows temp change: Jangareddygudem
console.log(deepCopyOfObj.address.town);
console.log(obj.address.town); //but original objs keys remained same!
