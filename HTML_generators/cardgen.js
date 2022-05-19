employee_array = [];

function generateCards(){

testarray = [{"role":"Manager", "name":"First name","id":"1","email":"testmail","spec":"Github"},{"role":"Engineer", "name":"Second name","id":"2","email":"testmail2","spec":"School"}]

for (let i = 0; i < testarray.length; i++) {
    
    const card_template = 
    `
    <div class="card">
        <img src="./images/avatar_1.jpg" alt="Avatar">
            <div class="container" id="cardtext">
                <h1>Name: ${testarray[i].name}</h1>
                <h1>Role: ${testarray[i].role}</h1>
                <h1>ID: ${testarray[i].id}</h1>
                <h1>Email: ${testarray[i].email}</h1>
                <h1>Of. number, GitHub or school:${testarray[i].spec}</h1>
            </div>
    </div>
    `
    employee_array.push(card_template);
    console.log(card_template);
}};

