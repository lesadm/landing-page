
    function sendEmail() {
        if(validate()){

         openModal();

            var tempParams = {
                first_name: document.getElementById("firstName").value,
                last_name: document.getElementById("lastName").value,
                email: document.getElementById("userEmail").value,
                phone_number: document.getElementById("phoneNumber").value,
                message: document.getElementById("userMessage").value
            }

            emailjs.send('service_div8855', 'template_murr0xq', tempParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                closeModal();
                alert("Email успішно відправлено")
             }, function(error) {
                closeModal();
                alert("Email не відправлено, переконайтесь що email ввеедено правильно")
             });
        }
    }

    function validate(){
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var userEmail = document.getElementById("userEmail").value;
      var userMessage = document.getElementById("userMessage").value;
      var error_message = document.getElementById("error_message");

      error_message.style.padding = "10px";

      var text;
      if(firstName.length < 3){
        text = "Ім'я повинне містити більше 3 символів";
        error_message.style.display = 'block';
        error_message.innerHTML = text;
        return false;
      }
      if(lastName.length < 3){
        text = "Прізвище повинне містити більше 3 символів";
        error_message.style.display = 'block';
        error_message.innerHTML = text;
        return false;
      }
      if(isNaN(phoneNumber) || phoneNumber.length < 9){
        text = "Номер телефону повинен містити більше 9 символів";
        error_message.style.display = 'block';
        error_message.innerHTML = text;
        return false;
      }
      if(userEmail.indexOf("@") == -1 || userEmail.length < 3){
        text = "Ваш email повинен містити більше 3 символів та повинен містити символ '@'";
        error_message.style.display = 'block';
        error_message.innerHTML = text;
        return false;
      }
      if(userMessage.length <= 5){
        text = "Ваше повідомлення повинне містити більше 5 символів";
        error_message.style.display = 'block';
        error_message.innerHTML = text;
        return false;
      }

      error_message.style.display = 'none';

      return true;
    }

function openModal() {
    document.getElementById('fade').style.display = 'block';
}

function closeModal() {
    document.getElementById('fade').style.display = 'none';
}