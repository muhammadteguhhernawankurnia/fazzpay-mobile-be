const express = require('express');
const transactionRouter = express();

//import controller
const transactionController = require('../controller/transaction.controller');

//import route
transactionRouter.get('/', transactionController.get);
transactionRouter.get('/:id', transactionController.getDetail);
transactionRouter.post('/', transactionController.add);
transactionRouter.patch('/:id', transactionController.update);
transactionRouter.delete('/:id', transactionController.remove);

// //endpoint
// router.get('/transactions', (req, res) => {
//   db.query(`SELECT * from transaction`, (err, result) => {
//     if (err) {
//       return res.status(500).send({
//         message: err.message,
//       });
//     } else {
//       return res.status(200).send({ message: 'success', data: result.rows });
//     }
//   });
// });

// //res harus definisikan agar tidak error, :id(dinamis)=>params, bukan array of object
// router.get('/transactions/:id', (req, res) => {
//   //params dinamis
//   const { id } = req.params;
//   db.query(
//     `SELECT * from transaction WHERE transaction_id='${id}'`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({
//           message: err.message,
//         });
//       } else {
//         return (
//           res
//             .status(200)
//             // .send({ message: 'success', data: result.rows[0] });
//             .send({ data: result.rows[0] })
//         );
//       }
//     }
//   );
// });

// //data diambil dari body di fe
// router.post('/transactions', (req, res) => {
//   //destructuring
//   //transaction_id dari uuid
//   const { user_id, wallet_id, total_transaction, description, created_at } =
//     req.body;
//   //deklarasi uuid
//   // let uuid = uuidv4();
//   //query langsung, sql language
//   db.query(
//     `INSERT INTO transaction (transaction_id, user_id, wallet_id, total_transaction, description, created_at) VALUES ('${uuidv4()}','${user_id}','${wallet_id}','${total_transaction}','${description}','${created_at}')`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({
//           message: err.message,
//         });
//       } else {
//         return res.status(201).send({ message: 'success', data: req.body });
//       }
//     }
//   );
// });

// router.patch('/transactions/:id', (req, res) => {
//   //   //ngambil dulu dari database berdasarkan id
//   //   //kita update
//   const { user_id, wallet_id, total_transaction, description } = req.body;
//   const { id } = req.params;
//   db.query(
//     `SELECT * FROM transaction WHERE transaction_id='${id}'`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: err.message });
//       } else {
//         db.query(
//           `UPDATE transaction SET user_id='${
//             user_id || result.rows[0].user_id
//           }', wallet_id='${
//             wallet_id || result.rows[0].wallet_id
//           }',total_transaction='${
//             total_transaction || result.rows[0].total_transaction
//           }',description='${
//             description || result.rows[0].description
//           }' WHERE transaction_id='${id}'`,
//           (err, result) => {
//             if (err) {
//               return res.status(500).send({ message: err.message });
//             } else {
//               return res
//                 .status(201)
//                 .send({ message: `success update data ${id}`, data: res.body });
//             }
//           }
//         );
//       }
//     }
//   );
// });

// router.delete('/transactions/:id', (req, res) => {
//   const { id } = req.params;
//   db.query(
//     `DELETE from transaction WHERE transaction_id='${id}'`,
//     (err, result) => {
//       if (err) {
//         return res.status(500).send({ message: err.message });
//       } else {
//         return res
//           .status(201)
//           .send({ message: `success delete data '${id}'`, data: {} });
//       }
//     }
//   );
// });

module.exports = transactionRouter;
