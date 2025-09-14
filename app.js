const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error.js')

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

/*what urlencoded do es is it registers a middleware,

so this function in the end just yields us such a middleware function,

so this parses such a function here in the end even though we can't see it and this package will in the

end, in this middleware function call next in the end, so that the request also reaches our middleware

but before it does that, it will do that whole request body parsing we had to do manually in the previous

core sections.

Now this will not parse all kinds of possible bodies, files, json and so on but this will parse bodies

like the one we're getting here, sent through a form. If we have other bodies like files and we'll do that

also in this course,

we'll use different parsers and this makes expressjs so extensible.*/


//  next();//allow the request to go to another middleware due to this function


app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);
app.listen(3000);