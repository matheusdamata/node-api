import { Request, Response } from 'express';

import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random() * 5 );
    res.json({ numbeR: nRand });
};

export const nome = (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ nome: name })
}