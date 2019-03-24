import express, { Router } from 'express';
import { Users, Feedback } from './controllers/'

export default (db, config, auth) => {
	const router = Router();
	const User = Users(db, config).rest;
	const Fb = Feedback(db, config).rest;

	const api = Router();
	api.get('/', (req, res) => {
		res.send({
			version: '1.0',
			url: req.url
		})
	});
	router.use('/api', api);

	const userApi = Router();
	userApi.get('/', User.list);
	userApi.post('/', User.create, auth.requireLogin, User.get);
	userApi.get('/:user_id', User.get);
	userApi.param('user_id', User.params.user_id);
	api.use('/u/', userApi);

	const authApi = Router();
	authApi.post('/', auth.requireLogin, User.get);
	api.use('/auth', authApi);

	const meApi = Router();
	meApi.get('/', auth.requireToken, User.get);
	api.use('/me/', meApi);

	const FeedbackApi = Router();
	FeedbackApi.get('/', auth.requireToken);
	FeedbackApi.post('/request', auth.requireToken, Fb.requestFeedback);
	api.use('/f/', FeedbackApi);

	api.get('/.well-known/acme-challenge/:id', function(req, res, next) {
		res.send(req.params.id + '.' + 'HvBmjhjg7Ng9HAGb1bmUtrF4gqOWj8LZ56Gx5HyBBNg');
	});
	router.get('/', (req, res)=>{
		res.send("Ayyyy its our Rest Api");
	})

	return router;
}
