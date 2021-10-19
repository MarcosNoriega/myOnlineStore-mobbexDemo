export default class ProductRepository {
    constructor(private ProductModel: any) {}

    public async getAll() {
        const products = this.ProductModel.find();

        return products;
    }

    public async getById(id: string) {
        const product = this.ProductModel.findById(id);

        return product;
    }

    public async create(data: object) {
        const product = this.ProductModel(data);

        await product.save();
    }

    public async insert(data: object[]) {
        const product = await this.ProductModel.insertMany(data);
    }
}