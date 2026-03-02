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
console.log(obj.details.height);

const {
  id,
  age,
  address: { pinCode: zipcode },
} = obj;
console.log(zipcode);
