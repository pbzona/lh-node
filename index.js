const app = require('./src/app');
const { listenHandler } = require('./src/handlers');

const PORT = 3001;

app.listen(PORT, '0.0.0.0', () => listenHandler(PORT));