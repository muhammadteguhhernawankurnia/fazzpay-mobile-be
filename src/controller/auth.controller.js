//contoroller untuk logic
//import transaction model
const authModel = require('../model/auth.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_PRIVATE_KEY } = process.env;

const authController = {
  login: (req, res) => {
    //tanpa jwt bcrypt
    // return authModel
    //   .login(req.body)
    //   .then((result) => {
    //     return res.status(200).send({
    //       message: 'success',
    //       data: {
    //         user: result,
    //         token: 'ssdfsdmkmk',
    //       },
    //     });
    //   })
    //   .catch((err) => {
    //     return res.status(500).send({ message: 'username/password salah' });
    //   });
    return authModel
      .login(req.body)
      .then((result) => {
        jwt.sign(
          { id: result.user_id, role: result.role },
          JWT_PRIVATE_KEY,
          { expiresIn: '1d' },
          (err, token) => {
            console.log(result);
            return res.status(200).send({
              message: 'success',
              data: {
                token,
                // result
                user: {
                  id: result.user_id,
                  email: result.email,
                  // fullname: result.fullname,
                  // role: result.role,
                },
              },
            });
          }
        );
      })
      .catch((error) => {
        return res.status(500).send({ message: error });
      });
  },

  register: (req, res) => {
    //tanpa bcrypt dan jwt
    // return authModel
    //   .register(req.body)
    //   .then((result) => {
    //     return res.status(201).send({ message: 'success', data: result });
    //   })
    //   .catch((err) => {
    //     return res.status(500).send({ message: err.message });
    //   });
    console.log(req.body.password);
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      } else {
        const request = {
          email: req.body.email,
          password: hash,
        };
        return authModel
          .register(request)
          .then((result) => {
            return res.status(200).send({ message: 'success', data: result });
          })
          .catch((error) => {
            return res.status(500).send({ message: error });
          });
      }
    });
  },
};

module.exports = authController;
