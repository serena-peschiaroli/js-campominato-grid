### Esercizio

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### DATI:
1. numeri da 1 a (n) [100 || 81 || 49];
2. click su cella---> cella si colora di azzurro ed emette messaggio in console con numero

### Logica: 

1. creare la griglia con una funzione (da richiamare con un addeventlistener sul btn in html) ed un ciclo di for per numerarle (al click) 
2. funzione che al click colora cella di azzurro 
3. funzione che crea la griglia a seconda della difficoltà 

