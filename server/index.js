import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import lodash from 'lodash';

global._ = lodash;

const mongoDB =  require('./utils/db').connectDB();
const routes = require('./routes/routes');

class Server {
    constructor(){
        this.port =  process.env.PORT || 4000;
        this.host = `localhost`;
        
        this.app = express();
        this.http = http.Server(this.app);
    }

    includeRoutes(){
        new routes(this.app, mongoDB).routesConfig();
    }

    appConfig(){        
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    appExecute(){
        this.appConfig();
        this.includeRoutes();

        this.http.listen(this.port, this.host, () => {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });
    }

}

const app = new Server();
app.appExecute();