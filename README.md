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
