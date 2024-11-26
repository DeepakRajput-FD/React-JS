import React, { useEffect } from "react";

export default function PromiseComponent() {
  const API = "https://66f8f52d2a683ce97310850a.mockapi.io/UserData";

  let promise = new Promise((resolve, reject) => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data ");
        }
      })
      .then(data => {
        console.log("operation done : ", data);
        resolve(data);
      })
      .catch(error => {
        console.log("operation not done : ", error);
        reject(error);
      });
  });

  //   promise
  //     .then((result) => {
  //       console.log("Result :: ", result); // Handle the resolved data
  //     })
  //     .catch((error) => {
  //       console.log("Error :: ", error); // Handle the error
  //     });

  return <></>;
}
