///////////////////////////שאלה ב -1


<html>
        <head>
                <title>HTML - שאלה ב'</title>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        <body>
                <hr>
                <form onsubmit="printDetails()" id="myForm">
                    <p> Name: <input type="text" id="name" required/></p>
                    <p>Age: <input type="number" id="age" required/></p>
                    <p>BirthDate:  <input type="date" id="bdinput" required/></p>
                    
                   
                    <button type="submit">Print</button> <br>
                </form>

               

                </body>

        <script>
           
            function printDetails()
            {
                var person = {
                    Name : $('#name').val(),
                    Age : $('#age').val(),
                    BirthDate : $('#bdinput').val(),
                
                }
                
                alertPerson( person )
            }

            function alertPerson(person)
            {
                alert (`Name : ${person.Name}\nAge : ${person.Age}\nBirthDate : ${person.BirthDate}

                `);
            }
                                                      
        </script>
</html>





///////////////////////////שאלה ב -2




<html>
    <head>
         <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    </head>
    <body>
        <p>ID : <input type="number" id="idnumber"/></p>
        <p>NAME : <input type="text" id="idtxt"/></p>
        <p>Ph. : <input type="number" id="phnumber"/></p>
        <button onclick="add()">Click Me!</button>
        <hr>
        <table border="1">
            <tr style="background: cornflowerblue">
                <th>ID</th>
                <th>NAME</th>
                <th>Ph.</th>
            </tr>
            <tbody id="body1">

                <tr>
                    <td>1</td>  
                    <td>Danny</td>
                    <td>059-2737491</td>
                </tr>
                <tr>
                    <td>2</td>  
                    <td>Viky</td>
                    <td>059-2354483</td>
                </tr>                

                <tr>
                    <td>3</td>  
                    <td>Ron</td>
                    <td>059-3493828</td>
                </tr>        

            </tbody>
        </table>

<script>
function Person(_id, _name , _ph) {
    this.id = _id
    this.name = _name
    this.ph = _ph
}
function add() {
    var id = $("#idnumber").val()
    var name = $("#idtxt").val()
    var ph = $("#phnumber").val()

    var p = new Person(id, name , ph)
    console.log(p)
    addRow(p)
}
function addRow(p) {
    $("#body1").append(`<tr><td>${p.id}</td><td>${p.name}</td><td>${p.ph}</td></tr>`)
}
</script
    </body>
</html>    
