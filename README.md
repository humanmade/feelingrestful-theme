### A Day of Rest Boston 2016 - WordPress React JS theme
Purpose-built theme for the 2016 A Day of Rest Boston conference. A fork of the [FeelingRestful theme](https://github.com/humanmade/feelingrestful-theme). 

**Required homepage setup: ** A page with the slug "home-page" is used for the homepage. Please create this page if using a fresh installation. 

**Required Plugins** 
- [WordPress REST API](https://wordpress.org/plugins/rest-api/)  
- [Modular Page Builder](https://github.com/humanmade/modular-page-builder)

**Added support for**
- [Testimonials by WooThemes](https://wordpress.org/plugins/testimonials-by-woothemes/)

#### Building

```
npm install
grunt build
```

#### Developing

```
npm install
grunt webpack:watch-dev # build javascript
grunt watch sass # compile sass (watch does not trigger LiveReload on sass changes)
``` 
