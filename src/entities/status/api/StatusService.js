import axios from 'axios';

export class StatusService {
    static async getAllStatusesAsync() {
        const response = await axios.get(`https://localhost:8081/statuses`);
        return response;
    }

    static async createStatusAsync(status) {
        await axios.post(`https://localhost:8081/statuses`, status);
    }

    static async updateStatusAsync(id, status) {
        await axios.put(`https://localhost:8081/statuses/${id}`, status);
    }

    static async deleteStatusAsync(id) {
        await axios.delete(`https://localhost:8081/statuses/${id}`);
    }
}