import axios from 'axios';

export class BrandService {
    static async getAllBrandsAsync() {
        const response = await axios.get(`https://localhost:8081/brands`);
        return response;
    }

    static async createBrandAsync(brand) {
        await axios.post(`https://localhost:8081/brands`, brand);
    }

    static async updateBrandAsync(id, brand) {
        await axios.put(`https://localhost:8081/brands/${id}`, brand);
    }

    static async deleteBrandAsync(id) {
        await axios.delete(`https://localhost:8081/brands/${id}`);
    }
}