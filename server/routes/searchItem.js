import * as express from 'express';

import { searchItemController } from '../controllers';

const router = express.Router();


router.get('/:term', searchItemController.getTerm);

export default router;