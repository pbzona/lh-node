# Lighthouse - Node Server SDK

Welcome! This project is meant to provide an extremely modular framework for running hands-on workshops using the LaunchDarkly Node Server SDK.

> A note on terminology: I've organized the content into modules, a word which has a very specific meaning in the context of Node development. Because of this, when I refer to the content, I'll use the term 'learning modules'. 

## What does this app do?

The app is an API server that exposes a couple endpoints:

- GET `/module/:id` returns an object of the form `{ data: WHATEVERYOUWANT }` where the variable is, quite literally, whatever you want. The `id` parameter is the corresponding learning module. A frontend application (or any other client) can request this route during the appropriate workshop stage and get confirmation as to whether the user has successfully completed the task for that section.

- **NOT IMPLEMENTED YET** GET `/content` returns an array of JSON objects that include instructional text to be displayed in the browser during the workshop.

## Structure

The entrypoint is `index.js` - this starts the server.

The source code is in `src` - files here that begin with an underscore are places where you (might) need to make modifications in order to accomodate your workshop content.

The numbered `module` directories are where technical content lives. Each of these directories is an actual Node module - the value exported from it will be used in tests, which determine what values can be returned by the API.

## Creating your own learning modules

First, you'll need a frontend component to illustrate what success looks like for your module. For example, it might show a check mark when the SDK connects to LaunchDarkly and initializes successfully. This component doesn't need to be fully developed at this stage, but you do need to know what kind of data you will want it to consume so you can design the rest of the learning module accordingly.

### The module code

In the `index.js` file in the corresponding `module` directory, you may add boilerplate code that will be used as a starting point for participants. It's a good idea to at least include a variable declaration for the thing you want to export, as well as an export statement for it.

There is no reason you can't use multiple files here, depending on what you want to illustrate. For example, it might make sense to create a few different modules (as in Node modules) within the learning module to simulate an MVC web app structure, for example. The only thing that's required is that the export you will use comes from `index.js`.

### The module test

In `src/_moduleTests.js` you will define a test function. This function takes one argument, the export from its corresponding learning module code. 

The function should perform some kind of assertion to check whether the exported value from the learning module matches its expected value. 

The return value is what will be sent back via the API call (it's the `WHATEVERYOUWANT` in the section above). 

### Mapping the test to its module

In `src/_moduleMap.js` you will associate the test function to its corresponding learning module (or more precisely, to the export from the learning module). To do this, return its value in the appropriate stage of the switch statement.

### Putting it all together

There are a lot of ways to think about this, so here's an example: 

In the first learning module, I've created a task where the user must implement the SDK and create a client. The goal is to have a client that can communicate with LaunchDarkly, and the data I want to return to the frontend is simply `true` or `false` to represent whether the SDK client has been set up correctly.

The starter code here does a couple things: it imports and configures the singleton object where the LD client will live, and it also runs a check before executing the SDK initialization to avoid creating duplicate streaming connections. Most of the time the boilerplate does not need to be this complicated, but there were some special circumstances here because of how initialization works.

For the test function, `sdkSetup`, I check whether the client is able to call its `initialized()` method. This will indicate that initialization was successful: if it was, I return `true` and if it wasn't, I return `false`.

To map the test to the module, I add `return moduleTests.sdkSetup(exportedValue)` under the `1` case in the switch statement because the learning module is `module01`. This value gets passed to the route handler, which is then served directly to the requester.

