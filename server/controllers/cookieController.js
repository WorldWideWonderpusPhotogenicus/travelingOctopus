const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
cookieController.setCookie = (req, res, next) => {
  // write code here
  let number = Math.ceil(Math.random() * 99);
  res.cookie('secret', number);
  // res.cookie('codesmith', 'hi');
  return next();
}

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  const options = {
    httpOnly: true
  };
  // write code here

  res.cookie('ssid', res.locals.id, options)
  return next()
}

module.exports = cookieController;
