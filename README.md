# Agency

![Agency Banner](http://octobercms.com/storage/app/uploads/public/59e/bfa/0de/59ebfa0de6724289762651.png)

A professional fully responsive portfolio website with a distinct layout. All of the content is managed through October’s back-end (via the Display Case plugin). No need to edit pages or templates! 

See [this website](http://von-zimmerman.com/paul) to see it in action.

To see exactly what content is editable through the back-end, check out [Display Case](https://octobercms.com/plugin/vonzimmerman-displaycase).

### Setup

#### Customize color scheme
Agency allows you to choose the palette of your website (primary, secondary, and primary tint). To pick new colors navigate the the back-end and follow these steps:

- Go to the Settings tab
- navigate to the front-end theme section
- In the Agency section click the `Customize` button 
-  Primary color sets the background and borders.
- Secondary color sets the highlight color on the main page and the scroll bars. 
- Primary tint is used for links and various hover effects

#### Adding new items
All of the portfolio management is done with the Display Case plugin. I’ll cover them briefly, you can get further detail about how to use the plugin on the [Display Case](https://octobercms.com/plugin/vonzimmerman-displaycase) page.

##### Items
Each item will have a page associated with it and will appear on the main landing page (according to the tag selected via the component). 

##### Tags
Tags are used to manage what is shown on each page. You can have multiple portfolios that live under different links. For example: `http://example.com/portfolio_one` and `http://example.com/portfolio_two`. More on that in the 'Setting up a new landing page' section.

##### Profile
contains your name, occupation, external links, email, etc. You can have multiple profiles if you want to tailor your portfolio to different audiences. 

You can add as many links as you like, but it might be too crammed on mobile. Link icons should be simple black and white icons. [Open-iconic](https://useiconic.com/open) and [Font-awesome](http://fontawesome.io/) will cover all of your needs. 

#### Setting up a new landing page
- Navigate to the CMS tab
- Create a new page
- Copy the content from the original landing page.
- Add the `landingPage` component, the `socialNav` component, and the `profile` Component to the new page
- Click each component and set the proper tag/key for each.
- In the code section of the new landing page put the following:

```
function onStart() {
  Session::put('previous', $this->page->url);
}
```
That will make it so the back button on the project page redirects to the correct landing page. 

## Compatibility:

Agency has been tested on:

Windows:

- Firefox 57/
- Edge 14
- Chrome 49/55/62

Mac:
- Safari 11
- Chrome 62

Linux:
- Firefox 57
- Chromium 62

Android:
- Stock browser
- Firefox
- Chrome

iOS:
- Safari

If you notice any issues please report them with the browser version and the oprating system you're on. Much appreciated!

## Developing!

### Layouts and pages
There are three htm files. 
- `layouts/nonav.htm`. Simple layout, used for all of the pages
- `pages/landingPage.htm` The main landing page where all your `items` will show up.
- `pages/projects.htm` Project descriptions and screenshots (based on a URL parameter).

### Customizing the theme
The theme is built with Webpack. Make sure you have node and npm (or yarn) installed.

#### Scripts
You can substitute all the yarn commands for npm commands if you wish. 

- `yarn watch` start webpack in watch mode
- `yarn server` Run this locally. Starts Webpack in watch mode and starts a PHP debug server. (make sure you’re in a tmux session and you have php-xdebug installed)
- `yarn build` will build the assets for production

#### Styles
##### SCSS
The base styles are written in SCSS and live in the `src/scss` directory. Organized according to SMACSS.
##### Less
Since Less seems to have better support when it comes to combiner variables, it's used it for anything concerning the theme (mostly colors). The Less files live in  `assets/theme/theme.less`.
