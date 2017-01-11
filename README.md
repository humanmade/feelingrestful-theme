# Feeling Restful Theme 

**Version 2** 

A WordPress React JS theme designed for [A Day of Rest Boston 2017](https://adayofrest.hm/boston-2017)

---
Purpose-built theme for the 2017 A Day of Rest Boston conference. 

A update of the [FeelingRestful v1 theme](https://github.com/humanmade/feelingrestful-theme/releases/tag/1.1.10). 

## Differences between v1 and v2

There are some differences between the two. 

Please note that [version 1 has been release tagged]((https://github.com/humanmade/feelingrestful-theme/releases/tag/1.1.10)).
 
### Changes
 - Dynamic Menu system
 - Design Modifications: ADOR Boston website which was a design change.
    
    This theme has been visually redesigned for ADOR Boston. Therefore, there are CSS and HTML changes to enable that.
    
 - Removal of Preview_Postmeta
 

## Requirements

### Required homepage setup:

A page with the slug "home-page" is used for the homepage. Please create this page if using a fresh installation. 

### Required Plugins 
- [WordPress version 4.7+](https://wordpress.org/download/) or [WordPress REST API](https://wordpress.org/plugins/rest-api/)
- [Modular Page Builder](https://github.com/humanmade/modular-page-builder)
- [WP-API Menus](https://en-gb.wordpress.org/plugins/wp-api-menus/)

### Added support for
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
