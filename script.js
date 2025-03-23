// Imposta il credito iniziale
if (!localStorage.getItem('credito')) {
    localStorage.setItem('credito', 100);  // Imposta il credito iniziale a 100 euro
}

// Funzione per mostrare il credito corrente
function mostraCredito() {
    let credito = localStorage.getItem('credito');
    document.getElementById('credito').innerText = `Credito disponibile: €${credito}`;
}

// Funzione per effettuare una scommessa
function effettuaScommessa(importo) {
    let credito = parseFloat(localStorage.getItem('credito'));
    if (credito >= importo) {
        credito -= importo;
        localStorage.setItem('credito', credito);  // Aggiorna il credito
        mostraCredito();
        alert('Scommessa effettuata con successo!');
    } else {
        alert('Credito insufficiente per effettuare questa scommessa!');
    }
}

// Inizializza il sito e mostra il credito
window.onload = function() {
    mostraCredito();  // Mostra il credito all'inizio
};

// Esempio di utilizzo:
// Effettua una scommessa di 10 euro
function scommetti10() {
    effettuaScommessa(10);  // Scommetti 10 euro
}
