<h1>Questo progetto TypeScript simula un sistema di gestione della produzione e vendita di prodotti.</h1>  
<h2>Include tre entità principali:
Prodotto, Cliente, e ProcessoProduzione, ognuna con le proprie interfacce e classi di implementazione.</h2>

<h1>Interfacce</h1>
<p>Iprodotto: Definisce le proprietà e i metodi per un prodotto.</p>
<p>Icliente: Definisce le proprietà e i metodi per un cliente.</p>
<p>IprocessoProduzione: Definisce le proprietà e i metodi per un processo di produzione.</p>

<h1>Classi</h1>

<h2>Prodotto: Implementa l'interfaccia Iprodotto.</h2>

<p>class Prodotto implements Iprodotto {
    // Costruttore e metodi
}</p>

<h2>Cliente: Implementa l'interfaccia Icliente.</h2>

<p>class Cliente implements Icliente {
    // Costruttore e metodi
}</p>

<h2>ProcessoProduzione: Implementa l'interfaccia IprocessoProduzione e aggiunge metodi statici per ottenere i prodotti in produzione e completati.</h2>

<p>class ProcessoProduzione implements IprocessoProduzione {
    // Costruttore e metodi
}</p>

<h1>Esempi di Utilizzo</h1>

<h2>Creazione di Prodotti</h2>

<p>let prodotto1 = new Prodotto(1, 'Bikini', 42, 'blu', true, 50);</p>
<p>let prodotto2 = new Prodotto(2, 'Pantaloncini', 48, 'rosso', false, 70);</p>
<p>let prodotto3 = new Prodotto(3, 'Pareo', 38, 'verde', true, 90);</p>
<p>let prodotto4 = new Prodotto(4, 'Slip', 52, 'arancio', true, 30);</p>

<h2>Creazione di Processi di Produzione</h2>

<p>let processoProduzione1 = new ProcessoProduzione('completato', [prodotto1], ProcessoProduzione.descrizione, true);</p>
<p>let processoProduzione2 = new ProcessoProduzione('produzione', [prodotto2], ProcessoProduzione.descrizione, false);</p>
<p>processoProduzione1.aggiungiProdotto(prodotto1);</p>
<p>processoProduzione2.aggiungiProdotto(prodotto2);</p>

<h2>Creazione di Clienti e Ordini</h2>

<p>let cliente1 = new Cliente('Jessica', 'Verdi', 'jessica.verdi@me.com', 'Roma', 'Carta di credito', 100);</p>
<p>cliente1.ordinaProdotto(prodotto1);</p>
<p>cliente1.ordinaProdotto(prodotto2);</p>
<p>let cliente2 = new Cliente('Roberto', 'Rossi', 'roberto.rossi@me.com', 'Milano', 'PayPal', 50);</p>
<p>cliente2.ordinaProdotto(prodotto1);</p>
<p>cliente2.ordinaProdotto(prodotto3);</p>

<h2>Controllo dello Stato della Produzione</h2>

<p>console.log("Inventario Magazzino: " + ProcessoProduzione.getProdottiCompletati());</p>
<p>console.log("Inventario in Produzione: " + ProcessoProduzione.getProdottiInProduzione());</p>