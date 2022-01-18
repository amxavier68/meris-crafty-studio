exports.getLandingPage = async (req, res, next) => {
  res.render( 'base', { 
    title: 'Seamus Control Panel',
    message: "This will be the entry point to a new content management system." 
  });
}

exports.loginUser = async (req, res, next) => {
  res.render('base', {
    email: req.params.email,
    password: req.params.password
  });
}