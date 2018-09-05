# Node and Express MVC App Boilerplate

Please note:

- there is currently no models directory
- these files need custom updates based on project needs:
  - controllers/\_Controller.js - rename based on project use case
  - public/css/\_.css - rename based on project use case
  - routes/index.js - update controller import
  - package.json - update based on project use case, including css file in `{"scripts": "css": "..."}`

## Data model brainstorm

A nap has:

- date (as a string entered by the user/browser)
- start time (as a string entered by the user/browser)
- end time (as a string entered by the user/browser)
- length (calculated)
- notes about the nap (as a string entered by the user/browser)

## project customization steps starting from mvc-boilerplate

1. init css
2. update controllername and routes w/ updated controller name
3. create home page view and update controller and routes accordingly

## dev notes

1. time, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
