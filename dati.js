const dati = {
    essere: [
        { frase: "Io xxx felice", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Tu xxx a casa", corretta: "sei", risposte: ["sono", "sei", "è", "siete"] },
        { frase: "Lui xxx stanco", corretta: "è", risposte: ["è", "sono", "sei", "siamo"] },
        { frase: "Noi xxx contenti", corretta: "siamo", risposte: ["siamo", "sono", "siete", "è"] },
        { frase: "Voi xxx al mare", corretta: "siete", risposte: ["siete", "siamo", "sono", "è"] },
        { frase: "Loro xxx in vacanza", corretta: "sono", risposte: ["sono", "sei", "siete", "siamo"] },
        { frase: "Io xxx di Milano", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Tu xxx bravo", corretta: "sei", risposte: ["sono", "sei", "è", "siete"] },
        { frase: "Lui xxx un dottore", corretta: "è", risposte: ["è", "sono", "sei", "siamo"] },
        { frase: "Noi xxx a scuola", corretta: "siamo", risposte: ["siamo", "sono", "siete", "è"] },
        { frase: "Voi xxx amici", corretta: "siete", risposte: ["siete", "siamo", "è", "sono"] },
        { frase: "Loro xxx felici", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Io xxx stanco", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Tu xxx intelligente", corretta: "sei", risposte: ["sei", "sono", "è", "siete"] },
        { frase: "Lui xxx simpatico", corretta: "è", risposte: ["è", "sono", "sei", "siamo"] },
        { frase: "Noi xxx studenti", corretta: "siamo", risposte: ["siamo", "sono", "siete", "è"] },
        { frase: "Voi xxx gentili", corretta: "siete", risposte: ["siete", "siamo", "è", "sono"] },
        { frase: "Loro xxx in ritardo", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Io xxx a casa", corretta: "sono", risposte: ["sono", "sei", "è", "siamo"] },
        { frase: "Tu xxx un artista", corretta: "sei", risposte: ["sei", "sono", "è", "siete"] }
    ],
    avere: [
        { frase: "Io xxx un libro", corretta: "ho", risposte: ["ho", "hai", "ha", "hanno"] },
        { frase: "Tu xxx una penna", corretta: "hai", risposte: ["ho", "hai", "ha", "hanno"] },
        { frase: "Lui xxx un cane", corretta: "ha", risposte: ["ha", "hanno", "ho", "hai"] },
        { frase: "Noi xxx molti amici", corretta: "abbiamo", risposte: ["abbiamo", "hanno", "avete", "ho"] },
        { frase: "Voi xxx una casa grande", corretta: "avete", risposte: ["avete", "abbiamo", "hanno", "ho"] },
        { frase: "Loro xxx un'auto nuova", corretta: "hanno", risposte: ["hanno", "ha", "abbiamo", "avete"] },
        { frase: "Io xxx fame", corretta: "ho", risposte: ["ho", "hai", "ha", "hanno"] },
        { frase: "Tu xxx una domanda?", corretta: "hai", risposte: ["hai", "ho", "ha", "hanno"] },
        { frase: "Lui xxx molti compiti", corretta: "ha", risposte: ["ha", "hanno", "abbiamo", "avete"] },
        { frase: "Noi xxx una buona idea", corretta: "abbiamo", risposte: ["abbiamo", "hanno", "ho", "avete"] },
        { frase: "Voi xxx una sorella?", corretta: "avete", risposte: ["avete", "abbiamo", "ha", "hanno"] },
        { frase: "Loro xxx un bell'appartamento", corretta: "hanno", risposte: ["hanno", "ha", "ho", "avete"] },
        { frase: "Io xxx una bella notizia", corretta: "ho", risposte: ["ho", "hai", "ha", "hanno"] },
        { frase: "Tu xxx un lavoro interessante", corretta: "hai", risposte: ["hai", "ho", "ha", "hanno"] },
        { frase: "Lui xxx una bicicletta rossa", corretta: "ha", risposte: ["ha", "ho", "hanno", "avete"] },
        { frase: "Noi xxx un progetto da finire", corretta: "abbiamo", risposte: ["abbiamo", "hanno", "avete", "ho"] },
        { frase: "Voi xxx il biglietto per il concerto?", corretta: "avete", risposte: ["avete", "abbiamo", "ha", "hanno"] },
        { frase: "Loro xxx molto tempo libero", corretta: "hanno", risposte: ["hanno", "ha", "abbiamo", "avete"] },
        { frase: "Io xxx bisogno di aiuto", corretta: "ho", risposte: ["ho", "hai", "ha", "hanno"] },
        { frase: "Tu xxx un gatto o un cane?", corretta: "hai", risposte: ["hai", "ho", "ha", "hanno"] },
        { frase: "Lui xxx una nuova macchina fotografica", corretta: "ha", risposte: ["ha", "ho", "hanno", "avete"] },
        { frase: "Noi xxx una casa in montagna", corretta: "abbiamo", risposte: ["abbiamo", "hanno", "avete", "ho"] },
        { frase: "Voi xxx molti amici stranieri?", corretta: "avete", risposte: ["avete", "abbiamo", "ha", "hanno"] },
        { frase: "Loro xxx una festa domani", corretta: "hanno", risposte: ["hanno", "ha", "abbiamo", "avete"] },
        { frase: "Io xxx sonno", corretta: "ho", risposte: ["ho", "hai", "ha", "hanno"] }

    ],
    ausiliari: [
        // Combina "essere" e "avere"
        { frase: "Io xxx felice", corretta: "sono", risposte: ["ho", "è", "sono", "abbiamo"] }, 
        { frase: "Tu xxx una penna", corretta: "hai", risposte: ["hai", "è", "hanno", "sei"] },
        { frase: "Lui xxx stanco", corretta: "è", risposte: ["hanno", "ha", "è", "sei"] },
        { frase: "Noi xxx molti libri", corretta: "abbiamo", risposte: ["avete", "siamo", "è", "abbiamo"] },
        { frase: "Voi xxx al mare", corretta: "siete", risposte: ["siete", "ha", "avete", "sono"] },
        { frase: "Loro xxx un cane", corretta: "hanno", risposte: ["è", "abbiamo", "hanno", "sono"] },
        { frase: "Io xxx di Milano", corretta: "sono", risposte: ["ho", "è", "sono", "hanno"] },
        { frase: "Tu xxx fame", corretta: "hai", risposte: ["abbiamo", "hai", "sono", "sei"] },
        { frase: "Lui xxx un frigorifero", corretta: "ha", risposte: ["ha", "è", "sei", "hanno"] },
        { frase: "Noi xxx una buona idea", corretta: "abbiamo", risposte: ["ho", "è", "siamo", "abbiamo"] },
        
        { frase: "Voi xxx gentili", corretta: "siete", risposte: ["sei", "avete", "siete", "abbiamo"] },
        { frase: "Loro xxx in vacanza", corretta: "sono", risposte: ["hanno", "sono", "è", "abbiamo"] },
        { frase: "Io xxx un problema", corretta: "ho", risposte: ["ho", "sei", "è", "sono"] },
        { frase: "Tu xxx stanco?", corretta: "sei", risposte: ["hai", "sei", "hanno", "sono"] },
        { frase: "Lui xxx due fratelli", corretta: "ha", risposte: ["ha", "è", "sono", "abbiamo"] },
        { frase: "Noi xxx molto freddo", corretta: "abbiamo", risposte: ["abbiamo", "siamo", "ha", "è"] },
        { frase: "Voi xxx un libro interessante", corretta: "avete", risposte: ["avete", "sei", "è", "sono"] },
        { frase: "Loro xxx simpatici", corretta: "sono", risposte: ["sono", "hanno", "ha", "abbiamo"] },
        { frase: "Io xxx sempre felice", corretta: "sono", risposte: ["sono", "ho", "ha", "hanno"] },
        { frase: "Tu xxx una macchina nuova?", corretta: "hai", risposte: ["hai", "sei", "sono", "avete"] },
        { frase: "Lui xxx molto coraggioso", corretta: "è", risposte: ["è", "ha", "abbiamo", "sono"] },
        { frase: "Noi xxx una lezione domani", corretta: "abbiamo", risposte: ["abbiamo", "siamo", "è", "hanno"] },
        { frase: "Voi xxx felici?", corretta: "siete", risposte: ["siete", "avete", "sono", "ha"] },
        { frase: "Loro xxx bisogno di aiuto", corretta: "hanno", risposte: ["hanno", "è", "siamo", "sono"] },
        { frase: "Io xxx un'idea interessante", corretta: "ho", risposte: ["ho", "sei", "sono", "hanno"] },

    ],
    artDet: [
        { "frase": "xxx isola", "corretta": "l'", "risposte": ["il", "lo", "l'", "la"] },
        { "frase": "xxx studenti", "corretta": "gli", "risposte": ["i", "gli", "lo", "l'"] },
        { "frase": "xxx zaino", "corretta": "lo", "risposte": ["il", "lo", "l'", "gli"] },
        { "frase": "xxx mele", "corretta": "le", "risposte": ["i", "gli", "le", "la"] },
        { "frase": "xxx orologio", "corretta": "l'", "risposte": ["il", "lo", "i", "l'"] },
        { "frase": "xxx specchio", "corretta": "lo", "risposte": ["il", "lo", "l'", "gli"] },
        { "frase": "xxx finestre", "corretta": "le", "risposte": ["i", "gli", "le", "la"] },
        { "frase": "xxx amici", "corretta": "gli", "risposte": ["i", "gli", "lo", "l'"] },
        { "frase": "xxx stella", "corretta": "la", "risposte": ["il", "lo", "la", "l'"] },
        { "frase": "xxx fiumi", "corretta": "i", "risposte": ["i", "gli", "lo", "le"] }
  ],
artIndet: [
    { "frase": "xxx isola", "corretta": "un'", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx studente", "corretta": "uno", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx zaino", "corretta": "uno", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx mela", "corretta": "una", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx orologio", "corretta": "un", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx specchio", "corretta": "uno", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx finestra", "corretta": "una", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx amica", "corretta": "un'", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx stella", "corretta": "una", "risposte": ["un", "uno", "una", "un'"] },
    { "frase": "xxx fiume", "corretta": "un", "risposte": ["un", "uno", "una", "un'"] }
  ],
  preposizioni: [
    { "frase": "La storia è scritta xxx questo libro.", "corretta": ["su"], "risposte": ["su", "da", "in", "tra","di"] },
    { "frase": "Vado xxx medico.", "corretta": ["dal"], "risposte": ["al", "dal", "per", "a","con"] },
    { "frase": "Abito xxx Roma.", "corretta": ["a","in"], "risposte": ["in", "da", "a", "su","per"] },
    { "frase": "Parliamo xxx sport e musica.", "corretta": ["di"], "risposte": ["di", "a", "in", "tra","con"] },
    { "frase": "Mario va xxx scuola.", "corretta": ["a", "alla"], "risposte": ["per", "a", "dalla", "alla", "sulla"] },
     
  ]
  
  
};
