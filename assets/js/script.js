var count = parseInt(window.localStorage.getItem('count'));

if ( !count ) {
	count = 0;
}

document.getElementById('score').innerHTML = 'Score - ' + count;

document.getElementById('click-btn').addEventListener('click', myFunction);

function myFunction() {
    var count = parseInt( window.localStorage.getItem('count') );

    if ( !count ) {
        count = 0;
    }

    count = count + 1;

    window.localStorage.setItem('count', count);

    document.getElementById('score').innerHTML = 'Score - ' + count;
};

document.getElementById('reset-btn').addEventListener('click', myReset);

function myReset() {
    var count = 0;

    window.localStorage.setItem('count', count);

    document.getElementById('score').innerHTML = 'Score - ' + count;
};
