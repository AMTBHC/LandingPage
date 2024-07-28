<?php
// controllers/MainController.php
class MainController {
    public function home() {
        include 'views/templates/header.php';
        include 'views/home.php';
        include 'views/templates/footer.php';
    }

    public function services() {
        include 'views/templates/header.php';
        include 'views/services.php';
        include 'views/templates/footer.php';
    }

    public function about() {
        include 'views/templates/header.php';
        include 'views/about.php';
        include 'views/templates/footer.php';
    }

    public function contact() {
        include 'views/templates/header.php';
        include 'views/contact.php';
        include 'views/templates/footer.php';
    }
}
?>