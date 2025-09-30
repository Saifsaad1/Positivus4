<?php
require "../../../../../vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Host       = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->Username = 'saifsaad65a@gmail.com';
    $mail->Password = 'mdihwgepiybkdurn';

    $mail->setFrom($email, $name);
    $mail->addAddress("saifsaad65a@gmail.com", "Saif");
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = "<b>Name:</b> $name <br> <b>Email:</b> $email <br> <b>Message:</b> $message";
    $mail->AltBody = "Name: $name \nEmail: $email \nMessage: $message";

    $mail->send();
    echo "success";
} catch (Exception $e) {
    echo "error";
}
