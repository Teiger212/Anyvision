import { Request, Response } from 'express';
import { searchHistoryService } from '../services';
import { requestHandlerFactory } from '../utils/requesHandlerFactory';


export const getSearchHistory = requestHandlerFactory(
    (req) => {
        return searchHistoryService.getEntries(req.params)
    }
);

export const addSearchHistory = requestHandlerFactory(
    (req) => {
        return searchHistoryService.addEntry(req.body);
    }   
);