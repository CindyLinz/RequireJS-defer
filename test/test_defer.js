define([], function(){
    return function(load){
        window.setTimeout(
            function(){
                load('OK')
            }, 2000
        );
    }
})
