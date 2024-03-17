# Authentication-React-Native-and-Firebase
Authentication using React Native (Typescript, Expo, React Navigation, Redux for state management) and Firebase REST API

# First you clone this project
Run `npm install`

Run `npx expo start` to start the project in your Simulator

# Important note (.env file)
Get your `API_KEY` in Firebase project.

In this project, I actually commit `.env` file for you to replace the `API_KEY` easily in `.env` file. 

Your task is putting `.env` file in `.gitignore`.

## Functions
- Sign In
- Sign Up
- UI Design
- Store `token` in local storage using Expo SecureStore
- `Refresh Token` API when `token` is expired
- Navigation
- Using Expo SecureStore to store `Token` and `Refresh Token`
- Call API in authenticated situation

## Used Packages 
- React navigation: https://reactnavigation.org
- Redux for state management: https://redux-toolkit.js.org
- Expo SecureStore: https://docs.expo.dev/versions/latest/sdk/securestore/
- Http request: Axios
- Expo SplashScreen
- REST API Firebase: https://firebase.google.com/docs/reference/rest/auth#section-refresh-token
