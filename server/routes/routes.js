import * as routes from './index';

class Routes {

	constructor(app, mongoDB){
    this.app = app;
    this.mongoDB = mongoDB
  }

  appRoutes() {
       const app = this.app;
        
        this.app.use('/searchHistory', routes.searchHistory);
        this.app.use('/searchItem', routes.searchItem)
    }

    routesConfig(){
		this.appRoutes();
	}
}

module.exports = Routes;
