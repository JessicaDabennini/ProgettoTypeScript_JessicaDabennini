var Prodotto = /** @class */ (function () {
    function Prodotto(id, tipo, taglia, colore, dispobibile, prezzo) {
        this.id = id;
        this.tipo = tipo;
        this.taglia = taglia;
        this.colore = colore;
        this.disponibile = dispobibile;
        this.prezzo = prezzo;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.disponibile) {
            cliente.ordinaProdotto(this);
            console.log('Prodotto assegnato');
        }
        else {
            console.log('Prodotto non disponibile');
        }
    };
    return Prodotto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, indirizzo, metodoPagamento, saldoConto) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.indirizzo = indirizzo;
        this.metodoPagamento = metodoPagamento;
        this.saldoConto = saldoConto;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.disponibile && this.saldoConto >= prodotto.prezzo) {
            console.log('id articolo: ' + prodotto.id + 'tipologia: ' + prodotto.tipo);
            console.log('Prodotto ordinato');
        }
        else if (!prodotto.disponibile) {
            console.log('id articolo: ' + prodotto.id + ' tipologia: ' + prodotto.tipo);
            console.log('Prodotto non disponibile');
        }
        else if (this.saldoConto < prodotto.prezzo) {
            console.log('id articolo: ' + prodotto.id + ' tipologia: ' + prodotto.tipo);
            console.log('Saldo insufficiente');
        }
        else {
            console.log('Qualcosa è andato storto');
        }
    };
    return Cliente;
}());
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, inProduzione, descrizione, disponibile) {
        this.inventario = [];
        this.produzione = [];
        this.nomeProcesso = nomeProcesso;
        this.inProduzione = inProduzione;
        this.descrizione = descrizione;
        this.disponibile = disponibile;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        if (this.nomeProcesso === 'completato', this.disponibile === true) {
            this.inventario.push(prodotto);
            this.descrizione = 'il prodotto è pronto per essere acquistato';
            this.disponibile = true;
            console.log(this.descrizione);
            ProcessoProduzione.prodottiCompletati.push(prodotto);
        }
        else {
            this.nomeProcesso = 'produzione';
            this.descrizione = 'Il prodotto è in produzione';
            this.disponibile = false;
            this.produzione.push(prodotto);
            console.log(this.descrizione);
            ProcessoProduzione.prodottiInProduzione.push(prodotto);
        }
    };
    ProcessoProduzione.getProdottiInProduzione = function () {
        return ProcessoProduzione.prodottiInProduzione.map(function (prodotto) { return (prodotto.id); });
    };
    ProcessoProduzione.getProdottiCompletati = function () {
        return ProcessoProduzione.prodottiCompletati.map(function (prodotto) { return (prodotto.id); });
    };
    ProcessoProduzione.prodottiInProduzione = [];
    ProcessoProduzione.prodottiCompletati = [];
    return ProcessoProduzione;
}());
var prodotto1 = new Prodotto(1, 'Bikini', 42, 'blu', true, 50);
console.log(prodotto1);
var processoProduzione1 = new ProcessoProduzione('completato', [prodotto1], ProcessoProduzione.descrizione, true);
processoProduzione1.aggiungiProdotto(prodotto1);
var prodotto2 = new Prodotto(2, 'Pantaloncini', 48, 'rosso', false, 70);
console.log(prodotto2);
var processoProduzione2 = new ProcessoProduzione('produzione', [prodotto2], ProcessoProduzione.descrizione, false);
processoProduzione2.aggiungiProdotto(prodotto2);
var prodotto3 = new Prodotto(3, 'Pareo', 38, 'verde', true, 90);
console.log(prodotto3);
var processoProduzione3 = new ProcessoProduzione('completato', [prodotto3], ProcessoProduzione.descrizione, true);
processoProduzione3.aggiungiProdotto(prodotto3);
var prodotto4 = new Prodotto(4, 'Slip', 52, 'arancio', true, 30);
console.log(prodotto4);
var processoProduzione4 = new ProcessoProduzione('produzione', [prodotto4], ProcessoProduzione.descrizione, false);
processoProduzione4.aggiungiProdotto(prodotto4);
console.log("Inventario Magazzino: " + ProcessoProduzione.getProdottiCompletati());
console.log("Inventario in Produzione: " + ProcessoProduzione.getProdottiInProduzione());
var cliente1 = new Cliente('Jessica', 'Verdi ', 'jessica.verdi@me.com', 'Roma', 'Carta di credito', 100);
console.log(cliente1);
cliente1.ordinaProdotto(prodotto1);
cliente1.ordinaProdotto(prodotto2);
cliente1.ordinaProdotto(prodotto3);
var cliente2 = new Cliente('Roberto', 'Rossi', 'roberto.rossi@me.com', 'Milano', 'PayPal', 50);
console.log(cliente2);
cliente2.ordinaProdotto(prodotto2);
cliente2.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto3);
