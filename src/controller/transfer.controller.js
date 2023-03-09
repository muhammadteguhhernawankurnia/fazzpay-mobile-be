//contoroller untuk logic
//import transfer model
const transferModel = require('../model/transfer.model');

const transferController = {
  get: (req, res) => {
    return transferModel
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
    const result = transferModel
      .getDetail(id)
      .then((result) => {
        return res.status(200).send({
          message: `success get transfer data with id: '${id}'`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },

  //ada body yg dikirimkan jadi pake add()
  add: (req, res) => {
    return transferModel
      .add(req.body)
      .then((result) => {
        return res.status(201).send({ message: 'success', data: result });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },

  update: (req, res) => {
    const request = {
      ...req.body,
      id: req.params.id,
    };
    return transferModel
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
    const result = transferModel
      .remove(id)
      .then((result) => {
        return res.status(200).send({
          message: `success delete transfer data with id: '${id}`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },
};

module.exports = transferController;
