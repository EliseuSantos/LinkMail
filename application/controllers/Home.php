<?php

class Home extends MY_Controller {
    public function __construct(){
    	parent::__construct();
      $this->load->model('email_model');
      $this->load->helper('date');
    }

  public function index() {
    $this->load->view('partials/header');
    $data['emails'] = $this->email_model->getEmailMensagensUsuario();
    $this->load->view('home', $data);
    $this->load->view('partials/footer');
  }

  public function setEmail() {
    $data = array(
      'destino' => $_POST['destino'],
      'assunto' => $_POST['assunto'],
      'mensagem' => $_POST['mensagem'],
      'usuario' => $_POST['usuario'],
      'anexo' => $_POST['anexo']
    );
    $set = $this->email_model->enviaEmail($data);
  }

  public function getContato() {
    $q = $_POST['busca'];
    $q = str_replace("@","",$q);
    $q = str_replace(" ","%",$q);
    $get = $this->email_model->getUsuario($q);
  }
}
