alert('It should alert two OKs after 2 seconds.');

require({
    paths: {
        defer: '../lib/defer'
    },
    urlArgs: 'now='+(new Date()).getTime()
}, ['defer!test_defer', 'defer!test_defer'], function(test_defer1, test_defer2){
    alert(test_defer1+' '+test_defer2);
})
