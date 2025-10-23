# Notes

These are my private notes on data and software engineering. This site is built using Hugo and deployed to GitHub pages at https://puneet.uk.

* Additional Notes and Todo can be found in `notes.md`

## Summary

All notes are either a Juypter Notebook or a Markdown file.  The source files are in the ```content``` folder. The website is built and output to the ```docs``` folder.

# Prerequisites

1. Install Visual Studio Code
2. Install Github
3. Install Node and select the option to install Chocolatey
2. Install Hugo `choco install hugo -confirm`hugo


## Pre Deployemnt

1. Create Preview image for Notes page and add to images folder with the same name as note name.

## Deploymemt

## Central to this deployment is the build file, `build.ipynb` that creates Markdown Copies of the Juypter Notebooks, moves images, deletes redundeunt folders and rewrites links(work in progress).

1. Run `build.ipynb` to convert Juypter Notebooks to Markdown, move images, delete redundent folders and rewrite links(ToDo).
2. Run `hugo serve -D` to test locally.
3. Run `hugo` to build site from `content` to `docs`
4. Run `git add .` to add/stage all files.
5. Run `git commit -m "commit text"`
6. Run `git push` to remote.

## Social Media
+  [Twitter Card Validator](https://cards-dev.twitter.com/validator)
+ Twitter Preview Card Image Size - 1200 x 675

## Data

Data used in the examples are from freely available datasets and a link is provided at the the top of each note.

## Hugo Specific Notes

### Date

+ Date format: ``` 2021-01-24T00:00:00-08:00 ```
+ [TOML date](https://github.com/toml-lang/toml/blob/master/toml.md#user-content-offset-date-time)

### Trouble Shooting Hugo

+ If you have trouble building and delete the public directory for a fresh new build.  It will delete the CNAME file for your custom domain from GitHub so make sure you do a pull before a push.

## To Do

+ About Section
+ Footer
+ SEO
+ Preview Image attributes