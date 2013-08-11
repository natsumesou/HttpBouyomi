document.addEventListener('DOMNodeInserted', function(e) {
    var line = e.target;

    if(line.getAttribute('nick') === 'jtv') {
        return false;
    }

    switch (line.getAttribute('type')) {
        case 'privmsg':
            var msg = line.getElementsByClassName('message').item(0);
            var text = msg.innerHTML;
            var client = new XMLHttpRequest();
            client.open('GET', 'http://localhost:9292/?text=' + text, true);
            client.onreadystatechange = function() {
                if(client.readyState != 4) {
                    console.error('error');
                }else{
                    console.error('ok');
                }
            };
            client.send();
            break;
    }
}, false);
