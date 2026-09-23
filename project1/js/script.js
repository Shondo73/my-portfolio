// вертикаль
function vert(arr, j) {
  const ver = [];
  for (let i = 0; i < 9; i++) {
    if (arr[i][j] !== 0) ver.push(arr[i][j]);
  }
  return ver;
}

// горизонт
function hori(arr, i) {
  const hor = [];
  for (let j = 0; j < 9; j++) {
    if (arr[i][j] !== 0) hor.push(arr[i][j]);
  }
  return hor;
}

// квадрат 3x3
function squar(arr, i, j) {
  const a = Math.floor(i / 3) * 3;
  const b = Math.floor(j / 3) * 3;
  const squa = [];
  for (let x = a; x < a + 3; x++) {
    for (let y = b; y < b + 3; y++) {
      if (arr[x][y] !== 0) squa.push(arr[x][y]);
    }
  }
  return squa;
}

// возможные числа для клетки
function possibilit(ver, hor, squa) {
  const possibility = [];
  for (let n = 1; n <= 9; n++) {
    if (!ver.includes(n) && !hor.includes(n) && !squa.includes(n)) {
      possibility.push(String(n));
    }
  }
  //console.log(possibility);
  return possibility;
}

// количество вхождений target в одномерный массив
function countNumber(arr, target) {
  let count = 0;
  for (const v of arr) if (v == target) count++;
  return count;
}

// количество вхождений target в двумерный массив
function countNumber1(arr, target) {
  let count = 0;
  for (const row of arr) {
    for (const v of row) {
      if (v == target) count++;
    }
  }
  return count;
}
//
function renderTable(tableEl, mas) {
  tableEl.innerHTML = ''; // очистка
  for (let i = 0; i < 9; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 9; j++) {
      const td = document.createElement('td');
      td.id = 'a' + i + j;
      if (mas[i][j] !== 0) {
        td.textContent = mas[i][j];
      } else {
        td.textContent = '';
      }
      tr.appendChild(td);
    }
    tableEl.appendChild(tr);
  }
}
//
// $(ver3).css('border-left-width', '2px');
//
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
let mas2 = [[0, 7, 4, 6, 8, 0, 1, 3, 2],
            [0, 8, 6, 0, 0, 1, 7, 9, 4],
            [0, 3, 1, 7, 4, 0, 5, 8, 6],
            [6, 1, 2, 0, 0, 7, 3, 0, 8],
            [7, 4, 0, 8, 2, 0, 9, 6, 1],
            [8, 9, 0, 0, 0, 0, 2, 0, 7],
            [4, 6, 0, 0, 0, 0, 8, 0, 5],
            [1, 0, 0, 0, 0, 6, 4, 0, 3],
            [3, 0, 0, 0, 0, 0, 6, 1, 9]];// массив для судоку
const elem = document.querySelector('#imp1');
const table = document.querySelector('#table');

elem.addEventListener('blur', () => {
  const raw = elem.value.trim();

  if (raw.length !== 81) {
    console.warn('Ошибка: нужно ровно 81 цифра. Получено:', raw.length);
    return;
  }

  if (!/^[0-9]+$/.test(raw)) {
    console.warn('Ошибка: строка должна содержать только цифры 0–9.');
    return;
  }

  let idx = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      mas2[i][j] = Number(raw.charAt(idx));
      idx++;
    }
  }

  renderTable(table, mas2);
  updateProbabilities();
});

//  У тебя в коде было mas.split('') и цикл с a=a+1 — это работает, но лучше сразу проверять формат и заполнять.
// 
function updateProbabilities() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (mas2[i][j] === 0) {
        const ver = vert(mas2, j);
        const hor = hori(mas2, i);
        const sq = squar(mas2, i, j);
        array_of_probabilities[i][j] = possibilit(ver, hor, sq);
      } else {
        array_of_probabilities[i][j] = [String(mas2[i][j])];
      }
    }
  }
console.log(array_of_probabilities);
}

function findSingles() {
  let found = false;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = array_of_probabilities[i][j];
      if (Array.isArray(cell) && cell.length === 1) {
        mas2[i][j] = Number(cell[0]);
        found = true;
        // сразу обновляем ячейку в таблице
        const td = document.getElementById('a' + i + j);
        if (td) td.textContent = mas2[i][j];
      }
    }
  }
  if (found) {
    updateProbabilities();
    findSingles(); // рекурсия, пока находим одиночные варианты
  }
}
// 
function findSingles1() {
  let changed = true;

  while (changed) {
    changed = false;
    const rows = array_of_probabilities.length;
    if (rows === 0) return;

    const cols = array_of_probabilities[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = array_of_probabilities[i][j];

        // Проверяем, что это массив и в нём ровно один элемент
        if (Array.isArray(cell) && cell.length === 1) {
          const value = Number(cell[0]);

          // Если значение уже записано, пропускаем
          if (mas2[i][j] === value) continue;

          mas2[i][j] = value;
          changed = true; // состояние изменилось — нужно пересчитать вероятности

          // Обновляем ячейку в таблице (можно вынести в отдельный пакетный апдейт)
          const td = document.getElementById('a' + i + j);
          if (td) td.textContent = value;
        }
      }
    }

    // Пересчитываем вероятности только если что-то изменилось
    if (changed) {
      updateProbabilities();
    }
  }
}

// Проверка на ошибки (исправленная версия)
    // Упростим errork, чтобы она реально проверяла строки, столбцы и квадраты без дубликатов:
function checkValid(mas) {
  // строки
  for (let i = 0; i < 9; i++) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const v = mas[i][j];
      if (v !== 0 && seen.has(v)) return false;
      seen.add(v);
    }
  }
  // столбцы
  for (let j = 0; j < 9; j++) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
      const v = mas[i][j];
      if (v !== 0 && seen.has(v)) return false;
      seen.add(v);
    }
  }
  // квадраты
  for (let bi = 0; bi < 3; bi++) {
    for (let bj = 0; bj < 3; bj++) {
      const seen = new Set();
      for (let i = bi * 3; i < bi * 3 + 3; i++) {
        for (let j = bj * 3; j < bj * 3 + 3; j++) {
          const v = mas[i][j];
          if (v !== 0 && seen.has(v)) return false;
          seen.add(v);
        }
      }
    }
  }
  return true;
}
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  console.log('+++++')
  updateProbabilities()
});
//исправленый 
function cracsa(f, d) {
  // Защита от некорректных входных данных
  if (typeof f !== 'number' || typeof d !== 'number') return;

  const cellId = '#a' + f + d;
  const tableSelector = cellId + ' table';

  const $cell = $(cellId);
  const $table = $(tableSelector);

  // Удаляем .mig только внутри этой таблицы
  $table.find('.mig').remove();

  // Если .mag и .mic должны быть только в этой области — удаляем локально
  $cell.find('.mag, .mic').remove();
  // Или, если они могут быть и вне ячейки, но всё равно нужно удалить только в контексте таблицы:
  // $table.find('.mag, .mic').remove();
}

  /*
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
  */          

