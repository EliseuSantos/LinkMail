<?php

class Home extends MY_Controller {

  public function index() {
    $this->load->view('partials/header');
    $this->load->view('home');
    $this->load->view('partials/footer');
  }
}
