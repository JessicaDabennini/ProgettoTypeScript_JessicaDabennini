<h1>Questo progetto TypeScript simula un sistema di gestione della produzione e vendita di prodotti. Include tre entità principali:</h1> 
<h2>Prodotto, Cliente, e ProcessoProduzione, ognuna con le proprie interfacce e classi di implementazione.</h2>

<h1>Interfacce</h1>
Iprodotto: Definisce le proprietà e i metodi per un prodotto.
Icliente: Definisce le proprietà e i metodi per un cliente.
IprocessoProduzione: Definisce le proprietà e i metodi per un processo di produzione.

<h1>Classi</h1>

<h2>Prodotto: Implementa l'interfaccia Iprodotto e aggiunge la proprietà prezzo.</h2>
>
class Prodotto implements Iprodotto {
    // Costruttore e metodi
}

<h2>Cliente: Implementa l'interfaccia Icliente e aggiunge le proprietà indirizzo e saldoConto.</h2>

class Cliente implements Icliente {
    // Costruttore e metodi
}

<h2>ProcessoProduzione: Implementa l'interfaccia IprocessoProduzione e aggiunge metodi statici per ottenere i prodotti in produzione e completati.</h2>

class ProcessoProduzione implements IprocessoProduzione {
    // Costruttore e metodi
}

<h1>Esempi di Utilizzo</h1>

<h2>Creazione di Prodotti</h2>

let prodotto1 = new Prodotto(1, 'Bikini', 42, 'blu', true, 50);
let prodotto2 = new Prodotto(2, 'Pantaloncini', 48, 'rosso', false, 70);
let prodotto3 = new Prodotto(3, 'Pareo', 38, 'verde', true, 90);
let prodotto4 = new Prodotto(4, 'Slip', 52, 'arancio', true, 30);

<h2>Creazione di Processi di Produzione</h2>

let processoProduzione1 = new ProcessoProduzione('completato', [prodotto1], ProcessoProduzione.descrizione, true);
let processoProduzione2 = new ProcessoProduzione('produzione', [prodotto2], ProcessoProduzione.descrizione, false);
processoProduzione1.aggiungiProdotto(prodotto1);
processoProduzione2.aggiungiProdotto(prodotto2);

<h2>Creazione di Clienti e Ordini</h2>

let cliente1 = new Cliente('Jessica', 'Verdi', 'jessica.dabennini@me.com', 'Roma', 'Carta di credito', 100);
cliente1.ordinaProdotto(prodotto1);
cliente1.ordinaProdotto(prodotto2);
let cliente2 = new Cliente('Roberto', 'Rossi', 'roberto.rossi@me.com', 'Milano', 'PayPal', 50);
cliente2.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto3);

<h2>Controllo dello Stato della Produzione</h2>

console.log("Inventario Magazzino: " + ProcessoProduzione.getProdottiCompletati());
console.log("Inventario in Produzione: " + ProcessoProduzione.getProdottiInProduzione());