# Portable Air Cleaner Calculator

### Team Coral's Informatics Capstone Project

### Authors
* Joon Chang - UI/UX Designer
* Ryan Kobashigawa - Project Manager and UI/UX Designer
* Liam O'Keeffe - Full-stack Software Developer
* Liam Sexton - Full-stack Software Developer

## Overview
Our project is a web application that:
1. Helps small businesses find portable air cleaners that will help them to keep their employees and customers safe from COVID-19.
2. Helps small businesses who either already have a portable air cleaner or found a portable air cleaner online and want to see if their portable air cleaner will ventilate their place of business well enough to prevent the spread of COVID-19.

Our application is based on [this](https://docs.google.com/spreadsheets/d/1NEhk1IEdbEi_b3wa6gI_zNs8uBJjlSS-86d4b7bW098/edit#gid=1882881703) spreadsheet tool. The air quality calculations that we use are taken from this tool (more about these calculations below), but we have also added information not in this tool about recommended occupancy levels to try to specialize our project for small businesses. We used [this](https://www.governor.wa.gov/issues/issues/covid-19-resources/covid-19-reopening-guidance) resource from the Washington state governor's website to make our occupancy recommendations.

The application can be found [here](https://liamkokeeffe.github.io/Portable-Air-Cleaner-Calculator/#/).

Below you can find information about our application's architecture, the calculations we used, and how to run the application locally.

### Architecture
We built our project with JavaScript and React.js.
All React components can be found in the `src/components` directory (except for the root `App.js` component which is in the `src` directory).\
We tried to name the components clearly and organize them into folders where it made sense.\
The `src/components/LandingPage/LandingPage.js` component is what the user first sees when visiting the website (initially a disclaimer, then the resulting page seen when the disclaimer its closed).\
The `src/components/Calculator` folder contains the components used in the calculator (what a user sees when they click one of the two main buttons on the landing page after the disclaimer is closed).\
The `src/components/AirCleanerRecommendations` folder contains the components used on the air cleaner recommendations page (what the user sees if they are using or application to find an air cleaner and click "View results" on the calculator page).\
The `src/components/RoomSizeRec` folder contains the component used on the "Test air cleaner" information page (what the user sees if they are using our application to test the quality of an air cleaner and click "View results" on the calculator page).\
The `src/components/Layout` folder contains the application's header and footer components, as well as a layout component which specifies how these components are organized with regard to the "body" components (whatever is between the header and footer). (Note: The `LanguageSelection` component is visually located in the header on wide screen views but it is located in the footer component in code).

### What air cleaners are being recommended? 
Air cleaners being recommended are read from the csv file `src/air_cleaner_list.csv`. There is a Google Sheet where the air cleaners and information about them are stored and updated. The air cleaners being recommended all have HEPA filters. When the Google Sheet changes, save the sheet as a csv file and then replace `src/air_cleaner_list.csv` with it (the change needs to be pushed to the repo to take affect).

### Calculations Used
**For the below calculation:**\
ACH stands for air changes per hour\
CADR (clean air delivery rate) is in units of feet<sup>3</sup> / minute\
Room volume is either in units of feet<sup>3</sup> or meters<sup>3</sup>\
Outdoor ventilation is in units of ACH\
The 60 in the below calculation is in units of minute / hour.\
The 0.58 in the below calculation is in units of (hour * feet<sup>3</sup>) / (minute * meters<sup>3</sup>).\

When **recommending air cleaners** to users, users enter their room volume and their level of outdoor ventilation. We then use this calculation on every air cleaner we could potentially recommend:

If units are feet:\
Estimated ACH of user's space = ((air cleaner's CADR ) * 60 / room volume) + outdoor ventilation\
If units are meters:\
Estimated ACH of user's space = ((air cleaner's CADR) / 0.58 / room volume) + outdoor ventilation

We only recommend air cleaners with that would give the user's space an estimated ACH of 4 or more.

When a user is **testing the effectiveness of an air cleaner**, users enter their room volume, level of outdoor ventilation, and the CADR of the air cleaner. We then use the same calculation that we use when recommending air cleaners, but this time the CADR value is provided by the user and we therefore only need to perform the calculation once. The user is then shown the estimated ACH that their air cleaner is giving/would give their space based on their inputs.

TODO: Add how we make occupancy recommendations.

### Running the application locally

You will need to have `npm` installed. You can install it [here](https://www.npmjs.com/get-npm).

Once npm is installed, you can run `npm install` in the project directory to install required dependencies for the project.

Finally, run `npm start` to run the app. You will be able to view it at http://localhost:3000 in your browser.  

### Running tests

Run `npm test` to run all tests. We used [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) to create our tests. The tests ensure any calculations we use work as expected and also user interaction like filtering/sorting works as expected.
