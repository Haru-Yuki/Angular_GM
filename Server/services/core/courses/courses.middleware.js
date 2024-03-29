const express = require('express');
const router = express.Router();
const url = require('url');
const moment = require('moment');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true);
		const query = url_parts.query;
		const from = parseInt(query.start, 10) || 0;
		let	to = from + parseInt(query.count, 10);
		const sort = query.sort;
		const id = query.id;
		let	courses = server.db.getState().courses;

		if (!!query.textFragment) {
			courses = courses.filter((course) => course.title.toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
		}

		if(sort) {
			courses.sort((a, b) => {
				if (sort === 'date') {
					const c = moment(b.creationDate);
					const d = moment(a.creationDate);
					return c.valueOf() - d.valueOf();
				} else {
					return b[sort] - a[sort];
				}
			});
		}

		if (courses.duration < to || !to) {
			to = courses.duration;
		}

		if(!id) {
			courses = courses.slice(from, to);
		} else {
			courses = courses.filter((item) => {
				return item.id == id;
			});
		}

		res.json(courses);
	});

	router.get('/error', function(req, res, next) {
		let url_parts = url.parse(req.originalUrl, true);
		let query = url_parts.query;
		res.status(parseInt(query.code, 10)).send({message: 'Error'});
	});


	return router;
};
