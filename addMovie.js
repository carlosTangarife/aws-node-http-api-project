"use strict";
const { v4 } = require("uuid")
const AWS = require("aws-sdk");

const addMovie = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const { title, director, year } = JSON.parse(event.body);

    const createAt = new Date();
    const id = v4();

    const newMovie = {
        id,
        title,
        director,
        year,
        createAt
    }

    await dynamoDB.put({
        TableName: 'MoviesTable',
        Item: newMovie
    }).promise();

    return {
        statusCode: '200',
        body: JSON.stringify(newMovie)
    }
};

module.exports = {
    addMovie
}
