function getRes(location) {
  return new Promise((resolve, reject) => {
    console.log("making request");
    if (location === "google") {
      resolve("google says hi ");
    } else {
      reject("only google");
    }
  });
}

function proccesedRes(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");

    resolve("extra information == " + response);
  });
}

// getRes("googsdfle")
//   .then((res) => {
//     console.log("respone recevied ");
//     return proccesedRes(res);
//   })
//   .then((proccesedRes) => {
//     console.log(proccesedRes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    let response = await getRes("google");
    console.log("response recevied");
    let processed = await proccesedRes(response);
    console.log(processed);
  } catch (err) {
    console.log(err);
  }
}

doWork();
