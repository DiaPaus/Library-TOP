const myLibrary = [];
const container=document.querySelector('.container');
const addBtn=document.querySelector('.add');
const form=document.querySelector('#form');
const submitBtn=document.querySelector(`#form button`);
let removeBtns;

function Book(author,title,pages,read) {
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary(author,title,pages,read) {
  myLibrary.push(new Book(author,title,pages,read));
  console.log(myLibrary);
}


// addBookToLibrary("Mary Sebag-Montefiore","The story of Heidi ",64,"NO");
// addBookToLibrary("Keene Carolyn","By the Light of the Study Lamp",215,"NO");
// addBookToLibrary("A.J. Macgregor"," Lost at the fair",51,"NO");
// addBookToLibrary("Noel Barr ","Ned the lonely donkey",51,"NO");
// addBookToLibrary("Minna Taylor","Auntie Lizzie's lion",28,"NO");
// addBookToLibrary("Jason George","U.S. History : complete Curriculum and Teachers guide",350,"NO");

function showBooks(){
  container.innerHTML='';
  myLibrary.forEach((book,i)=>{
    let content=`<div class="book-item">
          <i class="fa-solid fa-xmark remove"></i>
          <h2>Author:</h2>
          <span id="author">${book.author}</span>
          <h2>Title:</h2>
          <span id="title">${book.title}</span>
          <p>Pages: <span id="pages">${book.pages}</span></p>    
          <p class="read-btn">Read: <span id="read">${book.read}</span></p>         
      </div> `;
      container.insertAdjacentHTML("beforeend",content)
  })
  removeBtns=document.querySelectorAll('.remove');
  removeBtns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
      myLibrary.splice(i,1);
      showBooks();    
       })
  })

  readBtns=document.querySelectorAll('.read-btn');
  readBtns.forEach((readBtn,i)=>{
    readBtn.addEventListener('click',()=>{
      myLibrary[i].read=myLibrary[i].read==='NO'?'YES':'NO';
      showBooks()
    })
  })
}

addBtn.addEventListener('click',()=>form.classList.remove('hidden'));

form.addEventListener('submit',(e)=>{
e.preventDefault();
addBookToLibrary(form.author.value,form.title.value,form.pages.value,form.read.value);
showBooks();
form.classList.add('hidden');
form.reset();
});

