import { searchItemService } from '../services';
import { requestHandlerFactory } from '../utils/requesHandlerFactory';

export const getTerm = requestHandlerFactory(
    (req) => {
        return searchItemService.getTerm(req.params.term);
    }
);