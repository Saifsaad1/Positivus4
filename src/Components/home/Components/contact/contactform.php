<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailForm = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "saifsaad65a@gmail.com";
    $headers = "from: ".$mailForm;
    $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;



    mail($mailTo, $subject, $txt, $headers);
    header("location: index.php?mailsent");


}



?>