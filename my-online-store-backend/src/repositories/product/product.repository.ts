export default class ProductRepository {
    constructor(private ProductModel: any) {}

    /**
     * Obtains the products from the database.
     */
    public async getAll() {
        const products = this.ProductModel.find();

        return products;
    }

    /**
     * Obtains a product by id.
     */
    public async getById(id: string) {
        const product = this.ProductModel.findById(id);

        return product;
    }

    /**
     * insert a product into the database.
     */
    public async create(data: object) {
        const product = this.ProductModel(data);

        await product.save();
    }

    /**
     * insert many products in the database
     */
    public async insert(data: object[]) {
        const product = await this.ProductModel.insertMany(data);

        return product;
    }
}