// promise with setTimeout 

function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Operation completed successfully!');
      }, 2000);
    });
  }
  
//EX
  asyncOperation()
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error.message); 
    });
  