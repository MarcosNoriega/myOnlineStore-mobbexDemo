import { Request, Response} from 'express';
import ProductRepository from '../../infrastructure/repositories/db/Mongo/product/product.repository';


export default class Product {
    constructor(private productRepository: ProductRepository) {}

    async insert(req: Request, res: Response) {
        const data = req.body;

        await this.productRepository.insert(data);

        res.json({
            ok: true
        });
    }

    async getAll(req: Request, res: Response) {
        const products = await this.productRepository.getAll();

        res.json(products);
    }

    async getById(req: Request, res: Response) {
        const { idProduct } = req.params;

        const product = await this.productRepository.getById(idProduct);

        res.json(product);
    }

}