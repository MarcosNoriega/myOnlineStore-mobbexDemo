import ProductRepository from '../../infrastructure/repositories/db/Mongo/product/product.repository';


describe('', () => {
    let ProductModel: any;
    let productsMock = [
        {
            "name": "cursus",
            "description": "Suspendisse aliquet, sem ut",
            "price": 2709
        },
        {
            "name": "varius",
            "description": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
            "price": 5533
        }
    ]
    beforeEach(() => {
        ProductModel = {
            create: jest.fn().mockResolvedValue({
                "name": "cursus",
                "description": "Suspendisse aliquet, sem ut",
                "price": 2709
            }),
            find: jest.fn().mockResolvedValue(productsMock),
            findById: jest.fn().mockResolvedValue({
                "name": "cursus",
                "description": "Suspendisse aliquet, sem ut",
                "price": 2709
            }),
            insertMany: jest.fn().mockResolvedValue(productsMock)
        }
    });

    it('should execute the method getAll', async () => {
        const productRepository = new ProductRepository(ProductModel);
        const res = await productRepository.getAll();
        
        expect(ProductModel.find.mock.calls).toEqual([ [ ] ]);
        expect(res).toEqual([
            {
                "name": "cursus",
                "description": "Suspendisse aliquet, sem ut",
                "price": 2709
            },
            {
                "name": "varius",
                "description": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
                "price": 5533
            }
        ]);
    });

    it('should execute the method getById', async () => {
        const productRepository = new ProductRepository(ProductModel);
        const res = await productRepository.getById('1');
        
        expect(ProductModel.findById.mock.calls).toEqual([ [ '1' ] ]);
        expect(res).toEqual({
            "name": "cursus",
            "description": "Suspendisse aliquet, sem ut",
            "price": 2709
        });
    });

    it('should execute the method insert', async () => {
        const productRepository = new ProductRepository(ProductModel);
        const res = await productRepository.insert([ {} ]);
        
        expect(ProductModel.insertMany.mock.calls).toEqual([ [ [{ }] ] ]);
        expect(res).toEqual([
            {
                "name": "cursus",
                "description": "Suspendisse aliquet, sem ut",
                "price": 2709
            },
            {
                "name": "varius",
                "description": "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
                "price": 5533
            }
        ]);
    });
})