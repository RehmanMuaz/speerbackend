import Express, { response } from 'express';
import session  from 'express-session';

const app = Express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.get(`/`, async (req, res, next) => {
    req.session.viewCount += 1;
    res.render('index', { viewCount: req.session.viewCount });
});

/**
app.use('/auth/google', require("./routes/authRoute"));

app.get(`/user`, async (req, res) => {
	res.send(await models.user.findAll());
});

app.use(`/tag`, require("./routes/tagsRoute"));
app.use(`/country`, require("./routes/countryRoute"));
 */
app.listen(port, () => console.log(`Listening on port: ${port}`));