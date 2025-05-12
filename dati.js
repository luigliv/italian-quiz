 const dati = {
  essere: [
    { frase: "Io xxx felice", corretta: ["sono"], risposte: ["sei", "sono", "è", "siete"] },
    { frase: "Tu xxx italiano", corretta: ["sei"], risposte: ["sono", "sei", "è", "siete"] },
    { frase: "Lui xxx alto", corretta: ["è"], risposte: ["sono", "sei", "è", "siete"] },
    { frase: "Noi xxx studenti", corretta: ["siamo"], risposte: ["siamo", "siete", "sono", "è"] },
    { frase: "Voi xxx simpatici", corretta: ["siete"], risposte: ["sei", "siete", "sono", "è"] },
    { frase: "Loro xxx felici", corretta: ["sono"], risposte: ["siete", "è", "sono", "siamo"] }
  ],
  avere: [
    { frase: "Io xxx una casa", corretta: ["ho"], risposte: ["hai", "ho", "ha", "abbiamo"] },
    { frase: "Tu xxx un cane", corretta: ["hai"], risposte: ["ho", "hai", "ha", "avete"] },
    { frase: "Lui xxx una macchina", corretta: ["ha"], risposte: ["hai", "ho", "ha", "hanno"] },
    { frase: "Noi xxx due figli", corretta: ["abbiamo"], risposte: ["abbiamo", "avete", "hanno", "ho"] },
    { frase: "Voi xxx un problema", corretta: ["avete"], risposte: ["hai", "avete", "hanno", "ha"] },
    { frase: "Loro xxx fame", corretta: ["hanno"], risposte: ["ha", "hanno", "abbiamo", "hai"] }
  ],
  ausiliari: [
    { frase: "Io sono xxx a casa", corretta: ["rimasto"], risposte: ["mangiato", "rimasto", "avuto", "detto"] },
    { frase: "Lui ha xxx il pranzo", corretta: ["mangiato"], risposte: ["andato", "mangiato", "venuto", "partito"] },
    { frase: "Noi siamo xxx al cinema", corretta: ["andati"], risposte: ["detti", "visti", "andati", "mangiati"] },
    { frase: "Loro hanno xxx un film", corretta: ["visto"], risposte: ["visto", "andato", "partito", "arrivato"] },
    { frase: "Tu sei xxx tardi", corretta: ["arrivato"], risposte: ["mangiato", "avuto", "arrivato", "preso"] },
    { frase: "Voi avete xxx il treno", corretta: ["preso"], risposte: ["partiti", "preso", "andati", "detto"] }
  ],
  artDet: [
    { frase: "xxx ragazzo", corretta: ["il"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx studente", corretta: ["lo"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx amica", corretta: ["l'"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx mela", corretta: ["la"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx zio", corretta: ["lo"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx libro", corretta: ["il"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx scuola", corretta: ["la"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx orologio", corretta: ["l'"], risposte: ["il", "lo", "la", "l'"] },
    { frase: "xxx uomini", corretta: ["gli"], risposte: ["i", "gli", "le", "lo"] },
    { frase: "xxx case", corretta: ["le"], risposte: ["i", "gli", "le", "la"] }
  ],
  artIndet: [
    { frase: "xxx isola", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx studente", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx zaino", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx mela", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx orologio", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx specchio", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx finestra", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx amica", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx stella", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
    { frase: "xxx fiume", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] }
  ],
  preposizioni: [
    { frase: "Vado xxx Roma", corretta: ["a"], risposte: ["a", "in", "da", "su"] },
    { frase: "Abito xxx Italia", corretta: ["in"], risposte: ["a", "in", "da", "su"] },
    { frase: "Vengo xxx Francia", corretta: ["da"], risposte: ["a", "in", "da", "di"] },
    { frase: "Metto il libro xxx tavolo", corretta: ["su"], risposte: ["a", "in", "da", "su"] },
    { frase: "La penna è xxx borsa", corretta: ["nella"], risposte: ["nella", "sulla", "alla", "dalla"] },
    { frase: "Esco xxx casa", corretta: ["di"], risposte: ["di", "da", "in", "con"] },
    { frase: "Studio xxx biblioteca", corretta: ["in"], risposte: ["in", "a", "da", "su"] },
    { frase: "Il gatto è xxx sedia", corretta: ["sulla"], risposte: ["sulla", "nella", "alla", "dalla"] },
    { frase: "Parto xxx Milano", corretta: ["per"], risposte: ["per", "da", "in", "a"] },
    { frase: "Arrivo xxx stazione", corretta: ["alla"], risposte: ["alla", "nella", "sulla", "da"] }
  ]
};

