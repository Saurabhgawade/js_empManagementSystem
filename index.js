const addEmployeeBtn=document.getElementById("addEmployeeBtn");
const modal=document.getElementById("modal");
const form=document.getElementById("form");
const tbody=document.querySelector("#employee-list>tbody");

const employees={};
const closeIcon=document.getElementById("closeIcon");
let inc=1;
function getNewId(){
    return inc++;

}
const modal1=document.getElementById("modal1");
function toggleupdate(){
    modal1.classList.toggle("hide-modal");
    modal1.classList.toggle("show-modal");

}


function deleteRecord(e){
    const deleteButton=e.target;
    const td=deleteButton.parentNode;
    const tr=td.parentNode;
    tr.remove();
}
function createNewEmployee(employee){
    const record=document.createElement("tr");

    for(let key in employee){
        const cell=document.createElement("td");
        cell.innerText=employee[key];
        record.appendChild(cell);

    }
    const options=document.createElement("td");

    const editButton=document.createElement("button");
    editButton.innerText="edit";
    editButton.className="material-icons";
    editButton.addEventListener("click",editRecord);

    const deleteButton=document.createElement("button");
    deleteButton.innerText="edit";
    deleteButton.className="material-icons";
    deleteButton.addEventListener("click",deleteRecord);

    options.append(editButton,deleteButton);
    record.appendChild(options);

    tbody.appendChild(record);

}

function togglemodal(){
    modal.classList.toggle("hide-modal");
    modal.classList.toggle("show-modal");
}
addEmployeeBtn.addEventListener("click",togglemodal);
closeIcon.addEventListener("click",togglemodal);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const employee={
       name:form.fullname.value,
        email:form.email.value,
        role:form.role.value,
        id:getNewId(),
        dob:form.dob.value,
        gender:form.gender.value,
        
    }
    employees[employee.id]=employee;
    createNewEmployee(employee);
    form.reset();
    togglemodal();
})


const form1=document.getElementById("form1");
function filldata(employee){
    for(let property in employee){
        form1[property]&&(form1[property].value=employee[property])
    }

}
function editRecord(e){
    const empId=e.target.parentNode.parentNode.id;
    edittingempid=empId;

    toggleupdate();
    filldata(employees[empId]);
}
form1.addEventListener("submit",(e)=>{
    e.preventDefault();

const updateform={
    name:form1.fullname.value,
    email:form1.email.value,
    role:form1.role.value,
    id:edittingempid,
    dob:form1.dob.value,
    gender:form1.gender.value

};
employees[edittingempid]=form1;
form1.reset();
toggleupdate();

const record=document.getElementById("edittingempid");

let cellind=0;
for(property in form1){
    record.children[cellind++].innerText=form1[property];
}
})
