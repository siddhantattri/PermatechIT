## Available Scripts

In the project directory, you can run:

### `nodemon bin\www`

Runs the app in the development mode with hot reload.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Database Requirements

The project needs mongodb to be running in background. 
Open [this](https://docs.mongodb.com/guides/server/install/) to see mongoDB setup.

Open MongoDB Compass and select `Fill in connection fields individually` 
Click on connect and create a Database and create 4 collections namely customers,
orderproducts, orders, products and add to them the similarly named json files in the
custom_data folder. (https://docs.mongodb.com/compass/master/import-export)

If successfully launched before running `nodemon` then `nodemon` will print a message saying
`Database Connected`
