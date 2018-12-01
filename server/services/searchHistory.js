
import History from '../models/history';

export const getEntries = async(params) => {
    //TO-DO: get the limit working with params.limit

    const history = await History.find().select('-_id -__v').limit(10).sort('-times');

    if (!history) {
        console.log(e);
        response.status(500).json('Oops - server error, not able to get search history');
    }

    return history;
};

export const getTopEntries = async () => {
    const history = await History.find().select({'_id': 0}).sort({times: -1}).limit(10);

    if (!history) {
        console.log(e);
        response.status(500).json('Oops - server error, not able to get search history');
    }

    return history;
};

export const addEntry = async(term) => {
    const history = await History.findOne({value: term});

    if (history) {
        history.times = ++history.times;
        history.date = Date.now();
        history.save()
    } else {
        const newEntry = new History({
            date: Date.now(),
            value: term,
            times: 1
        });
        const inserted = await newEntry.save();
    
        if (!inserted) {
            response.status(500).json('Could not add new entry')
        }
    }

    return history;
};