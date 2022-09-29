import fs from 'fs';

let urls: any = {};

fs.readFile('./src/data/urls.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    urls = JSON.parse(data);
  }
});

export const getURLId = (hex: string) => {
  return urls[hex];
};
