$('#btnSave').on('click', () => {
    event.preventDefault();//button eka press klma ena default behaviour eka nawaththanawa

    var name = $('#txtName').val();
    var city = $('#txtCity').val();
    var email = $('#txtEmail').val();
    var level = $('#txtLevel').val();  // Capture the value from txtLevel

    let student = {
        name: name,
        city: city,
        email: email,
        level: level  // Include level in the student object
    }

    console.log(student);

    let jsonStudent = JSON.stringify(student);
    console.log(jsonStudent);

    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        // Check state
        if(http.readyState == 4){
            if (http.status == 200) {
                alert('Student added successfully');
                var jsonTypeResponse = JSON.stringify(http.responseText);
                console.log(jsonTypeResponse);
            } else {
                alert('Failed to add student');
                console.error("Status code: " + http.status)
                console.error("Ready state: " + http.readyState)
            }
            console.log(http.responseText);
        } else {
            console.error('Process stage: ' + http.readyState);
        }
    }

    http.open("POST", 'http://localhost:8081/student', true);

    http.setRequestHeader('Content-type', 'application/json');
    http.send(jsonStudent);

});
