'use strict';

let {Sequelize, sequelize} = require('../service/db');

exports.creator = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        let user = await db.sequelize.query(
            'SELECT * FROM creator b\n' +
            'WHERE id=$1\n' +
            'JOIN install',
            { bind: [creatorId], type: 'RAW' },
        );
        res.render(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.install = async (req, res) => {
    try {
        const installId = req.query.install_id;
        let install = await db.sequelize.query(
            'SELECT * FROM install b\n' +
            'WHERE id=$1\n',
            { bind: [installId], type: 'RAW' },
        );
        res.render(install[0]);
    } catch (err) {
        console.log("Error is Install: " + err);
        res.sendStatus(400);
    }
};

/*
    TODO implement new endpoints here
 */