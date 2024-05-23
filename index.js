const server = require('./src/app.js');

const port = process.env.PORT; //Esto es importantisimo, ya que Railway usa la variable PORT


server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
