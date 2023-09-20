# Car Rent Service App

This is website for Car Rent Services. It consists of:

- Main landing page about servises
- Catalog page where user can choose cars
- Favorites page with list of favorite cars.

# Layout

Layout of this Application is adaptive for mobile, tablet and desktop devises.
Layout changes on width 768px 1440px.

## Mobile Main and Catalog Page

![Mobile Main and Catalog Page](./assets/mobile.png)

## Tablet Main and Catalog Page

![Tablet Main and Catalog Page](./assets/tablet-catalog.png)

## Desktop Main Page

![Desktop Main Page](./assets/desktop-main.png)

## Desktop Catalog Page

![Desktop Catalog Page](./assets/desktop-catalog.png)

## Functionality

On all pages there is Header and Footer for Navigation on website and
information about developer on any page.

On the main page there is Hero Section with the button for call to Car Rent
service, main benefits about company, popular car logos and gallery with our
cars.

On the catalog page there is list of cars for rent with pagination. For loading
more cars just press "Load more". If there is no more cars this button is
hidden. On the top of this page is a filter search by car mark, price and
milliage. You can choose any filter combination. If one filter is not filled it
just ignored. For new search just change request and click "Search" again.

You can add or remove car to/from your favorite list - just click on heart icon.

![Desktop Catalog Page](./assets/favorite.png)

If you press "Learn more" button there is enable modal window about car
characteristics. For closing this modal window - just click cross button,
backdop or Escape key on keyboard.

![Desktop Catalog Page](./assets/modal-window.png)

On favorite Page you can see all cars added to favorite. The list of cars is
located in the localstorage.

# For Developers

This project is developed
[Create React App](https://github.com/facebook/create-react-app).

## Copy of project

1. Make a copy of this project.
2. Don't forget in properties allow git-hub-actions.
3. Clone project to your computer
4. Install all dependensies with: `npm i`
5. Change project name and username in package.json in fields "name" and
   "homepage". 6. in index.js write correct basename="/car-rent" of your project
   with /
6. Pull your changes to GitHub
7. For deploying you can use gh-pages.
8. For starting your project use command: `npm start`
