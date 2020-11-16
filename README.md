# Charter Take-Home
> This take-home is an app to filter restaurants by state, genre, and attire. The app also uses an input field to search restaurants by name, city, and genre. The app has pagination to help keep table rows to no more than ten listings. This app features React, Typescript, Redux, Enzyme, and Jest.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

![](header.png)

## Project features

* A user can see a table with the name, city, state, phone number, and genres for each restaurant.
* A can see results sorted by name in alphabetical order starting with the beginning of the alphabet.
* ​A user can filter restaurants by state. If a state is selected that does not contain any restaurants, there should be something that indicates no restaurants were found for that state. 
* ​A user can to filter by genre.  
* State and Genre filters default to “All” and take effect instantaneously (no additional clicks). 
* A user can enter text into a search field. When hitting the enter key or clicking on a search button, the table should search results. Search results should match either the name, city, or genre.
* A user can to clear the search by clearing the text value in the search input.
* A user can only see 10 results at a time and the table should be paginated.
* A user can combine filters and search. The user can turn filters on and off
  while a search value is present.

## Installation

```sh
npm install
```

## To run project

```sh
npm start
```

## To run test (Note, test only covers api request)

```sh
npm test
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki