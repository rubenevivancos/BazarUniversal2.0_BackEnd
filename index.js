const server = require('./src/app.js');

const port = process.env.PORT || 3001; //Esto es importantisimo, ya que Vercel usa la variable PORT 


server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
