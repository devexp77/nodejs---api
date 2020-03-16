const fs = require('fs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const normalizeResponseData = (data, message = '') => {
  return {
    data,
    message
  };
};

const normalizeErrorResponse = (error) => {
  let msg = typeof error === 'string' ? error: '';
  let errors = typeof error === 'object' ? error: {};

  return {
    msg,
    errors
  };
};

const paginate = (page, itemsPerPage) => {
  const offset = (page - 1) * itemsPerPage;
  const limit = offset + itemsPerPage;

  return {
    offset,
    limit,
  };
};

function getToken(req) {
  let token = null;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token =  req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    token =  req.query.token;
  }

  return token;
}

function deleteImages(files) {
  files.forEach((fileName) => {
    fs.unlink(`public/uploads/${fileName}`, (err) => {
      if (err) {
        console.log(err, 'fs unlink error');
      }
    });
  });
}

function getUserFromToken(token) {
  const decoded = jwt.decode(token);
  return {email: decoded.email}
}

function genToken(data) {
  return jwt.sign(data, jwtSecret);
}

module.exports = {
  isNumeric,
  normalizeResponseData,
  normalizeErrorResponse,
  paginate,
  deleteImages,
  getToken,
  getUserFromToken,
  genToken
};
