import History from '../models/history';

const chris = new History({
    date: Date.now(),
    value: 'Chris Brown',
    owner: 'Eyal',
    times: 1
});

const rihanna = new History({
    date: Date.now(),
    value: 'Rihanna',
    owner: 'Eyal',
    times: 1
});

const artists = [chris, rihanna];


History.find({}, (err, res) => {
    if (!err && !res.length) {
        artists.forEach(artist => {
            History.create(artist)    
            .then(res => {
                console.log(`${artist.value} added to db`);
            })
            .catch(e => {
                console.log(e);
            });
        });
    }
});