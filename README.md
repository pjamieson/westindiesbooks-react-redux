# westindiesbooks-react-redux

Virtually all of the projects of any significant size that I've worked on over the past six years are not publicly available for viewing, making it impossible for me to point to them as examples of my solution architecting and coding skills. That's a result of both non-disclosure agreements and having developed internal sites and tools for clients in the healthcare and pharmacy domains.

This project is intended to alleviate that problem a bit. It allows me to demonstrate the result--and share the code--of my complete re-write (in April 2017) of my West Indies Books website. The previous version was developed with AnguarJS in late 2013. This new version employs some of the technologies I most enjoy working with today, beginning with JavaScript ES2015, React, and Redux.

## Setting up the project

This project was seeded with [Create React App](https://github.com/facebookincubator/create-react-app). That provided a basic React application skeleton, including Babel to transpile ES2015 JavaScript to ES5 and Webpack pre-configured to manage both development and production builds. Also available in this seed project are a number of packages that the Facebook Team has found useful. I'm not sure how I ever lived without [Autoprefixer](https://github.com/postcss/autoprefixer). It allows me to write my CSS rules without worrying about vendor prefixes, then--when Webpack builds the project--the appropriate vendor prefixes are automatically inserted into the minified CSS. Very cool!

I added the [redux](https://github.com/reactjs/redux) and [react-redux](https://github.com/reactjs/react-redux) packages to the project in order to connect locally-stored data to my React components.

With an eye toward using Bootstrap in this project, and following the Create React App documentation for extending the initial seed, I installed [node-sass](https://github.com/sass/node-sass) and [npm-run-all](https://github.com/mysticatea/npm-run-all), then added scripts to the package.json file to watch and build the SCSS files.

The Create React App documentation currently (April 2017) provides instructions for adding Bootstrap 3 to a React project, but I wanted to use Bootstrap 4. To accomplish this, I instead followed the Getting Started instructions for [reactstrap](https://github.com/reactstrap/reactstrap), a package that provides Bootstrap 4 components and styles.

Font Awesome is awesome. With React, I like the [react-fontawsome](https://github.com/danawoodman/react-fontawesome) package. It provides the Font Awesome icons as React components, making them very easy to use. The package does not include the Font Awesome CSS or fonts themselves; they needed to be downloaded and included in the project.


## Site Hosting

Since this website is entirely self-contained, I host it from an Amazon Web Services S3 bucket, with DNS provided by AWS's Route53 services. I currently have five small sites hosted this way, at a combined cost of under $10/month.
