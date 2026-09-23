let elem = document.querySelector('#imp1');
        
        let mas; 

        console.log(elem.textContent);
        //console.log(elem.value);
        elem.addEventListener('focus', function() {
            console.log(elem.value);
        });
        elem.addEventListener('blur', function() {
            console.log(elem.value);
            mas= elem.value;
        });
        //
        let mas2 = [[1,0,0,0,0,0,0,0,0],
                    [1,2,3,4,5,6,7,8,9],
                    [2,3,4,5,6,7,8,9,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0]];
        elem.addEventListener('blur', function() {
            if (mas.length === 81) {
                mas1 = mas.split('');
                //console.log(mas1);
                let a = 0;
                for (let i = 0; i <= 8; i++) {
                    for (let j = 0; j <= 8; j++){
                        mas2[i][j]= +mas1[a];
                        a=a+1; 
                    }
                }
                
            }
                 
        });
        //            
        let table = document.querySelector('#table');

        for (let row of table.rows) {
            for (let cell of row.cells) {
                console.log(cell);
            }
        }
        let horizon =[] , vertical =[];
        for (let row of table.rows) {
            vertical.push(row.cells[0].innerHTML);
        }
        console.log(vertical);
        let r = table.rows[1].cells[1].innerHTML;
        table.rows[2].cells[1].textContent = '42';
        console.log(r);
        
        var tds = document.querySelectorAll('td');

        for (var i = 0; i < tds.length; i++) {
            tds[i].addEventListener('click', function func() {
                var input = document.createElement('input');
                input.value = this.innerHTML;
                this.innerHTML = '';
                this.appendChild(input);
                
                var td = this;
                input.addEventListener('blur', function() {
                    td.innerHTML = this.value;
                    td.addEventListener('click', func);
                });
                
                this.removeEventListener('click', func);
            });
        }        
        table.rows[2].cells[1].textContent = '42';
        //let table = document.querySelector('td'); 
        let table1 = document.createElement('table');
        table1.id = 'aa';
        //let elem1 = document.querySelector('#22');
        table.rows[2].cells[1].textContent = tableCreate(3);

       /* button.addEventListener('click', function () {
            let ind = [];
            for (let i = 0; i < 3; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < 3; j++) {
                    let td = document.createElement('td');
                    if (mas2[i][j] ===0) {
                        td.textContent = mas2[i][j];
                        tr.appendChild(td);
                    }
                }    
            }
        });    */
        //

        function tableCreate(u){
            var body = document.body,
            tbl  = document.createElement('table');// создание переменной
            tbl.setAttribute("id", "myTable");// создание id='myTable'
            tbl.style.width  = '53px'; // Добавление свойств размера
            tbl.style.border = '1px solid green';// Добавление свойств бордюра
    
            for(var i = 0; i < u; i++){
                var tr = tbl.insertRow(); //Добавление
            
                for(var j = 0; j < u; j++){
                    
                    var td = tr.insertCell(); //Добавление
                    
                    var input = document.createElement('input');
                    input.type = "text";
                    input.style.width  = '5px';
                    input.style.height = '5px';
                    input.style.fontSize = '4px';
                    input.style.textAlign = 'center';
                    input.value = "9";
                    
                    input.setAttribute("id", String(i)+String(j));
                    td.appendChild(input);
                    td.style.border = '1px solid green';
                   
                }
            }
            body.appendChild(tbl);
        }
    
        tableCreate(9);        

        document.addEventListener('click', function(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            console.log('Кликнут элемент:', element);
        });
// Source - https://stackoverflow.com/q/18700892 / Источник — https://stackoverflow.com/q/18700892
// Posted by Zach Lucas, modified by community. See post 'Timeline' for change history
//Опубликовано Заком Лукасом, отредактировано сообществом. См. пост «Хронология» для просмотра истории изменений
// Retrieved 2026-03-06, License - CC BY-SA 3.0 
// Проверено 6 марта 2026 года. Лицензия — CC BY-SA 3.0

 /*document.getElementById('InstalledApps').innerHTML += '<table id="bigAppsTable" border="1"><td>';

    for (var i = 9; i>-1;i--){  
        document.getElementById('InstalledApps').innerHTML += '<table id="appsTable'+i+'" border="1"><tr></tr>';

        var thirdRow=document.getElementById("appsTable"+i).insertRow(1);
        if (the_data[i]['release'] != null){
        thirdRow.insertCell(-1).innerHTML="<b>Release: ";
        thirdRow.insertCell(-1).innerHTML=the_data[i]['release'];
        }
        var secondRow=document.getElementById("appsTable"+i).insertRow(1);
        secondRow.insertCell(-1).innerHTML="<b>Version: ";
        secondRow.insertCell(-1).innerHTML=the_data[i]['version'];

        var firstRow=document.getElementById("appsTable"+i).insertRow(1);
        firstRow.insertCell(-1).innerHTML="<b>Name:";
        firstRow.insertCell(-1).innerHTML=the_data[i]['name'];

        }*/
        $('#21').append('<table id=a33');
     
        for (let i = 0; i < 3; i++) {
            $('#a33').append ('<tr id =i></tr> ') 
            for (let j = 0; j < 3; j++){
                $('#i').append ('<td id=j>1</td>') 
            }
        }
        