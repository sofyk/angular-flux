# Flux-Angular

Flux architecture implemintation in Angular 1.x

Created based on [ngbp](https://github.com/ngbp/ngbp)

***

## Quick Start

Install Node.js and then:

```sh
$ npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Chrome will launch automatically.

Happy hacking!

## Compile

When you run:
```sh
$ grunt compile
```
a minified production build will be generated in /bin

Because everything is compiled, no XHR requests are needed to retrieve templates,
so until this needs to communicate with your backend there is no need to run it from a web server.

