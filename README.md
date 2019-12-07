_This was created during our time as a student at [Code Chrysalis](https://www.codechrysalis.io/)._

_This was the Team API Project, where a deployed MVP web application using APIs was to be built and presented in 4 days_

# reflectra
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

Reflectra is an app designed to go on a Smart Mirror.

![alt text](/misc/naotoLoginSmall.png "App Screenshot Example")

At first, it presents no information, but is continually using a camera (e.g. the webcam on a laptop) to check for the presence of a face, using `face-api.js`

Once it sees a face, it takes a snapshopt and sends a scaled down version of the picture to the `Node.js` backend server 

The backend server will send this photo to the [Kairos](https://english.api.rakuten.net/KairosAPI/api/kairos-face-recognition) api, which will tell the backend whether the face matches a person in the database, and who it is.

Now knowing who the person is, the backend server will then request information from `MongoDB Atlas` about that user's preferences (such as what kind of headlines they would like to see).

Using these preferences, the backend server will make requests to other content apis (such as `Bing News`) to fetch the desired content. Which will then be sent to the frontend.

This data is then displayed to the user on the screen.

## Public Presentation
Check out our public presentation of this app to see it in action! [https://youtu.be/F3mqIgY2uUk?t=4172](https://youtu.be/F3mqIgY2uUk?t=4172)

## Check out our demo!
[Demo Deployed on Heroku](https://reflectra.herokuapp.com/)
_This demo is now offline due to the paid API requirements_

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Environment
Please add a file named ```.env``` to the root of your project.

In order to run the project properly, please add the following to this file:
```bash
RAPID_API_KEY=#Your Rakuten Rapid API Key
DB_CONNECTION=#Your MongoDB Atlas Connection String
```
Sign Up for a [MongoDB account](https://cloud.mongodb.com)

When setting up Rakuten Rapid API, please sign up for:
- [Kairos](https://english.api.rakuten.net/KairosAPI/api/kairos-face-recognition)
- [Bing News](https://english.api.rakuten.net/microsoft-azure/api/bing-news-search)
- [Dark Sky](https://english.api.rakuten.net/darkskyapis/api/dark-sky)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Contributors ✨

Our wonderful team: ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/chiched"><img src="https://avatars2.githubusercontent.com/u/54376843?v=4" width="100px;" alt="David Chiche"/><br /><sub><b>David Chiche</b></sub></a><br /><a href="https://github.com/FraserTooth/smart_mirror_app/commits?author=chiched" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/FraserTooth"><img src="https://avatars1.githubusercontent.com/u/25011388?v=4" width="100px;" alt="Fraser Tooth"/><br /><sub><b>Fraser Tooth</b></sub></a><br /><a href="https://github.com/FraserTooth/smart_mirror_app/commits?author=FraserTooth" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/eugenekim000"><img src="https://avatars2.githubusercontent.com/u/21001242?v=4" width="100px;" alt="eugenekim000"/><br /><sub><b>eugenekim000</b></sub></a><br /><a href="https://github.com/FraserTooth/smart_mirror_app/commits?author=eugenekim000" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/baruishi"><img src="https://avatars2.githubusercontent.com/u/48074024?v=4" width="100px;" alt="Waldemar Ishibashi"/><br /><sub><b>Waldemar Ishibashi</b></sub></a><br /><a href="https://github.com/FraserTooth/smart_mirror_app/commits?author=baruishi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Imamachi-n"><img src="https://avatars3.githubusercontent.com/u/4005125?s=400&v=4" width="100px;" alt="Naoto Imamachi"/><br /><sub><b>Naoto Imamachi</b></sub></a><br /><a href="https://github.com/FraserTooth/smart_mirror_app/commits?author=Imamachi-n" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
