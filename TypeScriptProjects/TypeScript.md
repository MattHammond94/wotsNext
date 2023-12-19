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

Once done you will need to run ```tsc``` each time you need to re compile your TS files.

alternatively you can run ```tsc --watch``` to open a terminal which will re compile each time a file is changed and saved.

> can also use the --watch switch with node command. ```node --watch dist/[filename]``` watches a file for changes and then re runs the file on save.