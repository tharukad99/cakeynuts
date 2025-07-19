// (function () {
//   emailjs.init("kD_fKezKPi6RmQL4v"); 
// })();

// document.getElementById("contact-form").addEventListener("submit", function (event) {
//   event.preventDefault();


//   emailjs.sendForm("service_g0qiv1b", "template_c6l4fkk", this)
//     .then(function () {
//       alert("Message sent successfully!");
//     }, function (error) {
//       alert("Failed to send message. Error: " + JSON.stringify(error));
//     });
//     this.reset();
// });


// (function () {
//   emailjs.init("kD_fKezKPi6RmQL4v"); 
// })();

// document.getElementById("order-form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   emailjs.sendForm("service_g0qiv1b", "template_b8benjx", this)
//     .then(function () {
//       alert("Message sent successfully!");
//     }, function (error) {
//       alert("Failed to send message. Error: " + JSON.stringify(error));
//     });
//     this.reset();
// });


(function () {
  emailjs.init("kD_fKezKPi6RmQL4v"); // ✅ Use your actual public key once
})();

// ✅ Handle Contact Form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_g0qiv1b", "template_c6l4fkk", this)
      .then(function () {
        alert("Message sent successfully!");
        contactForm.reset();
      }, function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      });
  });
}

// ✅ Handle Order Form
const orderForm = document.getElementById("order-form");
if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_g0qiv1b", "template_b8benjx", this)
      .then(function () {
        alert("Order sent successfully!");
        orderForm.reset();
      }, function (error) {
        alert("Failed to send order. Error: " + JSON.stringify(error));
      });
  });
}
