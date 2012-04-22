alert('It should alert OK after 2 seconds.');

require({
    paths: {
        defer: '../lib/defer'
    },
    urlArgs: 'now='+(new Date()).getTime()
}, ['defer!test_defer'], function(test_defer){
    alert(test_defer)
})
