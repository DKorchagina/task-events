import { link } from "fs";

/*
  /* 1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
   const doc = document.createElement(`BUTTON`);
   doc.innerHTML = "Удали меня";
   document.body.appendChild(doc);
   doc.addEventListener('click', () => doc.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
   const ul = document.createElement('ul');
   arr.forEach(element => {
      const il = document.createElement('li');
      il.innerHTML = element;
      il.addEventListener('mouseover', ()=>{
         il.setAttribute('title', "" + element);
      })
      ul.appendChild(il);
      
   });
   document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
   const link = "https://tensor.ru/";
   const a = document.createElement('a');
   a.setAttribute('href', link);
   a.innerHTML = 'tensor';
   a.addEventListener('click', (event)=>{
      a.innerHTML += " ";
      a.innerHTML += link;
      event.preventDefault();
   }, {once: true});
   document.body.appendChild(a);

}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
   const ul = document.createElement('ul');
   const li = document.createElement('li');
   li.innerHTML = "Пункт";
   li.addEventListener('click', ()=>{
      li.innerHTML+='!';
   })
   ul.appendChild(li);
   const but = document.createElement('button');
   but.innerHTML = "Добавить пункт";
   but.addEventListener('click', ()=>{
      const li1 = document.createElement('li');
      li1.innerHTML = "Пункт";
      li1.addEventListener('click', ()=>{
         li1.innerHTML+='!';
      })
      ul.appendChild(li1);
   })
   document.body.appendChild(but);
   document.body.insertBefore(ul, but);
}
