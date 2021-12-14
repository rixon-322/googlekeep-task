let addSubmit=document.getElementById("submit")
let addTitle=document.getElementById("title")
let addDesc=document.getElementById("desc")

addSubmit.addEventListener("click",(e)=>{
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj==[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title: addTitle.value,
        text: addDesc.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    assTitle.value="";
    addDesc.value="";

    showNotes();
})

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element, index) {
        html +=`
        <div id="note">
            <h3>${element.title}</h3>
            <p>${element.text}</p>
            <div class="buttons">
                <button id="${index}" onclick="edtNote(this.id)" class="edit"><span class="glyphicon glyphicon-edit"></span></button>
                <button id="${index}" onclick="delNote(this.id)" class="delete"><span class="glyphicon glyphicon-trash"></span></button>
            </div>
        </div>`;
    });

    let notesData=document.getElementById("notes");
    if(notesObj.length !=0){
        notesData.innerHTML=html;
    }
}

function delNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

function edtNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.findIndex((element, index)=>{
        addTitle.value=element.title;
        addDesc.value=element.text;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
}

showNotes();