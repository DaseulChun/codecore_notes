const fs = require('fs');

function pReadFile(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (error, data) => {
      if(error) return reject(error);
      resolve(data);
    });
  });
}

pReadFile("./poem.txt", "utf8")
  .then(data => {console.log(data.toString());
  })
  .catch(error => console.log(error))
