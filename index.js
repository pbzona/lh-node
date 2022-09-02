const app = require('./src/app');
const { listenHandler } = require('./src/handlers');

app.listen(process.env.PORT || 3001, listenHandler);