document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const queryType = document.getElementById("queryType").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${firstName}! Your message has been submitted.`);

    document.getElementById("contactForm").reset();
  });
