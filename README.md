# CUSTOM Template

## .gitignore
```
/www/lib
# Specifies intentionally untracked files to ignore when using Git
# http://git-scm.com/docs/gitignore

node_modules/
platforms/
plugins/
.idea
```

## index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>

    <!--
    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    -->

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above -->
    <link href="css/ionic.app.min.css" rel="stylesheet">


    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>

    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>

    <!-- your app's js -->
    <script src="js/app.js"></script>
  </head>
  <body ng-app="starter">

    <ion-pane>
      <ion-header-bar class="bar-stable">
        <h1 class="title">Ionic Blank Starter</h1>
      </ion-header-bar>
      <ion-content>
      </ion-content>
    </ion-pane>
  </body>
</html>
```

## Add andorid
`ionic platform add android`

## Font Awesome
[add Font-Awesome](https://blog.nraboy.com/2014/10/use-font-awesome-glyph-icons-ionicframework/)

`bower install font-awesome --save`

open `scss/ionic.app.scss` and add:

```scss
//awesome font
@import "www/lib/font-awesome/scss/font-awesome.scss";
```

## Ionic Analytics Plugin
[add Ionic Analytics Plugin](http://docs.ionic.io/v1.0/docs/analytics-from-scratch)

`ionic add ionic-platform-web-client`

## Run npm and bower
```
npm update
bower update
```
