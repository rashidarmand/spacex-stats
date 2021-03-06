const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const PORT = process.env.PORT || 5000;
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: false // set to true for development. Graphiql is very useful !
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port: ${ PORT }`));