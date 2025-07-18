(function () {
  emailjs.init("kD_fKezKPi6RmQL4v"); 
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();


  emailjs.sendForm("service_g0qiv1b", "template_c6l4fkk", this)
    .then(function () {
      alert("Message sent successfully!");
    }, function (error) {
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
    this.reset();
});