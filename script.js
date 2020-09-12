const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const notCompleted = document.querySelector('.notCompleted');
const completed = document.querySelector('.completed');


btn.addEventListener('click',addList)
/*input.addEventListener('keyup',(el)=>{
    (el.keyCode == 13 ? addList(el) : null)
})*/


function addList(){
    const k  = keita
    const newLi = document.createElement('li');
    const newCheck = document.createElement('button');
    const newDelete = document.createElement('button');

    newCheck.innerHTML = '<i class="fa fa-check"></i>'
    newDelete.innerHTML = '<i class="fa fa-trash"></i>'

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';

        notCompleted.appendChild(newLi)
        newLi.appendChild(newCheck)
        newLi.appendChild(newDelete)
    }
    newCheck.addEventListener('click',function(){
        const parent = this.parentNode
        parent.remove()
        completed.appendChild(parent)
        newCheck.style.display = 'none'
    })

    newDelete.addEventListener('click',function(){
        newLi.remove()

    })
}
