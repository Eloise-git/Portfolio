<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Vérification des champs (ajoutez plus de validation si nécessaire)
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs du formulaire.";
        exit;
    }

    // Destinataire de l'e-mail
    $recipient = "eloiseprouteauqueffelec@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau message de $name via le formulaire de contact";

    // Contenu de l'e-mail
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Entêtes de l'e-mail
    $email_headers = "From: $name <$email>";

    // Envoi de l'e-mail
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Votre message a bien été envoyé.";
    } else {
        http_response_code(500);
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    http_response_code(403);
    echo "Une erreur s'est produite lors de l'envoi du message.";
}
?>
