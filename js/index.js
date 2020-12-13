
function extractSubmit() {

    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        let values = [];
        var elements = form.querySelectorAll("input")

        elements.forEach(element => {
            values.push(element.value)
        });

        let present = values[0];
        let future = values[1];

        event.preventDefault();



        location.href = "../index/table.html" + "?present=" + present + "&future=" + future;



    })

}



extractSubmit();




