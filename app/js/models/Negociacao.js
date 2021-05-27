class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(value) {
        this._quantidade = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
