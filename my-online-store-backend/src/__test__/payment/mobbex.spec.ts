import MobbexPayment from '../../payment/Mobbex';
import HttpClient from '../../services/HttpClient.interface';

class HttpMock implements HttpClient {
    post = jest.fn((url: string, data: object, headers: object) => {
        return {}
    })
} 

it('should ', () => {
    const http = new HttpMock();

    const mobbex = new MobbexPayment(http);

    expect(mobbex).toBeInstanceOf(MobbexPayment);
});

it('should execute the post method of the httpClient', async () => {
    const http = new HttpMock();
    const data = {};

    const mobbex = new MobbexPayment(http);
    const res = await mobbex.checkout(data);

    expect(http.post.mock.calls).toEqual([
        [
            '',
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "",
                    "x-access-token": "",
            
                }
            }
        ]
    ])
});