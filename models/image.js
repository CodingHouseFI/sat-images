/////////////////
// IMAGE MODEL //
/////////////////

const squel = require('squel').useFlavour('mysql');

const connection = require('../config/db');

// INITIALIZE TABLE

connection.query(`create table if not exists images (
    id varchar(50),
    url varchar(100),
    title varchar(100),
    description varchar(500),
    createdAt timestamp
  )`, err => {
    if(err) {
      console.log('TABLE CREATE ERROR:', err);
    }
  });


exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('images').toString();

    connection.query(sql, (err, images) => {
      if(err) {
        reject(err);
      } else {
        resolve(images);
      }
    });
  });
};

////////////
// Image.getAll()
//   .then(...)
