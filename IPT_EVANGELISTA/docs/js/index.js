function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  emailjs.send("service_dety0j9", "template_mz0tuag", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      () => alert("Message sent successfully!"),
      (error) => alert("Failed to send message. Please try again.")
    );
}
