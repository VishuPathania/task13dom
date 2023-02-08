function savetoLocalStorage(event){
    event.preventDefault();
    const name= event.target.username.value;
    const phone= event.target.contact.value;
    const email= event.target.email.value;
    
    const obj= {
        name:name ,
        phone:phone ,
        email:email
    }

    //store in local storage with key as email
    localStorage.setItem(obj.email, JSON.stringify(obj))

    showuseronScreen(obj) 
}

function showuseronScreen(obj) {
    const parentElem = document.getElementById('listofitems') //create li tag also for new details
    const childElem = document.createElement('li')
    childElem.textContent= obj.name+ ' - ' + obj.phone + ' - ' + obj.email 
    parentElem.appendChild(childElem)
   
    //Adding delete button and functionality
    const delBtn= document.createElement('input')
    delBtn.type = "button"
    delBtn.style.color= "red"
    delBtn.style.backgroundColor= "cherry"
    delBtn.value = 'Delete'
    delBtn.onclick = () => {
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
     
    //attaching delbtn with li element  when click on del remove li also
     childElem.appendChild(delBtn)
     //attached child element to parent element
     childElem.appendChild(childElem)
    
}