
function range (start, stop, step) {
    step = step || 1;
    const arr = [];
    for (let i = start; i < stop; i += step) {
        arr.push(Math.round((i + Number.EPSILON) * 100) / 100)
    }
    return arr;
};

function getPresentAndFuture() {
    
    let queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);

    let present = urlParams.get('present');
    let future  = urlParams.get('future');

    return {"present": present, "future": future};

    }



function generateTableHead(table, data) {

    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
        }  
        

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
    }


function createTableData(present, percentage){

   const data = []

    for (let j = 1; j < 21; j++) {

        value = Math.round(Math.pow(1 + percentage, j ) * present)

        data.push({"year": j, "value": value})

    }

    return data

}

function createHeadData(){
    return ['Year', 'Value'];
}

function createTable(present, future, percentage){

    let tableData = createTableData(present, percentage); 
    let headData = createHeadData();

    
    

    let div = document.querySelector("div.table")
    div.innerHTML = ''


    
    let table = document.createElement('table');
    
    table.id = 'test';
    div.appendChild(table);
    
    
    generateTableHead(table, headData);
    generateTable(table, tableData);
    
}



function createDropDown() {

    let dropDown = document.querySelector('.btn[name="annual-gains"]');

    let dropDownMenu = document.querySelector('.dropdown-menu[name="test"]');

    let {present: present, future: future} = getPresentAndFuture();

    present = parseInt(present);
    future = parseInt(future);


    
     dropDown.addEventListener("click", function (event) {



        dropDownMenu.innerHTML = ''
        
        let values = range(0.05, 1.05, .05);
        
        for (let i = 0; i < values.length; i += 1) {
            
            let value = values[i]

            
            const myOption = document.createElement('button');
            // id
            myOption.type = 'button';
            // クラス名
            myOption.className = "dropdown-item";
            // テキスト内容

            myOption.dataset.value = values[i]
            myOption.innerHTML = values[i];

            myOption.addEventListener("click", (event) => {
                dropDown.innerHTML = event.target.dataset.value;
                let percentage = parseFloat(event.target.dataset.value);
                createTable(present, future, percentage)
            })
            
            dropDownMenu.appendChild(myOption);
            
        
        }

        event.preventDefault();
        

    })

}


createDropDown()






        
        



   

