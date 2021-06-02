import { domInject } from '../helpers/decorators/domInject';
import { Negociacao, NegociacaoParcial, Negociacoes } from '../models/index';
import { MensagemView, NegociacoesView } from '../views/index';
import { throttle } from '../helpers/decorators/throttle';
import { logarTempoDeExecucao } from '../helpers/decorators/logarTempoDeExecucao';
import { NegociacaoService } from '../services/NegociacaoServices';
import { imprime } from '../helpers/index';




export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        // const sabado : number = 6;
        // const domingo: number = 0;

        let data = new Date((this._inputData.val() as String).toString().replace(/-/g, ','))

        if (!this._ehDiaUtil(data)) {

            return this._mensagemView.update("Negociação não realizada, até o momentos só  estamos realizando negociações em dia útil.");
        }

        const negociacao = new Negociacao(
            data,
            parseInt((this._inputQuantidade.val() as String).toString()),
            parseFloat((this._inputValor.val() as String).toString())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!")


    }
   

    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    @throttle(600)
    importarDados() {
        function isOK(response: Response) {
            if (!response.ok)
                throw new Error(response.statusText);
            return response;
        }

        this._service.obterNegociacoes(isOK)
        .then((negociacoesParaImportar : Negociacao[])=> {

            const negociacoesJaImportadas = this._negociacoes.paraArray();
 

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
        });
    }

}


enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}