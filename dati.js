  
   const dati = {
    "Verbo Essere. Presente indicativo": [
      { frase: "Io xxx felice", corretta: ["sono"], risposte: ["sei", "sono", "è", "siete"] },
      { frase: "Tu xxx italiano", corretta: ["sei"], risposte: ["sono", "sei", "è", "siete"] },
      { frase: "Lui xxx alto", corretta: ["è"], risposte: ["sono", "sei", "è", "siete"] },
      { frase: "Noi xxx studenti", corretta: ["siamo"], risposte: ["siamo", "siete", "sono", "è"] },
      { frase: "Voi xxx simpatici", corretta: ["siete"], risposte: ["sei", "siete", "sono", "è"] },
      { frase: "Loro xxx felici", corretta: ["sono"], risposte: ["siete", "è", "sono", "siamo"] },
      { frase: "Io xxx stanco", corretta: ["sono"], risposte: ["sei", "sono", "è", "siete"] },
      { frase: "Tu xxx felice", corretta: ["sei"], risposte: ["sono", "sei", "è", "siete"] },
      { frase: "Lui xxx intelligente", corretta: ["è"], risposte: ["sono", "sei", "è", "siamo"] },
      { frase: "Lei xxx gentile", corretta: ["è"], risposte: ["è", "sono", "sei", "siete"] },
      { frase: "Noi xxx pronti", corretta: ["siamo"], risposte: ["siamo", "siete", "sono", "è"] },
      { frase: "Voi xxx occupati", corretta: ["siete"], risposte: ["siete", "siamo", "sono", "è"] },
      { frase: "Loro xxx malati", corretta: ["sono"], risposte: ["sono", "sei", "siete", "siamo"] },
      { frase: "Io xxx a casa", corretta: ["sono"], risposte: ["sono", "sei", "è", "siete"] },
      { frase: "Tu xxx al lavoro", corretta: ["sei"], risposte: ["sei", "sono", "è", "siamo"] },
      { frase: "Lui xxx in ritardo", corretta: ["è"], risposte: ["è", "sono", "siamo", "siete"] },
      { frase: "Lei xxx in vacanza", corretta: ["è"], risposte: ["è", "sono", "sei", "siamo"] },
      { frase: "Noi xxx amici", corretta: ["siamo"], risposte: ["siamo", "siete", "sono", "è"] },
      { frase: "Voi xxx pronti", corretta: ["siete"], risposte: ["siete", "siamo", "sono", "è"] },
      { frase: "Loro xxx occupati", corretta: ["sono"], risposte: ["sono", "sei", "siete", "siamo"] },
      { frase: "Io xxx contento", corretta: ["sono"], risposte: ["sono", "sei", "è", "siete"] },
      { frase: "Tu xxx coraggioso", corretta: ["sei"], risposte: ["sei", "sono", "è", "siete"] },
      { frase: "Lui xxx in gamba", corretta: ["è"], risposte: ["è", "sono", "sei", "siamo"] },
      { frase: "Lei xxx ricca", corretta: ["è"], risposte: ["è", "sono", "sei", "siete"] },
      { frase: "Noi xxx stanchi", corretta: ["siamo"], risposte: ["siamo", "siete", "sono", "è"] },
      { frase: "Voi xxx felici", corretta: ["siete"], risposte: ["siete", "siamo", "sono", "è"] },
      { frase: "Loro xxx intelligenti", corretta: ["sono"], risposte: ["sono", "sei", "siete", "siamo"] }

    ],
    "Verbo Avere. Presente indicativo": [
      { frase: "Io xxx una casa", corretta: ["ho"], risposte: ["hai", "ho", "ha", "abbiamo"] },
      { frase: "Tu xxx un cane", corretta: ["hai"], risposte: ["ho", "hai", "ha", "avete"] },
      { frase: "Lui xxx una macchina", corretta: ["ha"], risposte: ["hai", "ho", "ha", "hanno"] },
      { frase: "Noi xxx due figli", corretta: ["abbiamo"], risposte: ["abbiamo", "avete", "hanno", "ho"] },
      { frase: "Voi xxx un problema", corretta: ["avete"], risposte: ["hai", "avete", "hanno", "ha"] },
      { frase: "Loro xxx fame", corretta: ["hanno"], risposte: ["ha", "hanno", "abbiamo", "hai"] },
      { frase: "Io xxx sonno", corretta: ["ho"], risposte: ["ho", "hai", "ha", "hanno"] },
      { frase: "Tu xxx ragione", corretta: ["hai"], risposte: ["ho", "hai", "ha", "hanno"] },
      { frase: "Lui xxx paura", corretta: ["ha"], risposte: ["ha", "ho", "hanno", "hai"] },
      { frase: "Lei xxx sete", corretta: ["ha"], risposte: ["ha", "hanno", "ho", "hai"] },
      { frase: "Noi xxx tempo", corretta: ["abbiamo"], risposte: ["abbiamo", "hanno", "avete", "ho"] },
      { frase: "Voi xxx fretta", corretta: ["avete"], risposte: ["avete", "abbiamo", "hanno", "ho"] },
      { frase: "Loro xxx bisogno", corretta: ["hanno"], risposte: ["hanno", "ha", "abbiamo", "avete"] },
      { frase: "Io xxx un’idea", corretta: ["ho"], risposte: ["ho", "hai", "hanno", "avete"] },
      { frase: "Tu xxx un sogno", corretta: ["hai"], risposte: ["hai", "ho", "ha", "hanno"] },
      { frase: "Lui xxx un dubbio", corretta: ["ha"], risposte: ["ha", "hanno", "ho", "hai"] },
      { frase: "Lei xxx un problema", corretta: ["ha"], risposte: ["ha", "ho", "hanno", "hai"] },
      { frase: "Noi xxx due macchine", corretta: ["abbiamo"], risposte: ["abbiamo", "avete", "hanno", "ho"] },
      { frase: "Voi xxx una soluzione", corretta: ["avete"], risposte: ["avete", "abbiamo", "hanno", "ha"] },
      { frase: "Loro xxx molto lavoro", corretta: ["hanno"], risposte: ["hanno", "ha", "abbiamo", "avete"] },
      { frase: "Io xxx un segreto", corretta: ["ho"], risposte: ["ho", "hai", "ha", "hanno"] },
      { frase: "Tu xxx un biglietto", corretta: ["hai"], risposte: ["hai", "ho", "hanno", "avete"] },
      { frase: "Lui xxx un regalo", corretta: ["ha"], risposte: ["ha", "ho", "hanno", "hai"] },
      { frase: "Noi xxx un progetto", corretta: ["abbiamo"], risposte: ["abbiamo", "avete", "hanno", "ho"] },
      { frase: "Voi xxx un’opportunità", corretta: ["avete"], risposte: ["avete", "abbiamo", "ha", "hanno"] },
      { frase: "Loro xxx un invito", corretta: ["hanno"], risposte: ["hanno", "ha", "abbiamo", "avete"] }

    ],
    
    "Participio passato": [
     
    { frase: "(Verbo: rimanere) Io sono xxx a casa", corretta: ["rimasto"], risposte: ["rimanuto", "rimesso", "rimasto", "rimanto"] },
    { frase: "(Verbo: fare) Abbiamo xxx i compiti", corretta: ["fatto"], risposte: ["fatto", "fatti", "fatta", "fatuto"] },
    { frase: "(Verbo: vedere) Hai xxx il film?", corretta: ["visto"], risposte: ["veduto", "visto", "vedato", "vissuto"] },
    { frase: "(Verbo: dire) Marco ha xxx la verità", corretta: ["detto"], risposte: ["detto", "dicto", "disto", "deto"] },
    { frase: "(Verbo: prendere) Ho xxx un caffè", corretta: ["preso"], risposte: ["prenduto", "preso", "presso", "presto"] },
    { frase: "(Verbo: venire) Siamo xxx a piedi", corretta: ["venuti"], risposte: ["venati", "venuti", "venato", "veniti"] },
    { frase: "(Verbo: aprire) Hai xxx la finestra?", corretta: ["aperto"], risposte: ["aperto", "aprito", "apperto", "apruto"] },
    { frase: "(Verbo: leggere) Ho xxx quel libro", corretta: ["letto"], risposte: ["lettato", "letto", "leggiuto", "leto"] },
    { frase: "(Verbo: scrivere) Lucia ha xxx una poesia", corretta: ["scritto"], risposte: ["scrivuto", "scrivito", "scritto", "scrito"] },
    { frase: "(Verbo: essere) Sono xxx a Roma", corretta: ["stato"], risposte: ["stato", "essuto", "essato", "essito"] },

    { frase: "(Verbo: correre) Ho xxx per prendere il treno", corretta: ["corso"], risposte: ["corso", "corruto", "corrito", "corsuto"] },
    { frase: "(Verbo: scegliere) Hai xxx il colore?", corretta: ["scelto"], risposte: ["scelto", "scegliuto", "sceltato", "scelguto"] },
    { frase: "(Verbo: perdere) Abbiamo xxx le chiavi", corretta: ["perso"], risposte: ["perduto", "perso", "perdito", "perdato"] },
    { frase: "(Verbo: chiudere) Hai xxx la porta?", corretta: ["chiuso"], risposte: ["chiuso", "chiudato", "chiudito", "chiusato"] },
    { frase: "(Verbo: nascere) Mio fratello è xxx a maggio", corretta: ["nato"], risposte: ["nato", "nascuto", "nasciuto", "nasciato"] },
    { frase: "(Verbo: mettere) Ho xxx il libro sul tavolo", corretta: ["messo"], risposte: ["messo", "mettuto", "mettato", "meso"] },
    { frase: "(Verbo: morire) Il gatto è xxx ieri", corretta: ["morto"], risposte: ["morto", "moruto", "morrato", "morrito"] },
    { frase: "(Verbo: rispondere) Hai xxx alla domanda?", corretta: ["risposto"], risposte: ["risposto", "risponduto", "rispoto", "risposo"] },
    { frase: "(Verbo: scendere) Sono xxx dall'autobus", corretta: ["sceso"], risposte: ["scenduto", "sceso", "scendato", "scesso"] },
    { frase: "(Verbo: vivere) Ha xxx in Italia per due anni", corretta: ["vissuto"], risposte: ["vissuto", "vivuto", "visto", "vivato"] },

    { frase: "(Verbo: parlare) Ieri ho xxx con Lucia", corretta: ["parlato"], risposte: ["parlato", "parlata", "parlatto", "parluto"] },
    { frase: "(Verbo: mangiare) Abbiamo xxx la pizza", corretta: ["mangiato"], risposte: ["mangiato", "mangiata", "mangiatto", "mangato"] },
    { frase: "(Verbo: guardare) Hai xxx quel film?", corretta: ["guardato"], risposte: ["guardato", "guardita", "guarduto", "guardita"] },
    { frase: "(Verbo: ascoltare) Ho xxx la tua canzone", corretta: ["ascoltato"], risposte: ["ascoltato", "ascoltatto", "ascoltata", "ascoltuto"] },
    { frase: "(Verbo: lavorare) Maria ha xxx tutto il giorno", corretta: ["lavorato"], risposte: ["lavorato", "lavorata", "lavoruto", "lavoratto"] },
    { frase: "(Verbo: abitare) Ho xxx a Roma per due anni", corretta: ["abitato"], risposte: ["abitato", "abituta", "abitata", "abituato"] },
    { frase: "(Verbo: camminare) Abbiamo xxx per ore", corretta: ["camminato"], risposte: ["camminato", "camminito", "camminuta", "camminatto"] },
    { frase: "(Verbo: studiare) Hai xxx per l’esame?", corretta: ["studiato"], risposte: ["studiato", "studiatto", "studiuta", "studata"] },
    { frase: "(Verbo: comprare) Ho xxx il pane", corretta: ["comprato"], risposte: ["comprato", "compruta", "compreso", "compratto"] },
    { frase: "(Verbo: telefonare) Marco ha xxx a sua madre", corretta: ["telefonato"], risposte: ["telefonato", "telefonatto", "telefonuto", "telefonata"] }
  ],
    "Passato prossimo" : [
  { frase: "(Verbo: telefonare) Marco xxx a sua madre", corretta: ["ha telefonato"], risposte: ["ha telefonato", "ho telefonato", "è telefonato", "ha telefonata"] },
  { frase: "(Verbo: vivere) Ha xxx in Italia per due anni", corretta: ["ha vissuto", "è vissuto"], risposte: ["è vissuto", "ha vissuto", "è vivuto", "ha vivato"] },
  { frase: "(Verbo: scrivere) Lui xxx una lunga lettera", corretta: ["ha scritto"], risposte: ["ha scritto", "è scritto", "ha scrivuto", "ha scritta"] },
  { frase: "(Verbo: salire) Noi xxx sul treno", corretta: ["siamo saliti"], risposte: ["siamo saliti", "abbiamo saliti", "sono saliti", "siamo salito"] },
  { frase: "(Verbo: vedere) Io xxx un bel film", corretta: ["ho visto"], risposte: ["ho visto", "ho veduto", "sono visto", "ha visto"] },
  { frase: "(Verbo: restare) Loro xxx a casa tutto il giorno", corretta: ["sono restati"], risposte: ["sono restati", "hanno restato", "sono restato", "sono restata"] },
  { frase: "(Verbo: accendere) Marco xxx la luce", corretta: ["ha acceso"], risposte: ["ha acceso", "ha accenduto", "è acceso", "ho acceso"] },
  { frase: "(Verbo: arrivare) Lei xxx in ritardo", corretta: ["è arrivata"], risposte: ["è arrivata", "ha arrivata", "è arrivato", "è arrivate"] },
  { frase: "(Verbo: perdere) Voi xxx le chiavi", corretta: ["avete perso"], risposte: ["avete perso", "siete persi", "avete perduto", "ha perso"] },
  { frase: "(Verbo: svegliarsi) Io mi xxx tardi", corretta: ["sono svegliato"], risposte: ["sono svegliato", "ho svegliato", "mi ho svegliato", "mi è svegliato"] },
  { frase: "(Verbo: leggere) Tu xxx quel libro?", corretta: ["hai letto"], risposte: ["hai letto", "sei letto", "hai lettato", "hai leggiuto"] },
  { frase: "(Verbo: uscire) Noi xxx alle otto", corretta: ["siamo usciti"], risposte: ["siamo usciti", "abbiamo usciti", "sono usciti", "siamo uscita"] },
  { frase: "(Verbo: cadere) Lei xxx dalle scale", corretta: ["è caduta"], risposte: ["è caduta", "ha caduto", "è caduto", "ha caduta"] },
  { frase: "(Verbo: dormire) I bambini xxx bene", corretta: ["hanno dormito"], risposte: ["hanno dormito", "sono dormiti", "hanno dormati", "ha dormito"] },
  { frase: "(Verbo: bere) Noi xxx troppa acqua", corretta: ["abbiamo bevuto"], risposte: ["abbiamo bevuto", "abbiamo beuto", "siamo bevuti", "abbiamo beviti"] },
  { frase: "(Verbo: partire) Tu xxx presto?", corretta: ["sei partito"], risposte: ["sei partito", "hai partito", "sei partiti", "sei partita"] },
  { frase: "(Verbo: scendere) Io xxx per le scale lentamente", corretta: ["sono sceso"], risposte: ["sono sceso", "ho sceso", "è scesa", "ho scenduto"] },
  { frase: "(Verbo: comprare) Loro xxx una casa nuova", corretta: ["hanno comprato"], risposte: ["hanno comprato", "sono comprati", "ha comprato", "hanno comprare"] },
  { frase: "(Verbo: finire) Tu xxx i compiti?", corretta: ["hai finito"], risposte: ["hai finito", "sei finito", "hai finati", "sei finita"] },
  { frase: "(Verbo: diventare) Lui xxx famoso", corretta: ["è diventato", "è divenuto"], risposte: ["è diventato", "ha diventato", "è divenuto", "è diventata"] },

  // Frasi aggiunte
  { frase: "(Verbo: correre) Voi xxx al parco", corretta: ["siete corsi"], risposte: ["siete corsi", "avete corso", "sono corso", "siete corso"] },
  { frase: "(Verbo: piovere) Ieri xxx tutto il giorno", corretta: ["ha piovuto"], risposte: ["ha piovuto", "è piovuto", "piovette", "ha piovato"] }
    ],
    "Articoli Determinativi": [
      { frase: "xxx ragazzo", corretta: ["il"], risposte: ["il", "lo", "la", "l'"] },
      { frase: "xxx fiore", corretta: ["il"], risposte: ["il", "lo", "la", "l'"] },
      { frase: "xxx studio", corretta: ["lo"], risposte: ["lo", "il", "la", "l'"] },
      { frase: "xxx amica", corretta: ["l'"], risposte: ["l'", "la", "il", "lo"] },
      { frase: "xxx casa", corretta: ["la"], risposte: ["la", "l'", "lo", "il"] },
      { frase: "xxx zaino", corretta: ["lo"], risposte: ["lo", "il", "la", "l'"] },
      { frase: "xxx mela", corretta: ["la"], risposte: ["la", "l'", "gli", "lo"] },
      { frase: "xxx orologio", corretta: ["l'"], risposte: ["l'", "il", "lo", "la"] },
      { frase: "xxx amico", corretta: ["l'"], risposte: ["l'", "il", "lo", "la"] },
      { frase: "xxx specchio", corretta: ["lo"], risposte: ["lo", "il", "la", "l'"] },
      { frase: "xxx stella", corretta: ["la"], risposte: ["la", "l'", "lo", "il"] },
      { frase: "xxx uomini", corretta: ["gli"], risposte: ["gli", "i", "le", "lo"] },
      { frase: "xxx case", corretta: ["le"], risposte: ["le", "i", "gli", "la"] },
      { frase: "xxx alberi", corretta: ["gli"], risposte: ["gli", "i", "le", "lo"] },
      { frase: "xxx acqua", corretta: ["l'"], risposte: ["l'", "la", "il", "le"] },
      { frase: "xxx donne", corretta: ["le"], risposte: ["le", "gli", "i", "la"] },
      { frase: "xxx occhio", corretta: ["l'"], risposte: ["l'", "lo", "il", "gli"] },
      { frase: "xxx zii", corretta: ["gli"], risposte: ["gli", "i", "le", "lo"] },
      { frase: "xxx mano", corretta: ["la"], risposte: ["la", "le", "l'", "il"] },
      { frase: "xxx ombrello", corretta: ["l'"], risposte: ["l'", "lo", "il", "la"] },
      { frase: "xxx fiori", corretta: ["i"], risposte: ["i", "gli", "le", "lo"] },

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
    "Articoli Indeterminativi": [
      { frase: "xxx isola", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx arancia", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx studente", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx zaino", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx mela", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx orologio", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx amico", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx amici", corretta: ["degli"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx penne", corretta: ["delle"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx isole", corretta: ["delle"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx uomini", corretta: ["degli"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx olio", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx amica", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx zio", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx libro", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx studentesse", corretta: ["delle"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx alberi", corretta: ["dei"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx casa", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx orchidee", corretta: ["delle"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx amori", corretta: ["degli"], risposte: ["dei", "degli", "delle", "dei'"] },
      { frase: "xxx animale", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },

      { frase: "xxx studente", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx zaino", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx mela", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx orologio", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx specchio", corretta: ["uno"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx finestra", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx amica", corretta: ["un'"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx stella", corretta: ["una"], risposte: ["un", "uno", "una", "un'"] },
      { frase: "xxx fiume", corretta: ["un"], risposte: ["un", "uno", "una", "un'"] }
    ],
    preposizioni: [
      { frase: "Mangio xxx ristorante", corretta: ["al","nel"], risposte: ["al", "alla", "nel", "sul", "in"] },
      { frase: "Andiamo xxx montagna", corretta: ["in"], risposte: ["in", "alla", "a", "su", "per"] },
      { frase: "Sono arrivato xxx aeroporto", corretta: ["all'","in"], risposte: ["all'", "al", "in", "da", "su"] },
      { frase: "Cammino xxx parco", corretta: ["nel"], risposte: ["nel", "al", "sul", "in", "da"] },
      { frase: "Aspetto xxx stazione", corretta: ["alla","nella","in"], risposte: ["alla", "al", "in", "da", "nella"] },
      { frase: "Vado xxx medico", corretta: ["dal"], risposte: ["dal", "al", "in", "per", "su"] },
      { frase: "Lucia lavora xxx banca", corretta: ["in"], risposte: ["in", "a", "da", "su", "per"] },
      { frase: "Parto xxx  treno", corretta: ["in"], risposte: ["con", "su", "in", "per", "da"] },
      { frase: "Sono seduto xxx tavolo", corretta: ["al"], risposte: ["al", "sul", "nel", "in", "da"] },
      { frase: "Metto il vaso xxx tavolino", corretta: ["sul"], risposte: ["sul", "in", "al", "da", "nella"] },
      { frase: "Vado xxx cinema", corretta: ["al"], risposte: ["allo", "al", "in", "su", "da"] },
      { frase: "Leggo xxx letto", corretta: ["a"], risposte: ["a", "nel", "su", "dal", "per"] },
      { frase: "Bevo acqua xxx bicchiere", corretta: ["dal","nel"], risposte: ["dal", "al", "nel", "su", "per"] },
      { frase: "Giro xxx il centro della città", corretta: ["per"], risposte: ["per", "in", "a", "su", "tra"] },
      { frase: "Telefono xxx mia madre", corretta: ["a"], risposte: ["a", "in", "da", "per", "con"] },
      { frase: "Scrivo xxx computer", corretta: ["al","sul"], risposte: ["al", "sul", "nel", "in", "da"] },
      { frase: "Ci incontriamo xxx bar", corretta: ["al","nel"], risposte: ["al", "nel", "alla", "in", "da"] },
      { frase: "Vai xxx cinema", corretta: ["al"], risposte: ["al", "in", "alla", "su", "da"] },
      { frase: "Compro xxx mercato", corretta: ["al","nel"], risposte: ["al", "in", "nel", "sul", "per"] },
      { frase: "Ho comprato un regalo xxx negozio", corretta: ["nel"], risposte: ["nel", "al", "in", "da", "per"] },

      { frase: "Vado xxx Roma", corretta: ["a"], risposte: ["a", "in", "da", "su"] },
      { frase: "Abito xxx Italia", corretta: ["in"], risposte: ["a", "in", "da", "su"] },
      { frase: "Vengo xxx Francia", corretta: ["dalla","in"], risposte: ["a", "in", "dalla", "di"] },
      { frase: "Metto il libro xxx tavolo", corretta: ["sul"], risposte: ["a", "in", "da", "sul"] },
      { frase: "La penna è xxx borsa", corretta: ["nella","in"], risposte: ["nella", "sulla", "alla", "dalla"] },
      { frase: "Esco xxx casa", corretta: ["di","da"], risposte: ["di", "da", "in", "con"] },
      { frase: "Studio xxx biblioteca", corretta: ["in","nella"], risposte: ["in", "nella", "da", "su"] },
      { frase: "Il gatto è xxx sedia", corretta: ["sulla"], risposte: ["sulla", "nella", "alla", "dalla"] },
      { frase: "Parto xxx Milano", corretta: ["per","da"], risposte: ["per", "da", "in", "a"] },
      { frase: "Arrivo xxx stazione", corretta: ["alla","in","dalla","nella"], risposte: ["alla", "nella", "sulla", "dalla","in"] }
    ]
  };
  
  




