
var navbar = [
    {title: "Home", location:"/"},
    {title: "Form", location:"/form"}
];

exports.index = function(req, res){
  res.render('index', { title: 'Hockey Pool', navbar: navbar, route: req.route.path });
};