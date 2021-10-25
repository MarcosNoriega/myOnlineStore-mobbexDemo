import HttpClient from '../../interfaces/HttpClient.interface';
import Payment from '../../interfaces/Payment.interface';

class MobbexPayment implements Payment {
    constructor(private http: HttpClient) {}

    public async checkout(data: Object) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "x-api-key": process.env.X_API_KEY || '',
                "x-access-token": process.env.X_ACCESS_TOKEN || ''
            }

            const urlCheckout: string = process.env.URL_CHECKOUT || '';
    
            const res = await this.http.post(urlCheckout, data, {headers});
    
            return res.data;
        } catch (error) {
            console.error(error)
        }
        
    }

}

export default MobbexPayment;