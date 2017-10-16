function AppModule() {
    function search(q) {
        fetch('api.php?q='+q).then(function(response) {
            return response.json();
        }).then(function(body) {
            var resultDiv = document.getElementById('results');

            body.forEach(function(result) {
                var newDiv = document.createElement('div');
                newDiv.classList.add('col-4');
                var img = document.createElement('img');
                img.src = result.url;
                newDiv.appendChild(img);
                resultDiv.appendChild(newDiv);
            });
        });
    }

    return {
        search: search,
    }
}
