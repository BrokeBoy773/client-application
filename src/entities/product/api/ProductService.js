import axios from 'axios';

export class ProductService {
    static async getAllProductsAsync(searchString, sortItem, sortOrder) {
        const response = await axios.get(`https://localhost:8081/products`, {
            params: {
                searchString,
                sortItem,
                sortOrder,
            }
        });
        return response;
    }

    static async getProductByIdAsync(id) {
        const response = await axios.get(`https://localhost:8081/products/${id}`);
        return response;
    }

    static async createProductAsync(product) {
        await axios.post(`https://localhost:8081/products`, product);
    }

    static async updateProductAsync(id, product) {
        await axios.put(`https://localhost:8081/products/${id}`, product);
    }

    static async deleteProductAsync(id) {
        await axios.delete(`https://localhost:8081/products/${id}`);
    }
}