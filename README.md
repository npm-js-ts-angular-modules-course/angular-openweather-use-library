# OpenweatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Build your project with Webpack to use Openweathermap library

If you want to include this library inside a project builds with `webpack` for a `client` application, you must add this configuration inside your `webpack configuration`. Go to **node_modules/@angular-devkit/build-angular/src/angular-cli-files/webpack-configs/browser.js**
Go to file end and replace:

```javascript
{
    plugins: extraPlugins,
    node: false
}
``` 
with 
```javascript
{
    plugins: extraPlugins,
    target: "web",
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    }
}