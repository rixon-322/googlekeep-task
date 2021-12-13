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
    notesObj.forEach(function(element) {
        html +=`
        <div id="note">
            <h3>${element.title}</h3>
            <p>${element.text}</p>
        </div>`;
    });

    let notesData=document.getElementById("notes");
    if(notesObj.length !=0){
        notesData.innerHTML=html;
    }
}

showNotes();