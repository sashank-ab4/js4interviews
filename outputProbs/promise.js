//Promise Syntax
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task Successful");
  } else {
    reject("Task Failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise finished (either resolved or failed!)"));

//Promise Example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = !false;
      if (success) {
        resolve("Data Fetched Successfully!");
      } else {
        reject("Failed to fetch the Data!");
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));
