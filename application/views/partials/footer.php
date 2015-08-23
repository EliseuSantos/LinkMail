	</body>
	<div id="chat-content">
  	<div class="hide" id="chat-template">
		<div class="chat-box">
		    <input type="checkbox" />
		    <label>
		    	<span class="glyphicon glyphicon-remove pull-right close-chat"></span>
		    </label>
		    <div class="chat-box-content">
		    	<div id="conversa">
		    	</div>
		    	<div id="digitar">
		    		<div class="row">
		    			<div class="col-xs-8">
		    				<input type="text" class="form-control" id="mensagem">
		    			</div>
		    			<div class="col-xs-4">
		    				<button type="button" class="btn btn-primary btn-sm form-control" id="enviar-mensagem">Enviar</button>
		    			</div>
		    		</div>
		    	</div>
		    </div>
		</div>
	</div>
	<script src="<?=base_url('assets/js/jquery.js?t=' . time());?>"></script>
	<script src="<?=base_url('assets/js/bootstrap.js?t=' . time());?>"></script>
	<script src="<?=base_url('assets/js/script.js?t=' . time());?>"></script>
</html>
