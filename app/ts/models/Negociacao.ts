class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;


    constructor(data: Date, quantidade:number, valor:number) {
 
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    public get data(): Date {
        return this._data;
    }
    public set data(value: Date) {
        this._data = value;
    }
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(value: number) {
        this._quantidade = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(value: number) {
        this._valor = value;
    }
    public get volume():number {

        return this._quantidade * this._valor;
    }
}