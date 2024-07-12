const myLibrary = [];
const container=document.querySelector('.container');
const addBtn=document.querySelector('.add');
const form=document.querySelector('#form');
const authorInput=document.querySelector('#author-form');

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
          <i class="fa-solid fa-xmark remove" data-attribute='${i}'></i>
          <h2>Author:</h2>
          <span id="author">${book.author}</span>
          <h2>Title:</h2>
          <span id="title">${book.title}</span>
          <p>Pages: <span id="pages">${book.pages}</span></p>    
          <p class="read-btn" data-attribute='${i}'>Read(change): <span id="read">${book.read}</span></p>         
      </div> `;
      container.insertAdjacentHTML("beforeend",content)
  })
}


addBtn.addEventListener('click',()=>{form.classList.remove('hidden');
  authorInput.focus()
});

form.addEventListener('submit',(e)=>{
e.preventDefault();
addBookToLibrary(form.author.value,form.title.value,form.pages.value,form.read.value);
showBooks();
form.classList.add('hidden');
form.reset();
});

container.addEventListener('click',(e)=>{
  const bookNumber=e.target.dataset.attribute;
  if([...e.target.classList].includes('remove')){
    myLibrary.splice(bookNumber,1);
    showBooks();
  }
  else if([...e.target.classList].includes('read-btn')){
    myLibrary[bookNumber].read=myLibrary[bookNumber].read==='YES'?'NO':'YES'
    showBooks();
      }
  })
