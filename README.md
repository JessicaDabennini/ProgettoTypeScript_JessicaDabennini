Questo progetto TypeScript simula un sistema di gestione della produzione e vendita di prodotti. Include tre entità principali: Prodotto, Cliente, e ProcessoProduzione, ognuna con le proprie interfacce e classi di implementazione.

Interfacce
Iprodotto: Definisce le proprietà e i metodi per un prodotto.
Icliente: Definisce le proprietà e i metodi per un cliente.
IprocessoProduzione: Definisce le proprietà e i metodi per un processo di produzione.

Classi
Prodotto: Implementa l'interfaccia Iprodotto e aggiunge la proprietà prezzo.

class Prodotto implements Iprodotto {
    // Costruttore e metodi
}

Cliente: Implementa l'interfaccia Icliente e aggiunge le proprietà indirizzo e saldoConto.

class Cliente implements Icliente {
    // Costruttore e metodi
}

ProcessoProduzione: Implementa l'interfaccia IprocessoProduzione e aggiunge metodi statici per ottenere i prodotti in produzione e completati.

class ProcessoProduzione implements IprocessoProduzione {
    // Costruttore e metodi
}

Esempi di Utilizzo

Creazione di Prodotti

let prodotto1 = new Prodotto(1, 'Bikini', 42, 'blu', true, 50);
let prodotto2 = new Prodotto(2, 'Pantaloncini', 48, 'rosso', false, 70);
let prodotto3 = new Prodotto(3, 'Pareo', 38, 'verde', true, 90);
let prodotto4 = new Prodotto(4, 'Slip', 52, 'arancio', true, 30);

Creazione di Processi di Produzione

let processoProduzione1 = new ProcessoProduzione('completato', [prodotto1], ProcessoProduzione.descrizione, true);
let processoProduzione2 = new ProcessoProduzione('produzione', [prodotto2], ProcessoProduzione.descrizione, false);
processoProduzione1.aggiungiProdotto(prodotto1);
processoProduzione2.aggiungiProdotto(prodotto2);

Creazione di Clienti e Ordini

let cliente1 = new Cliente('Jessica', 'Verdi', 'jessica.dabennini@me.com', 'Roma', 'Carta di credito', 100);
cliente1.ordinaProdotto(prodotto1);
cliente1.ordinaProdotto(prodotto2);
let cliente2 = new Cliente('Roberto', 'Rossi', 'roberto.rossi@me.com', 'Milano', 'PayPal', 50);
cliente2.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto3);

Controllo dello Stato della Produzione

console.log("Inventario Magazzino: " + ProcessoProduzione.getProdottiCompletati());
console.log("Inventario in Produzione: " + ProcessoProduzione.getProdottiInProduzione());