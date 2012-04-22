/*!
 * RequireJS defer plugin v0.01
 * https://github.com/CindyLinz/RequireJS-defer
 *
 * Copyright 2012, Cindy Wang (CindyLinz)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: 2012.4.22
 */
define({
    load: function(name, req, load, config){
        req([name], function(mod){
            mod(load)
        })
    }
})
