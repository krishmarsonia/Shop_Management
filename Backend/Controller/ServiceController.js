exports.home = (req, res, next) => {
    res.render('index', {PageTitle: 'Home Page'});
}

exports.haircut = (req, res, next) => {
    res.render('haircut', {PageTitle: 'Hair Cut', hair: [{name: 'One sides', rs: 150}, {name: 'round cut', rs: 200}]});
}