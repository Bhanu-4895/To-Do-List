const {User} =  require('../../app_api/models/locations');


module.exports.about = (req, res) => {
    res.render('about')
}

module.exports.ContactPage = (req, res) => {
    res.render('contact')
}

module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.getRegistration = (req, res) => {
    res.render('signup')
}

module.exports.postRegistration = (req, res)=> {
    const body = req.body;
    try {
        const user = new User({
            username: body.name,
            email: body.email,
            password: body.password
        });
        user.save();
        console.log(user);
        res.redirect('/');

    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}