<?php
// index.php
require 'controllers/MainController.php';

$controller = new MainController();
$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$controller->$page();
?>