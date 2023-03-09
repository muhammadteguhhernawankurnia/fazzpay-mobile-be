//contoroller untuk logic
//import transaction model
const userModel = require('../model/user.model');

const userController = {
  get: (req, res) => {
    return userModel
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
    const result = userModel
      .getDetail(id)
      .then((result) => {
        return res.status(200).send({
          message: `success get user data with id: '${id}'`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },

  //ada body yg dikirimkan jadi pake add()
  add: (req, res) => {
    return userModel
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
    return userModel
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
    const result = userModel
      .remove(id)
      .then((result) => {
        return res.status(200).send({
          message: `success delete user data with id: '${id}`,
          data: result,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message: err.message });
      });
  },
};

module.exports = userController;
