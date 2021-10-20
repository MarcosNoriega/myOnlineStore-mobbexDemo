import Product from '../../business/Product';
import { response, request } from 'express';

describe('Product business', () => {
    let ProductRepository: any;
    let insert: any;
    let create: any;
    let getById: any;
    let getAll: any;

    beforeEach(() => {
        insert = jest.fn().mockResolvedValue({});
        getById = jest.fn().mockResolvedValue({});
        create = jest.fn().mockResolvedValue({});
        getAll = jest.fn().mockResolvedValue({});
        
        ProductRepository = jest.fn().mockImplementation(() => {
            return { insert, create, getById, getAll };
        });
    })
    
    it('should create an instance of Product', async () => {
        const productRepository = new ProductRepository();
    
        const product = new Product(productRepository);
    
        expect(product).toBeInstanceOf(Product);
    });
    
    it('should execute the method create', async () => {
        const productRepository = new ProductRepository();
    
        const product = new Product(productRepository);
        request.body = {}
        response.json = jest.fn();
        await product.insert(request, response);
    
        expect(insert.mock.calls).toEqual([
            [
                {}
            ]
        ]);
    });

    it('should execute the method getAll', async () => {
        const productRepository = new ProductRepository();
    
        const product = new Product(productRepository);
        response.json = jest.fn();
        await product.getAll(request, response);
    
        expect(getAll.mock.calls).toEqual([
            []
        ]);
    });

    it('should execute the method getById', async () => {
        const productRepository = new ProductRepository();
    
        const product = new Product(productRepository);
        request.params = { idProduct: "1" }
        await product.getById(request, response);
    
        expect(getById.mock.calls).toEqual([
            [
                "1"
            ]
        ]);
    });

    
})


