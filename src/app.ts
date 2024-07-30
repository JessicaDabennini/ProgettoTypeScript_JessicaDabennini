interface Iprodotto {
    id: number;
    tipo: string;
    taglia: number;
    colore: string;
    disponibile: boolean;

    assegnaCliente(cliente: Icliente): void;
}

interface Icliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;

    ordinaProdotto(prodotto: Iprodotto): void;
}

interface IprocessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    inProduzione: Iprodotto[];

    aggiungiProdotto(prodotto: Iprodotto): void;
}

class Prodotto implements Iprodotto {
    id: number;
    tipo: string;
    taglia: number;
    colore: string;
    disponibile: boolean;
    prezzo: number;
   
    constructor(id: number, tipo: string, taglia: number, colore: string, dispobibile: boolean, prezzo: number) {
        this.id = id;
        this.tipo = tipo;
        this.taglia = taglia;
        this.colore = colore;
        this.disponibile = dispobibile;
        this.prezzo = prezzo;
    }
   
    assegnaCliente(cliente: Icliente): void {
        if (this.disponibile) {
            cliente.ordinaProdotto(this);
            console.log('Prodotto assegnato');
        } else {
            console.log('Prodotto non disponibile');
        }
    }
    }

 class Cliente implements Icliente {
    nome: string;
    cognome: string;
    email: string;  
    protected indirizzo: string;
    metodoPagamento: string;
    private saldoConto: number; 

    constructor(nome: string, cognome: string, email: string, indirizzo: string, metodoPagamento: string, saldoConto: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.indirizzo = indirizzo;
        this.metodoPagamento = metodoPagamento;
        this.saldoConto = saldoConto;
    }
    ordinaProdotto(prodotto: Prodotto): void {
        if (prodotto.disponibile && this.saldoConto >= prodotto.prezzo) {
            console.log('id articolo: ' + prodotto.id + 'tipologia: ' + prodotto.tipo);
            console.log('Prodotto ordinato');
        } else if (!prodotto.disponibile) {
            console.log('id articolo: ' + prodotto.id + ' tipologia: ' + prodotto.tipo);
            console.log('Prodotto non disponibile');
        } else if (this.saldoConto < prodotto.prezzo) {
            console.log('id articolo: ' + prodotto.id + ' tipologia: ' + prodotto.tipo);
            console.log('Saldo insufficiente');
        } else {
            console.log('Qualcosa è andato storto');
        }
    } 
}

class ProcessoProduzione implements IprocessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    inProduzione: Prodotto[];  
    disponibile: boolean;
    private inventario: Prodotto[] = [];
    private static prodottiInProduzione: Prodotto[] = [];
    private static prodottiCompletati: Prodotto[] = [];    static descrizione: string;
    private produzione: Prodotto[] = [];
  
    constructor(nomeProcesso: string, inProduzione: Prodotto[], descrizione: string, disponibile: boolean) {
      this.nomeProcesso = nomeProcesso;
      this.inProduzione = inProduzione;
      this.descrizione = descrizione;
      this.disponibile = disponibile;
    }
  
    aggiungiProdotto(prodotto: Prodotto): void {
      if (this.nomeProcesso === 'completato', this.disponibile === true) {
        this.inventario.push(prodotto);            
        this.descrizione = 'il prodotto è pronto per essere acquistato';
        this.disponibile = true;
        console.log(this.descrizione);
        ProcessoProduzione.prodottiCompletati.push(prodotto);

      } else {
        this.nomeProcesso = 'produzione';
        this.descrizione = 'Il prodotto è in produzione';
        this.disponibile = false;
        this.produzione.push(prodotto);
        console.log(this.descrizione);
        ProcessoProduzione.prodottiInProduzione.push(prodotto);          
    }
      }
      static getProdottiInProduzione(): number[] {
        return ProcessoProduzione.prodottiInProduzione.map(prodotto => ( prodotto.id ));
      }
    
      static getProdottiCompletati(): number[] {
        return ProcessoProduzione.prodottiCompletati.map(prodotto => ( prodotto.id ));
      }
    }


 let prodotto1 = new Prodotto(1, 'Bikini', 42, 'blu', true, 50);
 console.log(prodotto1);
 let processoProduzione1 = new ProcessoProduzione('completato', [prodotto1], ProcessoProduzione.descrizione, true);
 processoProduzione1.aggiungiProdotto(prodotto1);

 let prodotto2 = new Prodotto(2, 'Pantaloncini', 48, 'rosso', false, 70);
 console.log(prodotto2);
 let processoProduzione2 = new ProcessoProduzione('produzione', [prodotto2], ProcessoProduzione.descrizione, false);
 processoProduzione2.aggiungiProdotto(prodotto2);

 let prodotto3 = new Prodotto(3, 'Pareo', 38, 'verde', true, 90);
 console.log(prodotto3);
 let processoProduzione3 = new ProcessoProduzione('completato', [prodotto3], ProcessoProduzione.descrizione, true);
 processoProduzione3.aggiungiProdotto(prodotto3);

 let prodotto4 = new Prodotto(4, 'Slip', 52, 'arancio', true, 30);
 console.log(prodotto4);
 let processoProduzione4 = new ProcessoProduzione('produzione', [prodotto4], ProcessoProduzione.descrizione, false);
 processoProduzione4.aggiungiProdotto(prodotto4);

 console.log("Inventario Magazzino: " + ProcessoProduzione.getProdottiCompletati());
 console.log("Inventario in Produzione: " + ProcessoProduzione.getProdottiInProduzione());

 let cliente1 = new Cliente('Jessica', 'Verdi ', 'jessica.verdi@me.com', 'Roma', 'Carta di credito', 100);
 console.log(cliente1);
 cliente1.ordinaProdotto(prodotto1);
 cliente1.ordinaProdotto(prodotto2);
 cliente1.ordinaProdotto(prodotto3);

 let cliente2 = new Cliente('Roberto', 'Rossi', 'roberto.rossi@me.com', 'Milano', 'PayPal', 50);
 console.log(cliente2);
 cliente2.ordinaProdotto(prodotto2);
 cliente2.ordinaProdotto(prodotto1);
 cliente2.ordinaProdotto(prodotto3);



