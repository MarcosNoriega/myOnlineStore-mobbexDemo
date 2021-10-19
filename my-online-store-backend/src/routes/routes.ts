import { Router } from 'express';
import { Request, Response} from 'express';
import container from '../services/Conteiner';


export const router: Router = Router();

router.post('/checkout', async (req: Request, res: Response) => {
    await container.resolve('Order').checkout(req, res);
});

router.post('/webhook', async (req: Request, res: Response) => {
    await container.resolve('Order').createOrder(req, res)
});

router.get('/return_url', async (req: Request, res: Response) => {
    console.log(req.params);

    res.send("Pago realizado con exito");
})

router.post('/insert_products', async (req: Request, res: Response) => {
     await container.resolve('Product').insert(req, res);
});

router.get('/products', async (req: Request, res: Response) => {
    await container.resolve('Product').getAll(req, res);
});



