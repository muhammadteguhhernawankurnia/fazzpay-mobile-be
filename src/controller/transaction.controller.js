//contoroller untuk logic
//import transaction model
const transactionModel = require('../model/transaction.model');

const transactionController = {
  get: (req, res) => {
    return transactionModel
      .get()
      .then((result) => {
        return res.status(200).send({ message: 'success', data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: err.message });
      });
  },

  getDetail: (req, res) => {
    const id = req.params.id;
    const result = transactionModel
      .getDetail(id)
      .then((result) => {
        return res.status(200).send({
          message: `success get transaction data with id: '${id}'`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },

  //ada body yg dikirimkan jadi pake add()
  add: (req, res) => {
    return transactionModel
      .add(req.body)
      .then((result) => {
        return res.status(201).send({ message: 'success', data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: error.message });
      });
  },
  update: (req, res) => {
    const request = {
      ...req.body,
      id: req.params.id,
    };
    return transactionModel
      .update(request)
      .then((result) => {
        return res.status(201).send({ message: 'success', data: result });
      })
      .catch((error) => {
        return res.status(500).send({ message: err.message });
      });
  },

  //kondisi bila sudah delete tidak bisa hapus belum
  remove: (req, res) => {
    const id = req.params.id;
    const result = transactionModel
      .remove(id)
      .then((result) => {
        return res.status(200).send({
          message: `success delete transaction data with id: '${id}`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },
};

module.exports = transactionController;
