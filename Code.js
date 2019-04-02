///////////////////שאלה 1



         <html>
	        <head>
	                <title>I Love HTML</title>
	                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	        </head>
	        <body>
	                <hr>
	                    <p>a = <input type="number" id="ainput"/></p>
	                    <p>b = <input type="number" id="binput"/></p>
                        <button onclick="add()">Add</button> <br>
                        <button onclick="ded()">Deduct</button> <br>
                        <button onclick="mul()">Multiply</button> <br>
                        <button onclick="div()">Divide</button> <br>



	                </body>
	        <script>
	            function add()
	            {
	                var a = $('#ainput').val() 
	                var b = $('#binput').val()
	                alert ( parseInt(a) + parseInt(b) )
	            }

                function ded()
	            {
	                var a = $('#ainput').val() 
	                var b = $('#binput').val()
	                alert ( parseInt(a) - parseInt(b) )
	            }


                function mul()
	            {
	                var a = $('#ainput').val() 
	                var b = $('#binput').val()
	                alert ( parseInt(a) * parseInt(b) )
	            }



                function div()
	            {
	                var a = $('#ainput').val() 
	                var b = $('#binput').val()
	                alert ( parseInt(a) / parseInt(b) )
	            }



	        </script>
	</html>
	
	
	
	
	
	
	///////////////////שאלת אתגר - רשות

	
	
	
	<html>
	    <head>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	    </head>
	    <body>
	        <p>ID: <input type="number" id="idnumber"/></p>
	        <p>NAME: <input type="text" id="idtxt"/></p>
	        <button onclick="add()">Click Me!</button>
	        <hr>
	        <table border="1">
	            <tr style="background: cornflowerblue">
	                <th>ID</th>
	                <th>NAME</th>
	            </tr>
	            <tbody id="body1">
	
	                <tr>
	                    <td>1</td>  
	                    <td>Itay</td>
	                </tr>
	                <tr>
	                    <td>2</td>  
	                    <td>Danna</td>
	                </tr>                
	

	            </tbody>
	        </table>
	

	<script>
	function Person(_id, _name) {
	    this.id = _id
	    this.name = _name
	}

	
	function add() {
		var id = $("#idnumber").val()
	var name = $("#idtxt").val()

	    var p = new Person(id, name)
	    console.log(p)
	    addRow(p)
	}
	function addRow(p) {
	    $("#body1").append(`<tr><td>${p.id}</td><td>${p.name}</td></tr>`)
	}
	</script
	    </body>
	</html>


