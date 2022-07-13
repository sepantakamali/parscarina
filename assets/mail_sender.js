// // Listen for a submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);

// function submitForm(e) {
//   e.preventDefault();

//   //   Get input Values
//   let name = document.querySelector(".name").value;
//   let subject = document.querySelector(".subject").value;
//   let email = document.querySelector(".email").value;
//   let message = document.querySelector(".message").value;
//   console.log(name, email, message);

//   saveContactInfo(name, subject, email, message);
//   send_email(name, subject, email, message);

//   document.querySelector(".contact-form").reset();
// }
let form = document.querySelector('.contact-form');

function send_mail(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let subject = document.querySelector(".subject").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  // send mail.
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "info@parscarina.com",
    Password : "]lP+hwjSN?NeV~M",
    To : 'info@parscarina.com',
    From : email,
    Subject : subject,
    Body : msg
  }).then(
    message => alert(message)
  );
}

// add event listener submit.
form.addEventListener('submit', send_mail);

// send email.
// function send_email(name, subject, email, message) {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "sepantakamali@gmail.com",
//         Password : "?G#%4gW4^p&C@^v&",
//         To : 'sepantakamali@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : `Name: ${name} <br/>Email: ${email} <br/>message: ${message}`
//     }).then(document.getElementById("status").innerHTML = `success`);
// }
