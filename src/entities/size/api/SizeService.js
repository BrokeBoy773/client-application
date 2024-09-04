import axios from 'axios';

export class SizeService {
    static async getAllSizesAsync() {
        const response = await axios.get(`https://localhost:8081/sizes`);
        return response;
    }

    static async createSizeAsync(size) {
        await axios.post(`https://localhost:8081/sizes`, size);
    }

    static async updateSizeAsync(id, size) {
        await axios.put(`https://localhost:8081/sizes/${id}`, size);
    }

    static async deleteSizeAsync(id) {
        await axios.delete(`https://localhost:8081/sizes/${id}`);
    }
}