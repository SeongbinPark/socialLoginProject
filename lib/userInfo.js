'use strict';
import dotenv from 'dotenv';
dotenv.config();

import { consoleBar, timeLog, resSend } from '../config/common.js';
import { pool } from './connect.js';


// [GET] all users

const getAllUsers = async (req, res) => {
    const query = 'SELECT * FROM user';
    const results = {};
    results.result = true;
    results.error = [];
    results.users = [];

    try { // DB Connection에 대한 Exception
        const connection = await pool.getConnection(async conn => conn);
        try { // Query에 대한 Exception
            const [rows, fields] = await connection.query(query);
            console.log(rows);
        } catch (err) {
            results.result = false;
            results.error.push('Query Error');

        }
    } catch (err) {
        results.result = false; // 에러
        results.error.push('DB Error'); // DB 연결 단계에서 에러

    }

    res.send(results);
    consoleBar();
    timeLog('GET all-users called // ' + JSON.stringify(req.query) + ' // ' + JSON.stringify(results));
};

export { getAllUsers };
