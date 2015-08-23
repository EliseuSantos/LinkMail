<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| DEFAULT INCLUDES
| -------------------------------------------------------------------------
| This file lists the css and javascript files that should be included by
| default in your views' header. Scripts in here will be loaded at your
| pages'header, not at the end of the body. Only put scripts in here if
| they are safe and essential.
|
*/
$config['cssIncludes'] = array(
    '../bootstrap-3.3.2-dist/css/bootstrap.min',
    'bootstrap-row-eq-height',
    '../font-awesome/font-awesome',
    'fullcalendar',
    'timeline',
    '../gridster/dist/jquery.gridster',
    'chosen.min',
    '../multi-select/css/multi-select',
    'sweet-alert',
    'square/aero',
    'toggle-switch',
    'bootstrap-datetimepicker',
    'datepicker',
    'pre-load',
    'style',
);
$config['cssIncludesPrint'] = array(
    'fullcalendar.print',
    'style.print',
);
$config['jsIncludes'] = array(
    'jquery-1.11.2.min',
    'jquery-ui',
    '../bootstrap-3.3.2-dist/js/bootstrap.min',
    'moment.min',
    'fullcalendar',
    'jquery-ui.custom.min',
    'dropzone',
    'jquery.mask',
    'icheck',
    'jquery.hideseek.min',
    'lang-all',
    'chosen.jquery.min',
    '../multi-select/js/jquery.multi-select',
    'bootstrap-datetimepicker',
    'datepicker',
    '../zero-clipboard-2.2.0/dist/ZeroClipboard',
    'sweet-alert',
    'humanize-duration',
    'alert',
    'pesquisa',
    'websystem',
);
?>
