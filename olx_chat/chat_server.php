<?php
$servername = "localhost";
$username = "root";
$password = "karara1234";
$dbname = "olx_chat";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $sender = "User"; // You might get this dynamically based on authentication.
    $receiver = $_POST["receiver"];

    $sql = "INSERT INTO messages (sender, receiver, message) VALUES ('$sender', '$receiver', '$message')";
    $conn->query($sql);
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $receiver = $_GET["receiver"];

    $sql = "SELECT * FROM messages WHERE (sender = 'User' AND receiver = '$receiver') OR (sender = '$receiver' AND receiver = 'User') ORDER BY created_at DESC LIMIT 10";
    $result = $conn->query($sql);

    $messages = array();
    while ($row = $result->fetch_assoc()) {
        $messages[] = array(
            'sender' => $row['sender'],
            'message' => $row['message'],
            'created_at' => $row['created_at']
        );
    }

    header('Content-Type: application/json');
    echo json_encode($messages);
}

$conn->close();
?>
