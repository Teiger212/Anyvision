import axios from 'axios';

import { searchHistoryService } from './index';

const baseURL = 'https://itunes.apple.com/search?';

export const getTerm = async (term) => {
    const url = `${baseURL}term=${term}&media=musicVideo&entity=musicVideo&limit=20`;
    const res = await axios.get(url);
    const items = res.data.results;
    const fields = ['artistId', 'trackId', 'artistName', 'trackName', 'artworkUrl100', 'primaryGenreName', 'previewUrl']

    searchHistoryService.addEntry(term);

    const itemsForClient = items.map(item => {
        return _.pick(item, fields)
    })

    return itemsForClient;
}