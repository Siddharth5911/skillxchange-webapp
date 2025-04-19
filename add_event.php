// add_event.php
<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $date = $_POST['date'];
    $location = $_POST['location'];
    $created_by = $_POST['created_by'];

    $stmt = $conn->prepare("INSERT INTO events (name, description, date, location, created_by) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", $name, $description, $date, $location, $created_by);
    $stmt->execute();
    echo "Event added successfully.";
}
?>
