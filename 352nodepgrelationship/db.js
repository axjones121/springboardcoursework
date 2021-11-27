//code adapted by: http://curric.rithmschool.com/springboard/exercises/express-biztime/solution/index.html


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime"
});

client.connect();


module.exports = client;