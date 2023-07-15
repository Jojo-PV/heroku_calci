document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    
    var data = {
        num1: num1,
        num2: num2
    };
    
    fetch('/addition', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.querySelector('#result').innerHTML = 'The sum is totally : ' + result.sum;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
