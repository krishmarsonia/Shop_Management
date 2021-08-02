const User = require('../model/client_model'); 

const bcrypt = require('bcrypt');

exports.getsignup = (req, res, next) =>  {
    res.render('signup', {PageTitle: 'Signup'});
}

exports.postsignup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.Email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(email);
    console.log(name);
    console.log(password);
    User.findOne({email: email}).then(user => {
        if(user){
            console.log("User already exist");
            return res.redirect('/')
        }
        else{
            bcrypt.hash(password, 12).then(hashedPassword => {
                const userdata = new User({
                    name: name,
                    email: email,
                    password: hashedPassword
                });
                
            return userdata.save().then(console.log("User Created")).catch(err => console.log(err));

            }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
    // const user = new User({
    //     name: name,
    //     email: email,
    //     password: password
    // });

    // user.save().then(createduser => console.log("User Created")).catch(err => console.log(err));
    res.redirect('/signin');
}

exports.getsignin = (req, res, next) => {
    res.render('signin', {PageTitle: 'Signin Page'});
}

exports.postsignin = ( req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then(user => {
        bcrypt.compare(password, user.password).then(matcheduser => {
            if(matcheduser){
                req.session.LoggedIn = true;
                req.session.userid = user.id;
               return res.redirect('/haircut');
            } 
            return res.redirect('/');
            
        })
    }).catch(err => console.log(err));
}

exports.postlogout = (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            console.log(err);
        }

        console.log("Successfully Logged Out");
        res.redirect('/signin');
    })
}