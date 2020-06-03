# nice-api

Put a read-only API in front of a google spreadsheet for easier consumption.

 - There is one resource `GET /rows` that maps directly to the rows in the backing spreadsheet.
 - row columns are normalized into `camelCase` properties, so "Needs volunteers?" turns into `needsVolunteers`
 - get a specific row by its id `GET /rows/0/`
 - filtering rows by value:  `GET /rows?neighborhood=Midway`
 - sort and limit: `GET /rows?neighborhood=Midway&$limit=1&$sort[nameOfOrganization]=-1`
 - See [docs](https://docs.feathersjs.com/api/databases/querying.html) for more!
 - PUT/POST/PATCH/DELETE will return a `501 Not Implemented`


## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/nice-api
    npm install
    ```
3. Copy `config/local-example.js` to `local.js` and fill in the required settings.
4. Start your app

    ```
    npm start
    ```
## Production

To run in production, be sure to set the environment variables specified in `config/production.json` (PORT, SHEET_ID, API_KEY, etc). Check the [node-config](https://github.com/lorenwest/node-config) documentation for additional config options.

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
