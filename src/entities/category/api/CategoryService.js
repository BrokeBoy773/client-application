import axios from 'axios';

export class CategoryService {
    static async getAllCategoriesAsync() {
        const response = await axios.get(`https://localhost:8081/categories`);
        return response;
    }

    static async createCategoryAsync(category) {
        await axios.post(`https://localhost:8081/categories`, category);
    }

    static async updateCategoryAsync(id, category) {
        await axios.put(`https://localhost:8081/categories/${id}`, category);
    }

    static async deleteCategoryAsync(id) {
        await axios.delete(`https://localhost:8081/categories/${id}`);
    }
}