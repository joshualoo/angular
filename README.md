# Instructions

1. Build an address book using the attached wireframe. All contacts should be
  1. Listed on the left hand side
  2. Searchable,
  3. Toggleable to view their full details in the main view.

2. Contacts should be editable in the main view.

3. Use Angular filters, services, binding, and some of Angular's built in directives.

4. Replace this README file with a paragraph explaining your process, the directives you used, and why.

5. BONUS: Use the ng-router directive, pulled in using npm.

6. BONUS+: use npm to install `ui-router` and use it in place of `ng-router`;

7. Send us a link to your repo to view it. DO NOT create a fork of this repo. Instead, make a copy of it.

NOTE: use the contacts.json file in the public folder to populate the Address Book.

## Installation

1. Install Node and NPM
2. Run `npm install` to install the dependencies.
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`


The process: 
I started with the making overall layout of the page. I used Bootstrap make the build process faster. 
As for the directives that I used,
ng-repeat was used to populate the contact list from the JSON object taken from the contact file provided. 
ng-model was used to make the search bar work. 
ng-click is used within ng-repeat and ng-show was used to show the contact info on the right panel
ng-show and ng-hide was used to make the contact info editable. The ng-show and ng-hide works nicely with the toggling and showing the input values for editing.





