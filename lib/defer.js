/*!
 * RequireJS defer plugin v0.02
 * https://github.com/CindyLinz/RequireJS-defer
 *
 * Copyright 2012, Cindy Wang (CindyLinz)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: 2012.4.27
 */
define({
    load: function(name, req, load, config){
        req([name], function(mod){
            if( mod.loaded )
                load(mod.prepared);
            else if( mod.loading )
                mod.loading.push(load);
            else{
                mod.loading = [load];
                mod(function(prepared){
                    mod.prepared = prepared;
                    mod.loaded = true;

                    var loading = mod.loading;
                    delete mod.loading;

                    var i;
                    for(i=0; i<loading.length; ++i)
                        loading[i](prepared);
                });
            }
        })
    }
})
