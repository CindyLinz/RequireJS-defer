RequireJS-defer
===============

A plugin of RequireJS for loading deferred modules

If your [RequireJS][] module need the defering feature when initializing,
you can work it out with this plugin.

[RequireJS]: http://requirejs.org/

Version
=======

0\.02

Synopsis
========

To define your deferred module:

```javascript
define(['dep1', 'dep2', ..., 'depN'], function(dep1, dep2, ..., depN){
    // do some initializing without deferring

    return function(load){
        // do some initializing WITH deferring.

        something_asynchronized(..., function(some_stuff){
            something_else_asynchronized(..., function(some_other_stuff){
                load(the_initialized_module);
            });
        });
    };
})
```

---

To require your deferred module:

```javascript
require([..., 'defer!deferred_module', ...], function(..., deferred_module, ...){
    // deferred_module will be the_initialized_module

    // act as normal require
})
```

---

To define a module that depends on your deferred module:

```javascript
define([..., 'defer!deferred_module', ...], function(..., deferred_module, ...){
    // deferred_module will be the_initialized_module

    // act as normal define
})
```

---

Refer to the *test* directory as an example.

---

To define your deferred coffeescript module: (better tastes)

```coffeescript
define ['dep1', 'dep2', ..., 'depN'], (dep1, dep2, ..., depN) -> (load) ->
    something_asynchronized ..., (some_stuff) ->
        something_else_asynchronized ..., (some_other_stuff) ->
            load(the_initialized_module)
```

---

To require your coffeescript module:

```javascript
require([..., 'defer!cs!deferred_module', ...], function(..., deferred_module, ...){
    // ...
})
```

```coffeescript
require [..., 'defer!cs!deferred_module', ...], (..., deferred_module, ...) ->
    # ...
```

License
=======

Copyright 2012, Cindy Wang (CindyLinz)

Dual licensed under the MIT or GPL Version 2 licenses.

Date: 2012.4.27
