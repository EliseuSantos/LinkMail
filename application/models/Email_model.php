<?php
class Email_model extends MY_Model {

  public function enviaEmail($data) {
    $this->db->insert('email', $data);
    if($this->db->affected_rows()) {
      return TRUE;
    }
  }

  public function getEmailMensagensUsuario() {
    $query = $this->db->get('email');
    return $query->result();
  }

  public function getUsuario($data) {
    $this->db->where('nome like', "%$data%");
    $query = $this->db->get('contatos');
    echo json_encode($query->result());
  }

}
?>
