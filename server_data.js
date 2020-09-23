import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";


const port = 3000;
const app = new expressive.App();
app.use(expressive.simpleLog());
app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

//// ----------------------------------------------------------------- import Route ---------------------------------------------------------------------//

import appTestRoute from './routes/appTestRoute.js';

//// -----------------------------------------------------------------  Route --------------------------------------------------------------------------//

appTestRoute(app);


//// ---------------------------------------------------------------------------------------------------------------------------------------------------//

const server = await app.listen(port);
console.log("app listening on port " + server.port);