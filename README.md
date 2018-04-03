# The-Portal-Test
A command line portal to sort orders and dind the optimal route through the warehouse.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.

### Installing

Below will tell you how to get setup.

```
git clone https://github.com/hakbar0/The-Portal-Test.git
cd The-Portal-Test
npm install
```

Note: This could take some time, depending on your internet connection.

### Run locally

Note to run locally, navigate to the directory this repo is located at. Then run the file named shelfPicker. 

```
node shelfPicker.js
```

## Running the tests

To run tests navigate to the root folder and run npm t.

```
npm run test
```
Note: These tests are located in the spec folder and have a naming convention "example.spec.js".

## Built With

* [Database](https://firebase.google.com) - Firebase

## Description

The purpose of this project was to design, build and test to find the optimal route through the warehouse.
It Outputs a CSV file to the CSV Folder.

Note: The CSV file is arranged differently to the desired example. As I thought date could be useful when picking orders.

### Future Work

* Authentication - Firebase makes authentication easy, so I would like to integrate an auth layer into the application.

* Seeding - Seeding Firebase with fake data.

* Testing React - am keen to learn more about React testing with Jest, the framework I used to test my database queries.

### Outcome

A working command line application that saves files in the CSV folder.

## Authors

* **Haseeb Akbar**

