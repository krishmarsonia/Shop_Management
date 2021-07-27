const Service = require('../model/service.model');

exports.home = (req, res, next) => {
    res.render('index', {PageTitle: 'Home Page'});
}

exports.haircut = (req, res, next) => {
    Service.find().then(data=> console.log(data)).catch(err=>console.log(err));
    res.render('haircut', {PageTitle: 'Hair Cut', hair: [{name: 'One', rs: 150}, {name: 'round cut', rs: 200}]});
}

exports.dandt = (req, res, next) => {
    res.render('dandt', {PageTitle: 'date and time Selection'});
}

exports.addApp = (req, res, next) => {
    date = req.body.dateinput;
    time = req.body.timeinput;
    console.log(date);
    console.log(time);
    const serc = new Service({
        serType: 'Haircut',
        serPrice: 58,
        serApp: date
    })

    serc.save().then(savedApp => console.log('sucess')).catch(err => console.log(err));
    res.redirect('/');
}

exports.testdate = (req, res, next) => {
    let x;
    date = req.body.dateinput;
    console.log()
    Service.find().then(data=> {
        for(x of data){
            console.log(date.toString() <= x.serApp.toString());
            console.log(x.serApp);
        }
    }).catch(err=> console.log(err));
        
        
    res.redirect('/dandt');
}