let elem = document.querySelector('#imp1');
let elem2 = document.querySelector('#imp2');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let ver2= ver9(2);
let ver3= ver9(3);
let ver5= ver9(5);
let ver6= ver9(6);
let hor2= hor9(2);
let hor3= hor9(3);
let hor5= hor9(5);
let hor6= hor9(6);
let mas; // для получения строчного числа стр.
let array_of_probabilities= [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],];
       // console.log(elem.textContent);
        //console.log(elem.value);
       /* elem.addEventListener('focus', function() {
            //console.log(elem.value);
        });
        elem.addEventListener('blur', function() {
            //console.log(elem.value);
           
        });*/
        //004080002006001090030040506000007300700820000890000000060000005100006400300000010
let mas2 = [[0, 7, 4, 6, 8, 0, 1, 3, 2],
            [0, 8, 6, 0, 0, 1, 7, 9, 4],
            [0, 3, 1, 7, 4, 0, 5, 8, 6],
            [6, 1, 2, 0, 0, 7, 3, 0, 8],
            [7, 4, 0, 8, 2, 0, 9, 6, 1],
            [8, 9, 0, 0, 0, 0, 2, 0, 7],
            [4, 6, 0, 0, 0, 0, 8, 0, 5],
            [1, 0, 0, 0, 0, 6, 4, 0, 3],
            [3, 0, 0, 0, 0, 0, 6, 1, 9]];// массив для судоку
// const kup3_3 = [[3, 3],[3, 6],[3, 9],[6, 3],[6, 6],[6, 9],[9, 3],[9, 6],[9, 9]];        //  для определения квадрата 

        let mas1 = [];// для массива судоку из mas
        let mas3 = [[1,2,3],[4,5,6],[7,8,9]]; //массив 3*3. Возможнастей 
        
        //деиствие при потере фокуса 
        elem.addEventListener('blur', function() {
            mas= elem.value;//запись в массив из импута
            if (mas.length === 81) {//проверка на количество знаков
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
                 
        });//создание игрового двумерного массива судоку
        /*elem.addEventListener('focus', function() {
           // console.log(mas2);
        });*/
//сетка судоку
        
        let table = document.querySelector('#table');
        elem.addEventListener('blur', function func() {
            //console.log(typeof(mas));
    

        for (let i = 0; i < 9; i++) {
            let tr = document.createElement('tr');
            
            for (let j = 0; j < 9; j++) {
                let td = document.createElement('td');
                td.setAttribute("id", 'a'+ String(i)+String(j));
                if (!(mas2[i][j]===0)){
                    td.textContent = mas2[i][j];
                } else {
                    td.textContent = ' ';
                }
                tr.appendChild(td);
            }
            
            table.appendChild(tr);
        }   
	    this.removeEventListener('blur', func);
        $(ver3).css('border-left-width', '2px');
        $(ver3).css('border-left-color', 'black');
        $(ver2).css('border-right-width', '2px');
        $(ver2).css('border-right-color', 'black');

        $(ver5).css('border-right-width',' 2px');
        $(ver5).css('border-right-color', 'black');
        $(ver6).css('border-left-width',' 2px');
        $(ver6).css('border-left-color', 'black');

        $(hor2).css('border-bottom-width',  '2px');
        $(hor2).css('border-bottom-color', 'black');
        $(hor3).css('border-top-width',  '2px');
        $(hor3).css('border-top-color', 'black');

        $(hor5).css('border-bottom-width',  '2px');
        $(hor5).css('border-bottom-color', 'black');
        $(hor6).css('border-top-width',  '2px');
        $(hor6).css('border-top-color', 'black');

        });            
        //table.rows[0].cells[0].style.background = 'red';
        //console.log(table.rows[0].cells[0].innerHTML);
        elem.addEventListener('blur', function() {
            //console.log(typeof(mas));
            
            let horizon =[];
            let vertical =[];
            for (let row of table.rows) {
                vertical.push(row.cells[0].innerHTML);
            }
            //console.log(vertical);
        });
        /*elem.addEventListener('blur', function func() {
            let r = table.rows[4].cells[3].innerHTML;
        
            console.log(r);
        });*/
    //поиск 0 - ноля
    
let button = document.querySelector('#button');
let mass00 = document.querySelector('#mass00');
let button1 = document.querySelector('#button1');
let table1 = document.querySelector('#table');
        button.addEventListener('click', function() {
            let ind = [];
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (mas2[i][j] ===0) {
                        cracsa (i,j);
                    }
                }
            }
        });        
        button1.addEventListener('click', function() {
            let ind = [];
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (mas2[i][j] ===0) {
                        ind.push([i,j]);
                        let hor1 = hori(mas2,i);//i вертикаль
                        //console.log(hor1);
                        let ver1 = vert(mas2,j);//j горизонталь
                        //console.log(ver1);
                        let squa1 = squar(mas2,i,j); //квадрат
                        //console.log(squa1);
                        possibilit1 = possibilit(ver1, hor1, squa1);
                        //print(possibilit1);
            //
            
                        cracs (i,j,possibilit1);

                    }
                }    
            } 
            

        });
    //   клик мыши сокрашение возможных чисел
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    console.log(array_of_probabilities);
    // kvx (array_of_probabilities, 9, 9);
    // square_search(array_of_probabilities, 3, 9, 2);
    // console.log(kyb());
    for (let i=1; i<10; i++){

        console.log (kyb (array_of_probabilities, i));
        console.log(array_of_probabilities);
    }
}); 
// 
// функция куба 3*3
function kyb (arr, target){
    let ky = [];
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            let kyy = square_search(arr, (i*3)+3, (j*3)+3, target)
            if((kyy)[0]){
                if(kyy.length===2){
                    let aa = ['h', kyy[1], (j*3)];
                    console.log(aa[0]);
                    if(aa[2]===0){
                        for (let j=3; j<9; j++){
                            if(typeof arr[aa[1]][j] === 'number' && !Number.isNaN(arr[aa[1]][j])){
                                console.log('Это обычное число');
                            } else {
                                const index = arr[aa[1]][j].indexOf(target);
                                if (index !== -1) {
                                arr[aa[1]][j].splice(index, 1); // [1, 3, 5, 7]
                                }
                            }

                        }    
                        console.log('0');
                    }
                    if(aa[2]===3){
                        for (let j = 0; j < 9; j++) {
                            if (i >= 3 && i <= 5) {
                                continue; // пропускаем 3, 4, 5
                            }
                            if(typeof arr[aa[1]][j] === 'number' && !Number.isNaN(arr[aa[1]][j])){
                                console.log('Это обычное число');
                            } else {
                                const index = arr[aa[1]][j].indexOf(target);
                                if (index !== -1) {
                                arr[aa[1]][j].splice(index, 1); // [1, 3, 5, 7]
                                }
                            }
                        console.log(i);
                        }
                        console.log('3');
                    }
                    if(aa[2]===6){
                        for (let j=0; j<6; j++){
                            if(typeof arr[aa[1]][j] === 'number' && !Number.isNaN(arr[aa[1]][j])){
                                console.log('Это обычное число');
                            } else {
                                const index = arr[aa[1]][j].indexOf(target);
                                if (index !== -1) {
                                arr[aa[1]][j].splice(index, 1); // [1, 3, 5, 7]
                                }
                            }

                        }
                        
                        console.log('6');
                    }
                }
            
            }
            console.log(square_search(arr, (i*3)+3, (j*3)+3, target));
        }
        console.log('куб '+ ((i*3)+3)+((j*3)+3)+' '+ target);
        
    }
    return ky;
}
function hv_ij_ab(hv, kyy, i, j, target){ // target, hv, i || j
    let ky1;
    if( hv===h){
        ky1=kyy[1];
    }else {
        ky1=kyy[2];
    }
    return ky1;
}
/*/  kvx
function kvx (arr, a, b) {
    const arrx = [];
    for (let i = a-3; i<a; i++){
        console.log('i'+ i);
        for (let j = b-3; j<b; j++){
            console.log('j'+j);
            arrx.push(arr[i][j]);
        }
    }
    let x = 0;
    const arrx1 = [[0,0,0],[0,0,0],[0,0,0]];
    for (let i = 0; i<3; i++){
        for (let i = 0; i<3; i++){
            arrx1[i][j] = arrx[x];
           
            if(x<9){
                x++;
            }
        }
    }
    console.log(arrx);
    console.log(arrx1);
}
/*/ 
function square_search(arr, a, b, target){  // квадрат 3*3
    
    let _pus =[]; let _pus1 =[]; let _pus2 =[]; let dur = 0; let dur_v =[false,,];
    
    for (let j=b-3; j<b; j++){
        //console.log(' '+(a-3)+j );
        
        let ff1 =arr[(a-3)][j];
        //console.log(ff1);
        if(Array.isArray(ff1)){
            if (ff1.includes(String(target)) ){
                _pus.push(target);
            }
        }    
    }
    
    //console.log(_pus);
    
    for (let j=b-3; j<b; j++){
        //console.log(' '+(a-2)+j );
        
        let ff2 =arr[(a-2)][j];
        //console.log(ff2);
        if(Array.isArray(ff2)){
            if (ff2.includes(String(target)) ){
                _pus1.push(target);
            }
        }    
    }
    //console.log(_pus1);
    for (let j=b-3; j<b; j++){
        //console.log(' '+(b-3)+j );
        
        let ff2 =arr[(a-1)][j];
        if(Array.isArray(ff2)){
            if (ff2.includes(String(target))){
                //console.log('++')
                _pus2.push(target);
            }
        }    
    }
    
    //console.log(_pus2);
    
   
    
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
        //dur_v[1]= ti;
        dur_v[1]= a-3+ti;
    }
    // вертикаль
    let v_pus =[]; let v_pus1 =[]; let v_pus2 =[]; let vdur = 0;
    
    // const arr1 =[];
    for (let i=a-3; i<a; i++){
        //console.log(' '+i+(b-3) );
        
        let ff1 =arr[i][(b-3)];
        //console.log(ff1);
        if(Array.isArray(ff1)){
            if (ff1.includes(String(target)) ){
                v_pus.push(target);
            }
        }    
    }
    
    //console.log(v_pus);

    for (let i=a-3; i<a; i++){
        //console.log(' '+i+(b-2) );
        
        let ff1 =arr[i][(b-2)];
        //console.log(ff1);
        if(Array.isArray(ff1)){
            if (ff1.includes(String(target)) ){
                v_pus1.push(target);
            }
        }    
    }
    
    //console.log(v_pus1);

    for (let i=a-3; i<a; i++){
        //console.log(' '+i+(b-1) );
        
        let ff1 =arr[i][(b-1)];
        //console.log(ff1);
        if(Array.isArray(ff1)){
            if (ff1.includes(String(target)) ){
                v_pus2.push(target);
            }
        }    
    }
    
    //console.log(v_pus2);

    let vti ; 
    if (v_pus.length==0){
        vdur++; 
    } else {
        vti = 0;
    }
    if (v_pus1.length==0){
        vdur++;
    }else {
        vti = 1;
    }
    if (v_pus2.length==0){
        vdur++;
    } else {
        vti = 2;
    }
    if (vdur===2){
        dur_v[0]= true;
        dur_v[1]= '0';
        //dur_v[2]= vti;
        dur_v[2]= b-3+ vti;
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
    //console.log(dur_v);
    return dur_v;
}  
     
    //    клик мыши создание массива с возможными числами в места 0.(массив с тройным вложением)
button1.addEventListener('click', function() {
    let ind = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            array_of_probabilities[i][j]= mas2[i][j];
            if (mas2[i][j] ===0) {
                ind.push([i,j]);
                let hor1 = hori(mas2,i);//i вертикаль
                //console.log(hor1);
                let ver1 = vert(mas2,j);//j горизонталь
                //console.log(ver1);
                let squa1 = squar(mas2,i,j); //квадрат
                //console.log(squa1);
                array_of_probabilities[i][j]=possibilit_l(ver1, hor1, squa1);
            }
        }
                
    } 
    
});   
const mas2a1 = [''];
option1.addEventListener('click', function() {
    let inputX='';
    console.log('+++') 
    for (let i = 0; i < 9; i++) {
            mas2a1[i] = [];
        for (let j = 0; j < 9; j++) {
            mas2a1[i][j] = mas2[i][j]
            inputX = inputX + String(mas2[i][j]);
        }        
    }   
    console.log(inputX) ;
});  
  
//нахождение чисел
mass00.addEventListener('click', function() {
    let zero = countNumber1(mas2, 0);
    let zero1;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[i][j])){
                arr = array_of_probabilities[i][j];
                if (arr.length === 1){
                    //console.log('+++---+++');
                    mas2[i][j]=+(arr[0]);
                    //console.log(mas2);
                    number_found (i,j,arr);
                }
            }
        }
    }  
    //
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[i][j])){
                arr = array_of_probabilities[i][j];
                if (arr.length === 2){
                    for (let k = 0; k < 9; k++) {
                        if(Array.isArray(array_of_probabilities[i][k])){
                            let arr2 =array_of_probabilities[i][k]
                            if (j!=k & JSON.stringify(arr) === JSON.stringify(arr2)){
                                //console.log('-+++-')
                                //console.log(String(i)+" "+String(j)+" & " +  String(i)+" "+String(k) );
                                for (let k = 0; k < 9; k++) {
                                    if(Array.isArray(array_of_probabilities[i][k])){
                                        let arr3 = array_of_probabilities[i][k];
                                        if (arr3.length <= 3){
                                            //console.log(String(i)+" "+String(k));
                                            let result = arr3.filter(item => !arr2.includes(item));
                                            //console.log(result); // [1, 3, 5]
                                            if (result.length ===1){
                                                mas2[i][k]=+(result[0])
                                            }
                                            //console.log(mas2);
                                            number_found (i,k,result);
                                        }    
                                    }   
                                }    
                            }
                        }
                    }        
                }
                
            }
        }
    }
    //
    for (let i = 0; i < 9; i++) {
        let merged = [];
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[i][j])){
                let arr = array_of_probabilities[i][j];
                for (let k=0; k< arr.length; k++){
                    merged.push(arr[k])
                }
                 
                
            }
        }
        let nup;
        for (let i = 1; i<=9; i++){
            //console.log('++---++');
            if(countNumber(merged, String(i)) ===1){
                //console.log('++-'+(String(i)) +'-++');
                nup=i;
            }
        }
        //console.log(nup);
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[i][j])){
                
                let arr = array_of_probabilities[i][j];
                //console.log(arr)
                if (arr.includes(String(nup))){
                    //console.log(String(i)+String(j));
                    mas2[i][j]= nup;
                    //console.log(mas2);
                    let pup =[nup];
                    number_found (i,j,pup);
                }
            }
        }            
    }
    // вертикаль
    for (let i = 0; i < 9; i++) {
        let merged = [];
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[j][i])){
                let arr = array_of_probabilities[j][i];
                for (let k=0; k< arr.length; k++){
                    merged.push(arr[k])
                }
                 
                
            }
        }
        let nup;
        for (let i = 1; i<=9; i++){
            //console.log('++---++');
            if(countNumber(merged, String(i)) ===1){
                //console.log('++-'+(String(i)) +'-++');
                nup=i;
            }
        }
        //console.log(nup);
        for (let j = 0; j < 9; j++) {
            if(Array.isArray(array_of_probabilities[j][i])){
                
                let arr = array_of_probabilities[j][i];
                //console.log(arr)
                if (arr.includes(String(nup))){
                    //console.log(String(j)+String(i));
                    mas2[j][i]= nup;
                    //console.log(mas2);
                    let pup =[nup];
                    number_found (j,i,pup);
                }
            }
        }            
    }
    function errork (mas2) {

        for (let i = 0; i < 9; i++) {
            let a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 0;
            for (let j = 0; j < 9; j++) {

                if (mas2[i][j]===1){
                    ++a1;
                    if (a1===2){
                        console.log('горизонт'+a1);
                        return false;
                    }
                }
                if (mas2[i][j]===2){
                    ++a2;
                    if (a2===2){
                        console.log('горизонт'+a2);
                        return false;
                    }
                }
                if (mas2[i][j]===3){
                    ++a3;
                    if (a3===2){
                        console.log('горизонт'+a3);
                        return false;
                    }
                }
                if (mas2[i][j]===4){
                    ++a4;
                    if (a4===2){
                        console.log('горизонт'+a4);
                        return false;
                    }
                }
                if (mas2[i][j]===5){
                    ++a5;
                    if (a5===2){
                        console.log('горизонт'+a5);
                        return false;
                    }
                }
                if (mas2[i][j]===6){
                    ++a6;
                    if (a6===2){
                        console.log('горизонт'+a6);
                        return false;
                    }
                }
                if (mas2[i][j]===7){
                    ++a7;
                    if (a7===2){
                        console.log('горизонт'+a7);
                        return false;
                    }
                }
                if (mas2[i][j]===8){
                    ++a8;
                    if (a8===2){
                        return false;
                        console.log('горизонт'+a8);
                    }
                }
                if (mas2[i][j]===9){
                    ++a9;
                    if (a9===2){
                        console.log('горизонт'+a9);
                        return false;
                    }
                }

            }    
        } 
        for (let j = 0; j < 9; j++) {
            let a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 0;
            for (let i = 0; i < 9; i++) {

                if (mas2[i][j]===1){
                    ++a1;
                    if (a1===2){
                        console.log('горизонт'+a1);
                        return false;
                    }
                }
                if (mas2[i][j]===2){
                    ++a2;
                    if (a2===2){
                        console.log('горизонт'+a2);
                        return false;
                    }
                }
                if (mas2[i][j]===3){
                    ++a3;
                    if (a3===2){
                        console.log('горизонт'+a3);
                        return false;
                    }
                }
                if (mas2[i][j]===4){
                    ++a4;
                    if (a4===2){
                        console.log('горизонт'+a4);
                        return false;
                    }
                }
                if (mas2[i][j]===5){
                    ++a5;
                    if (a5===2){
                        console.log('горизонт'+a5);
                        return false;
                    }
                }
                if (mas2[i][j]===6){
                    ++a6;
                    if (a6===2){
                        console.log('горизонт'+a6);
                        return false;
                    }
                }
                if (mas2[i][j]===7){
                    ++a7;
                    if (a7===2){
                        console.log('горизонт'+a7);
                        return false;
                    }
                }
                if (mas2[i][j]===8){
                    ++a8;
                    if (a8===2){
                        console.log('горизонт'+a8);
                        return false;
                    }
                }
                if (mas2[i][j]===9){
                    ++a9;
                    if (a9===2){
                        console.log('горизонт'+a9);
                        return false;
                    }
                }

            }    
        }
        for (let a = 0; a < 3; a++) {
            
            for (let b = 0; b < 3; b++) {
                let a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 0;
                let y,y1;
                let x,x1; 
                if(a===0){
                    y=0;
                    y1=3;
                } else if (a===1){
                    y=3;
                    y1=6;
                } else if (a===2){
                    y=6;
                    y1=9;
                }
                if(b===0){
                    x=0;
                    x1=3;
                } else if (b===1){
                    x=3;
                    x1=6;
                } else if (b===2){
                    x=6;
                    x1=9;
                }

                for (let i=y; i<y1; i++){
                    for (let j=x; j<x1; j++){
                        if (mas2[i][j]===3){
                            ++a2;
                            if (mas2[i][j]===3){
                            ++a1;
                            if (a1===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                            if (a2===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===3){
                            ++a3;
                            if (a3===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===4){
                            ++a4;
                            if (a4===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===5){
                            ++a5;
                            if (a5===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===6){
                            ++a6;
                            if (a6===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===7){
                            ++a7;
                            if (a7===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===8){
                            ++a8;
                            if (a8===2){
                                //console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        if (mas2[i][j]===9){
                            ++a9;
                            if (a9===2){
                                console.log('квадрат'+' '+ i+j);
                                return false;
                            }
                        }
                        //console.log( String(i) + ' ' + String(j) + ' ' + 'проверка')
                    }
                }
            }
        }
        return true;   
    }
    
    //console.log(errork (mas2));
    zero1= countNumber1(mas2, 0);
    //console.log(zero1);
    //console.log(zero-zero1);
    //const merged = [...arr1, ...arr2, ...arr3];
});

// проверяем количество и записываем в таблицу 
function number_found (i,j,arr){
        if (arr.length ===1){
            let td = document.querySelector('#a'+ String(i)+String(j));
            
            td.textContent = arr[0];
        }    
    }
//countNumber(arr, target) определяет количество элемента(target) в одномерном массиве (arr)
function countNumber(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count++;
    }
  }
  return count;
}
//countNumber(arr, target) определяет количество элемента(target) в двумерном массиве (arr)
function countNumber1(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == target) {
            count++;
        }
    }    
  }
  return count;
}
// вероятные числа
    //вертикаль
function vert(arr,  j = 1) {
            //console.log('!');
    let ver = [];
    for (let i = 0; i < 9; i++)  {
                
        if (!(arr[i][j]=== 0)) {
            ver.push(arr[i][j]);
        } 
    }
    return ver;
}
    //горизонт
function hori(arr,  i = 1) {
            //console.log('!');
    let hor = [];
    for (let j = 0; j < 9; j++)  {
        if (!(arr[i][j]=== 0)) {
            hor.push(arr[i][j]);
        } 
    }
    return hor;
}
    //квадрат

function squar(arr, i,  j) {
    let a;
    let b;
    if (i < 3) {
        a=0;
    } else if ( i<6 ) {
        a=3
    } else {
        a=6
    }
    if (j < 3) {
        b=0;
    } else if ( j<6 ) {
        b=3
    } else {
        b=6
    }
    let squa = [];
    for (let i = a; i < 3+a; i++) {
        for (let j = b; j < 3+b; j++){
            if (!(arr[i][j]=== 0)) {
                squa.push(arr[i][j]);
            }
                        
        }
    } 
    return squa; 
}    
//    вероятные числа   
function possibilit (ver, hor, squa) {
    let possibility = [];
    for (let i = 1; i<=9; i++)  {  
                
        if (ver.includes(i)) {
                    //console.log("Число найдено!");
            possibility.push(' ');
        } else if (hor.includes(i)){
                    //console.log("Число найдено!");
            possibility.push(' ');
        } else if (squa.includes(i)){
                    //console.log("Число найдено!");
            possibility.push(' ');
        } else {
            possibility.push(String(i));
        } 
                     
    } 
    return possibility;

}  
//
        function possibilit_l (ver, hor, squa) {
            let possibility = [];
            for (let i = 1; i<=9; i++)  {  
                
                if (ver.includes(i)) {
                    //console.log("Число найдено!");
                    //possibility.push();
                } else if (hor.includes(i)){
                    //console.log("Число найдено!");
                    //possibility.push();
                } else if (squa.includes(i)){
                    //console.log("Число найдено!");
                   // possibility.push();
                } else {
                    possibility.push(String(i));
                } 
                     
            } 
            return possibility;

        }
   //
        /*for (let i = 0; i<9 ; i++) {
            for (let j=0; j<9 ; j++){
                if (mas2[i][j]===0 ){
                    table.rows[i].cells[j].appendChild(newElement);
                }
            }
        }*/
        
        
    //jQuery
    
button1.addEventListener('click', function fun() {
    for (i=0; i<9; i++) {
        for(j=0; j<9; j++){
            if (mas2[i][j]===0){
                    
            }
        }
    }
            
});
//
function cracs (f,d,mas) { 
    let ff = '#'+'a'+String(f)+String(d);
    let ffa = '#'+'a'+String(f)+String(d)+' table';
    $(ffa).remove(".mig");
    let fff = '<td class = mic>';
    //console.log(ff);
    let tablen = $(ff).append('<table class = mig ></table>');
    //console.log(mas)
    let a =0;
    for (let i = 0; i < 3; i++) {
        let row = $('<tr>').addClass('rowClass'); // Создаём новую строку, как бриллиант!
        for (let j = 0; j < 3; j++) {
                
            row.append($(fff).text(mas[a])); // Наполняем ячейки, как волшебник.
                a++;     
        }
        tablen.append(row); // И вот, уровень пройден! Строка создана!
    }
    $('.mic').css('width', '15px');
    $('.mic').css('height', '15px');
    $('.mic').css('font-size', '13px');
    $('.mic').css('border-color', 'white');//white  black
    $('.mic').css('padding', '0');
    $('.mic').css('margin', '0');
}
        //
        
        //удаление таблицы
function cracsa (f,d,) { 
    let ff = '#'+'a'+String(f)+String(d);
    let ffa = '#'+'a'+String(f)+String(d)+' table';
    $(ffa).remove(".mig");
    $(".mag, .mic").remove();
}
        //
function ver9(chis){//создает - #a0y, #a1y, #a2y, #a3y, #a4y, #a5y, #a6y, #a7y, #a8y
    let set= '';
    let sety;
    for (i=0; i<9; i++){
        set= set+' #a'+String(i)+ String(chis)+',';
                
    }
    sety= set.replace(/,$/, '');
            //console.log(sety);
    return sety;
}

        //
function hor9(chis){// создает - #ax0, #ax1, #ax2, #ax3, #ax4, #ax5, #ax6, #ax7, #ax8
    let set= '';
    let sety;
    for (j=0; j<9; j++){
        set= set+' #a'+String(chis)+ String(j)+',';
                
    }   
sety= set.replace(/,$/, '');
            //console.log(sety);
return sety;
}
        //попытка вставить импут
        let ai;
        let aj;
        let table3 = document.querySelector('#table');
        table3.addEventListener('click', function func00(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            let id1 = String(event.target.id) ;
            //console.log(id1)
            if (id1[0]=='a'& mas2[id1[1]][id1[2]]===0){
                const td = document.getElementById(id1);// Получаем элемент td
                // Создаём элемент input
                const input = document.createElement('input');
                input.type = 'text'; // или другой тип ввода
                ai = id1[1];
                aj = id1[2];

                //console.log(ai);
                input.id = 'input'
                // Добавляем input в td
                td.appendChild(input);
                // Устанавливаем фокус на input-элемент
                input.focus();

                // Обработчик события на случай, если нужно удалить элемент при потере фокуса
                input.addEventListener('blur', () => {
                    //Запись в массив 
                    mas2[ai][aj]= Number(input.value);
                    input.parentNode.removeChild(input);
                    // Здесь можно добавить код для удаления элемента (например, через метод removeChild)
                    //console.log(mas2);
                    if (!(mas2[ai][aj] === 0)){
                    td.textContent = mas2[ai][aj];
                    }
                });

            }
        }); 
        // 
        /*document.addEventListener('click', function(event) {
            const element = document.elementFromPoint(event.clientX, event.clientY);
            console.log( element);
             
        }); */

    //    
        
    // 200140000001005307005098040050800000609000030073000005004000001000602000000000080
    // 200140000 001005307 005098040 050800000 609000030 073000005 004000001 000602000 000000080
    // 074680132086001794031740586612007308740820961890000207460000805100006403300000619
    // 074680132 086001794 031740586 612007308 740820961 890000207 460000805 100006403 300000619
    // 974685132 586231794 231749586 612597348 745823961 893164257 469312875 158976423 327458619
    