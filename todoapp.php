<?php
/**
 * Plugin Name: WordPress Todo App
 */

define('TODOAPP_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));
define('TODOAPP_PLUGIN_DIR_URL', plugin_dir_url(__FILE__));

require_once TODOAPP_PLUGIN_DIR_PATH . 'includes/admin-scripts.php';
require_once TODOAPP_PLUGIN_DIR_PATH . 'includes/admin-menu.php';