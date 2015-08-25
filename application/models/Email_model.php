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

}
?>
