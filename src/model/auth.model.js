//model berkaitan dengan database
const db = require('../helper/connection');
const { v4: uuidv4 } = require('uuid');

//deklarasi bcrypt
const bcrypt = require('bcrypt');

const authModel = {
  //data auth dll dari body
  login: ({ email, password }) => {
    //cek email dan password ada?
    console.log(email, password);
    return new Promise((resolve, reject) => {
      //tanpa bcrypt dan jwt
      // db.query(
      //   `SELECT * FROM user_getpay WHERE email='${email}' AND password='${password}'`,
      //   (err, result) => {
      //     if (err) {
      //       return reject({
      //         message: err.message,
      //       });
      //     } else {
      //       if (result.rows.length == 0) {
      //         return reject('email/password salah');
      //       } else {
      //         return resolve(result.rows[0]);
      //       }
      //       // return resolve(result.rows);
      //     }
      //   }
      // );
      db.query(
        `SELECT * FROM user_getpay WHERE email='${email}'`,
        (err, result) => {
          //username = unique || email =  unique
          if (err) return reject(err.message);
          if (result.rows.length == 0) return reject('email/password salah'); //ketika email salah

          bcrypt.compare(
            password,
            result.rows[0].password,
            function (err, hashingResult) {
              //parameter dari user itu ada yang tidak valid (kosong)
              //dari database
              //bycript ada error yang kita tidak tahu
              if (err) return reject('email/password salah'); //ketika kesalahan hashing(bycrpt)
              if (!hashingResult) return reject('email/password salah'); //ketika password salah
              return resolve(result.rows[0]);
            }
          );
        }
      );
    });
  },

  register: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO user_getpay (user_id, email, password)  VALUES ('${uuidv4()}','${email}','${password}')`,
        (err, result) => {
          if (err) {
            return reject({
              message: err.message,
            });
          } else {
            return resolve(result.rows[0]);
          }
        }
      );
    });
  },
};

module.exports = authModel;
