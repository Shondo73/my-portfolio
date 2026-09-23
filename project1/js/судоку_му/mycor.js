const arr1 =[];
    for (let j=b-3; j<b; j++){
        console.log(' '+(a-3)+j );
        
        let ff1 =arr[(a-3)][j];
        console.log(ff1);
        if(Array.isArray(ff1)){
            if (ff1.includes(String(target)) ){
                _pus.push(target);
            }
        }    
    }
    
    console.log(_pus);
// 
function square_search(arr, target){  // квадрат 3*3
    let _pus =[]; let _pus1 =[]; let _pus2 =[]; let dur = 0; let dur_v =[false,,];
    
    
    if (arr[0].includes(target) ){
        _pus.push(target);
    }
    
    if (arr[1].includes(target) ){
        _pus1.push(target);
    }
    
    if (arr[2].includes(target) ){
        _pus2.push(target);
    }
// 
    let ti ; 
    if (_pus.length==0){
        dur++; 
    } else {
        ti = 0;
    }
    if (_pus1.length==0){
        dur++
    }else {
        ti = 1;
    }
    if (_pus2.length==0){
        dur++
    } else {
        ti = 2;
    }
    if (dur===2){
        dur_v[0]= true;
        dur_v[1]= ti;
    }
    /*/ вертикаль
    let _vpus =[]; let _vpus1 =[]; let _vpus2 =[]; let durv = 0;
    for (let i = 0; i<3; i++){
        For (let j = 0; j<3; j++){
            if (j == 0){
                if (arr[i].includes(target) ){
                    _vpus.push(target);
                }
            }
            if (j==1){
                if (arr[i].includes(target) ){
                    _vpus1.push(target);
                }
            }
            if (j==2){
                if (arr[i].includes(target) ){
                    _vpus2.push(target);
                }
            }
        }
    }
    let vti ; 
    if (_pus.length==0){
        durv++; 
    } else {
        vti = 0;
    }
    if (_pus1.length==0){
        durv++
    }else {
        vti = 1;
    }
    if (_pus2.length==0){
        durv++
    } else {
        vti = 2;
    }
    if (durv===2){
        dur_v[0]= true;
        dur_v[2]= vti;
    }/*/
}
// 
for (let i = 0; i<3; i++){
        for (let j = 0; j<3; j++){
            let a = i*3 + 3; let b = j*3 + 3;
            // console.log('a'+a); console.log('b'+b);
            for (let i = a-3; i<a; i++){
                console.log('i'+ i);
                for (let j = b-3; j<b; j++){
                    console.log('j'+j);
                }
            }
        }
    }



// 
document.querySelector('table').addEventListener('click', function(event) {  
            // Находим ближайший родительский TR-элемент от места клика  
            const row = event.target.closest('tr');  
            // Если клик был не на TR или его дочерних элементах, прерываем обработку  
            if (!row) return;  
            // Игнорируем клики по специальным элементам  
            if (event.target.matches('.no-click, .no-click *')) return;  
            // Получаем ID и обрабатываем клик  
            const id = row.getAttribute('data-id');  
            // Выполняем нужное действие  
            console.log(id);  
        });
         //ячейка таблицы 
        table.addEventListener('click', function func1() {
            let r = table.rows[4].cells[4].innerHTML;
            
            console.log(r);
        }); 
         document.addEventListener('click', function(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            console.log('Кликнут элемент:', element);
        }); 
        let elem1 = document.querySelector('table');
        elem1.addEventListener('click', function() {
            console.log( elem1.id );
        }); 
        //
        button1.addEventListener('click', function fun() {
            for (i=0; i<9; i++) {
                for(j=0; j<9; j++){
                    if (mas2[i][j]===0){
                        let ver1 = vert(mas2,j);
                    // console.log(ver1);
                        let hor1 = hori(mas2,i);
                   // console.log(hor1);
                        let squa1 = squar(mas2,i,j);
                    //console.log(squa1);
                        let mas3 = possibilit(ver1, hor1, squa1);
                    //console.log(mas3);
                        cracs (i,j,mas3)
                    }
                }
            }
            
        });
        //
        function du(mas){
            let a = 0;
                for (let i = 0; i <= 3; i++) {
                    for (let j = 0; j <= 3; j++){
                        mas2[i][j]= mas[a];
                        a=a+1; 
                    }
                }
                console.log(mas2)
                return mas2
        }
        //
        function ver9(chis){
            for (i=0; i<9; i++){
                let set;
                set= set+' #'+'a'+'i'+ String(chis)+',';
            }
            return set;
        }
        ver9(2);


        //
        $('#table').ready(function() {  
            $('table').on('focusout', function() {  
                // Код для фиксации снятия фокуса  
                console.log(elem.value);
                console.log('!!!');

            });  
        });
        //попытка вставить импут 
        let table3 = document.querySelector('#table');
        table3.addEventListener('click', function func00(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            let id1 =(event.target.id) ;
            let ai = id1[1];
            let aj = id1[2];
            let id = String('#'+id1);
            if (mas2[ai][aj]===0){
                $(id).append("<input type='text' value='' id='imput00'/>").focus('#imput00');
                
                console.log(id);
                
                $('#imput00').css('width', '25px');
                $('#imput00').css('height', '25px');
                $('#imput00').css('font-size', '15px');
                imput00.addEventListener('blur', function() {
                    //console.log(elem.value);
                    mas2[ai][aj]= elem.value;
                    console.log(elem.value);
                    td.textContent = elem.value;
                    // $('#imput00').remove();
                     console.log(mas2)
                });
            }
        }); 
        // 
        document.addEventListener('click', function(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            console.log( element);
             
        }); 

        //
        document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  if((e = document.querySelector("#form_error_message_frontend + div > div:last-child label")) !== null)
    e.classList.add('last'); // Аналог выборки и присвоения класса
  // Если элементов будет много
  Array.prototype.forEach.call(document.querySelectorAll("#form_error_message_frontend + div > div:last-child label"), function(e){
   e.classList.add('last');
  });
});
    /*$(id).on('click', 'td', function() {
                    $(this).html("<input type='text' value='"+$(this).text()+"'/>");
                });*/
for (let i = 0; i <= 2; i= i+1){
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
}                
//
//<td id="a00"></td>

//<script>
    // Получаем элемент <td>
    const td = document.getElementById('a00');

    // Добавляем input-элемент внутри <td>
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.name = 'inputField';
    inputElement.id = 'inputId'; // задаём уникальный ID
    inputElement.value = 'Начальное значение';
    td.appendChild(inputElement);

    // Устанавливаем фокус на input-элемент
    inputElement.focus();

    // Обработчик события на случай, если нужно удалить элемент при потере фокуса
    inputElement.addEventListener('blur', () => {
        // Здесь можно добавить код для удаления элемента (например, через метод removeChild)
        console.log('Фокус потерян, элемент удален');
    });
