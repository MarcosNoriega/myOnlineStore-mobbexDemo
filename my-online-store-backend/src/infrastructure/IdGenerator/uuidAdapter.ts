import { v4 as uuidv4 } from 'uuid';
import IdGenerator from '../../interfaces/IdGenerator.interface';

export default class UuidAdapter implements IdGenerator {
    constructor() {}

    generateId() {
        const id = uuidv4();
        return id;
    }
}