/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
// Funksjonen sjekker om tallet er partall eller oddetall
function checkNumber(number) {
  if (number % 2 === 0) {
    return "Partall";
  } else {
    return "Oddetall";
  }
}

// Tester funksjonen
console.log(checkNumber(24));
console.log(checkNumber(63));
console.log(checkNumber(0));
console.log(checkNumber(-61));

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
// Gjør teksten stor og legger til !
const UpperCase = (text) => `${text.toUpperCase()}!`;

// Tester funksjonen
console.log(UpperCase("Dette er kult"));
console.log(UpperCase("velkommen"));
console.log(UpperCase("javascript"));

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Returnerer en hilsen basert på navn og klokkeslett
function timeGreeting(name, hour) {
  if (hour === undefined) {
    return "Mangler klokkeslett";
  }
  // Sjekker at timeverdien er innenfor gyldig område (0-23)
  if (hour < 0 || hour > 23) {
    return "Ugyldig tid";
  }
  // Velger riktig hilsen
  if (hour <= 5) {
    return `God natt ${name}`;
  } else if (hour <= 11) {
    return `God morgen ${name}`;
  } else if (hour <= 17) {
    return `God dag ${name}`;
  } else {
    return `God kveld ${name}`;
  }
}

// Tester funksjonen
console.log(timeGreeting("Lise", 2));
console.log(timeGreeting("Anna", 8));
console.log(timeGreeting("Per", 14));
console.log(timeGreeting("Maria", 20));
console.log(timeGreeting("Ola", -5));
console.log(timeGreeting("Emma", 48));
console.log(timeGreeting("Alex"));

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Fjerner første og siste element i arrayen uten å endre originalen
const trimArray = (arr) => arr.slice(1, -1);

// Tester funksjonen
console.log(trimArray(["Rød", "Grønn", "Blå", "Gul"]));
console.log(trimArray(["En", "To", "Tre", "Fire", "Fem", "Seks"]));
console.log(trimArray([10, 25, 3, 42.5, 99]));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/
// Erstatter et ord og fjerner mellomrom
const modifyString = (text) => {
  return text.replace("vanskelig", "gøy").trim();
};

// Tester funksjonen
console.log(modifyString("  Javascript er vanskelig   "));
console.log(modifyString(" Det er vanskelig å bruke metoder "));
console.log(modifyString("   vanskelig        "));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

//const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

// Steg 1
items.shift();

// Steg 2
const indexToReplace = items.indexOf("Viskelær");
if (indexToReplace !== -1) {
  items[indexToReplace] = "Linjal";
}

// Steg 3
items.splice(0, 2, "Markeringspenn");

// Steg 4
const joinedString = items.join(" | ");
console.log(joinedString);

// Ekstra utfordring
const filteredItems = items.filter(function (item) {
  const lowerCaseItem = item.toLowerCase();
  return lowerCaseItem.includes("e");
});

console.log(filteredItems);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

function toggleItem(arr, item) {
  if (arr.includes(item)) {
    const index = arr.indexOf(item);
    arr.splice(index, 1);
  } else {
    arr.push(item);
  }

  return arr;
}

// Tester funksjonen
console.log(toggleItem(["Rød", "Grønn"], "Blå"));
console.log(toggleItem(["Rød", "Grønn", "Blå"], "Grønn"));
console.log(toggleItem(["En", "To", "Tre"], "Fire"));
console.log(toggleItem(["En", "To", "Tre"], "To"));

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

function addEmoji(value) {
  if (typeof value === "string") {
    return `😎${value}😎`;
  } else if (typeof value === "number") {
    return `😎${value * 2}😎`;
  } else if (typeof value === "boolean") {
    return value ? "😎Ja😎" : "😎Slapp av😎";
  } else {
    return "😎Kun primitive verdier😎";
  }
}

// Tester funksjonen
console.log(addEmoji(5));
console.log(addEmoji(null));
console.log(addEmoji("Hi"));
console.log(addEmoji(10));
console.log(addEmoji(false));
console.log(addEmoji(true));
console.log(addEmoji([1, 2]));
