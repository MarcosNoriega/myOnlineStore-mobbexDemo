export default interface HttpClient {
    post(url: string, data: object, headers: object): any;
}