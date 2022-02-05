export class Productcls {
    public constructor(init?: Partial<Productcls>) {
        Object.assign(this, init);
    }
    public productId: string | undefined;
    public productName: string | undefined;
    public productType: string | undefined;
    public productPrice: number | undefined ;
    public Description: string | undefined;
}
