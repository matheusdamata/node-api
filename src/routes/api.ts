import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:name', ApiController.nome);

router.post('/phrase', ApiController.createPhrase);
router.get('/phrases', ApiController.listPhrases);
router.get('/phrase/random', ApiController.randomPhrase);
router.get('/phrase/:id', ApiController.getPhrase);
router.put('/phrase/:id', ApiController.updatePhrase);
router.delete('/phrase/:id', ApiController.deletePhrase);

export default router;