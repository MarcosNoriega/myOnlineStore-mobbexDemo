import { Router } from 'express';
import { Request, Response} from 'express';
import container from '../../domain/services/Conteiner';


export const router: Router = Router();

router.post('/checkout', async (req: Request, res: Response) => {
    await container.resolve('Order').checkout(req, res);
});

router.post('/webhook', async (req: Request, res: Response) => {
    const payment = await container.resolve('Payment').create(req, res);
    const { data: { payment: { reference, status: { text } } }  } = payment;

    await container.resolve('Order').updateStatus(reference, text);

    res.status(200);
});

router.get('/return_url', async (req: Request, res: Response) => {
    res.send("Pago Finalizado");
})

router.post('/insert_products', async (req: Request, res: Response) => {
     await container.resolve('Product').insert(req, res);
});

router.get('/products', async (req: Request, res: Response) => {
    await container.resolve('Product').getAll(req, res);
});





