const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = teachers.filter((word) => word.length >= 5);

// la funzione filter() possiede una callbackFn(call back function), che itera per ogni elemento dell'array
// e restituisce un boolean (un ciclo for non esplicitato); crea una copia (o clone) dell'array originale
// contenente tutti gli elementi che soddifano la condizione indicata dopo l'indicatore "=>" della funzione.

// Questa funzione viene chiamata con i seguenti argomenti:
//  - l'elemento dell'array processato al momento; (in questo caso una stringa)
//  - l'index dell'elemento processato al momento; 
//  - l'array sul quale la funzione 'filter()' ha effetto.


console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

// se si utilizza l'array originale:

// teachers.splice(1, 1);
// console.log(teachers);

// se si utilizza l'array invertito (es. 1); funziona solamente in sostituzione del medoto sopra:

teachers.splice(5, 1);
console.log(teachers);