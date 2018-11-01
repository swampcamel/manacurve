# ManaCurve - A _Magic: The Gathering_ Deck Editor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Created by Dan Mace, Eric Conner, Evan Filkins and Josh Gearheart

## Description

This Magic The Gathering deck builder and editor was developed to aid players building specialized card decks. It utilizes a set of filters that return a list of cards and card images from a database that can include all available cards in the Magic: The Gathering universe. It saves built decks in the database. The database can be easily expanded to include future releases of Magic: The Gathering expansion packs.

# Setup on OSX

Run the following commands in Terminal in order:

- Setup Angular: `npm i -g @angular/cli`, `npm i -g angularfire2 firebase`
- Clone Manacurve: `git clone https://github.com/swampcamel/manacurve.git`
- Enter project directory: `cd manacurve`
- Install dependencies: `npm i`
- Access Firebase database:
  - Add the following file to root project directory `src/app/api-keys.ts`
  ```
  export const theMasterFirebaseConfig = {
    apiKey: "XXXXXX",
    authDomain: "mana-curve.firebaseapp.com",
    databaseURL: "https://mana-curve.firebaseio.com",
    projectId: "mana-curve",
    storageBucket: "mana-curve.appspot.com",
    messagingSenderId: "ZZZZZZ"
  };
  ```
  - Then, make a free account at Firebase's [website](http://firebase.google.com/).
  - Create a new project titled whatever you want!
  - Then click on the box that says "database"
  - Then click `Create Database` and click `Enable` on the popup
  - Go to your Project Overview and click the little circle with `</>`
  - Copy and paste _your_ apiKey (from the Firebase popup) into your `api-keys.ts` file in place of `XXXXXX`
  - Copy and paste _your_ messagingSenderId (from the Firebase popup) into your `api-keys.ts` file in place of `ZZZZZZ`
- Open Manacurve in Web Browser: `ng serve --open`
Create decks or use template decks already in database.

## Contact Info

  - Dan Mace:
  - Eric Conner: theluvq@gmail.com
  - Evan Filkins:
  - Josh Gearheart: other.josh.gearheart@gmail.com

## Technologies Used

  - Angular 7.0.3
  - JavaScript
  - npm Webpack
  - Firebase
  - Angular Material
  - Google Chrome


## Known Bugs

  - Quick scrolling of card list is laggy
  - If cards added do not display immediately scrolling will update display

## License

This software is licensed under the MIT license.

Copyright (c) 2018 Dan Mace, Eric Conner, Evan Filkens, Josh Gearheart
