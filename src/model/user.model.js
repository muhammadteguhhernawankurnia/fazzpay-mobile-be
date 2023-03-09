//model berkaitan dengan database
const db = require('../helper/connection');
const { v4: uuidv4 } = require('uuid');

const userModel = {
  get: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * from user_getpay`, (err, result) => {
        if (err) {
          return reject({
            message: err.message,
          });
        } else {
          return resolve({ message: 'success', data: result.rows });
        }
      });
    });
  },

  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * from user_getpay WHERE user_id='${id}'`,
        (err, result) => {
          if (err) {
            return reject({
              message: err.message,
            });
          } else {
            return resolve({ data: result.rows[0] });
          }
        }
      );
    });
  },

  //data user id dll dari body
  add: ({ first_name, last_name, email, password, pin, balance }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO user_getpay (user_id, first_name, last_name, email, password, pin, balance) VALUES ('${uuidv4()}','${first_name}','${last_name}','${email}','${password}','${pin}','${balance}')`,
        (err, result) => {
          if (err) {
            return reject({
              message: err.message,
            });
          } else {
            return resolve({
              first_name,
              last_name,
              email,
              password,
              pin,
              balance,
            });
          }
        }
      );
    });
  },

  //update special case
  update: ({ id, first_name, last_name, email, password, pin, balance }) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM user_getpay WHERE user_id='${id}'`,
        (err, result) => {
          if (err) {
            return reject({ message: err.message });
          } else {
            db.query(
              `UPDATE user_getpay SET first_name='${
                first_name || result.rows[0].first_name
              }', last_name='${last_name || result.rows[0].last_name}',email='${
                email || result.rows[0].email
              }',password='${password || result.rows[0].password}',pin='${
                pin || result.rows[0].pin
              }',balance='${
                balance || result.rows[0].balance
              }' WHERE user_id='${id}'`,
              (err, result) => {
                if (err) {
                  return reject({ message: err.message });
                } else {
                  return resolve({
                    id,
                    first_name,
                    last_name,
                    email,
                    password,
                    pin,
                    balance,
                  });
                }
              }
            );
          }
        }
      );
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE from user_getpay WHERE user_id='${id}'`,
        (err, result) => {
          if (err) {
            return reject({ message: err.message });
          } else {
            return resolve({
              message: `success delete user with id: '${id}'`,
              data: {},
            });
          }
        }
      );
    });
  },
};

module.exports = userModel;
