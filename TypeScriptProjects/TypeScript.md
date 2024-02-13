# Learning TypeScript

### Why TypeScript? And wot even is it dude?

* Built on top of JavaScript to give extra features (Known as a superset of JavaScript)

* Primary feature is to add TYPES to values

* If we define a variable as a specfic TYPE i.e. String. It can only ever be a string.

### Benefits:

* Strongly typed languages give better error feedback. 

* Type checking means more bug location before run time. 

### Installing TypeScript:

* TypeScript needs to be compiled into JavaScript so it can run in a appropriate environment (Like Node)

```npm install -g typescript```

> This installs TypeScript globally. Typescript can be installed as a dependency in individual projects if this is preferred. 

```tsc [filename]```

compiles selected file and produces a JS copy that can be run.

```tsc --init```

Creates a tsconfig json file in selected directory. 

> In the tsconfig file it is important to uncomment the rootDir and the outputDir and set the value to the rootDir where all the TS files are and the outputDir to where the compiled files need to be generated to. It is common practice to set this as "./src" and "./dist"

> If you plan on using packages/modules in your program you will notice an issue when using ES6 imports. To resolve this, in the TS config file you can change the ```module``` setting from commonJS to ```es6```

> Some packages will not have been built using types therefore you may have errors being returned from the use of said packages. You can resolve this either by Emitting such errors or by locating and installing a suitable types package supported by the selected module.

Once done you will need to run ```tsc``` each time you need to re compile your TS files.

alternatively you can run ```tsc --watch``` to open a terminal which will re compile each time a file is changed and saved.

> can also use the --watch switch with node command. ```node --watch dist/[filename]``` watches a file for changes and then re runs the file on save.

## Using a bundler

Browsers are unable to access files from node_modules this would require the use of a bundler. Bundlers allow you to bundle all the modules and code for the browser to process. 

common bundlers are webpack, parcel and snowpack

to create a snowpack project run ```npx create-snowpack-app . --template @snowpack/app-template-blank-typescript```

## Good to knows:

* Adding a .d.ts file extention to the end of a file allows the file to be accessed globally within other files. ```example.d.ts``` -> it is common for a types.d.ts file to be in the file structure to allow access to all common types within all files.