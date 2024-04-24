// errorController.js
"use strict";

const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) =>{
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    // res.send("404|NOT FOUND");
    res.render("error");
};

exports.internalServerError=(err, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${err.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is taking a nap!`);
}; 

