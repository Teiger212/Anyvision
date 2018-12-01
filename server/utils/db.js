import mongoose from 'mongoose';
import bluebird from 'bluebird';

const uri = "mongodb://eteiger:Snowman3!@guessdb-shard-00-00-2u02y.mongodb.net:27017,guessdb-shard-00-01-2u02y.mongodb.net:27017,guessdb-shard-00-02-2u02y.mongodb.net:27017/anyvision?ssl=true&replicaSet=GuessDB-shard-0&authSource=admin&retryWrites=true";
class mongoDB {
	
	constructor() {
        mongoose.Promise = bluebird;
		this.mongoose = mongoose;
	}

	connectDB() {
		try {
			return this.mongoose.connect(uri, {useNewUrlParser: true});
		} catch(e) {
			console.log(e);
		}
	}
}

module.exports = new mongoDB();