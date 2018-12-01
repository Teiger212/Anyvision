import * as express from 'express';

import { searchHistoryController } from '../controllers';

const router = express.Router();

router.get('/:limit', searchHistoryController.getSearchHistory)
router.post('/', searchHistoryController.addSearchHistory)

export default router;
