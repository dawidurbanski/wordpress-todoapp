<?php

namespace TodoApp;

add_action('admin_enqueue_scripts', __NAMESPACE__ . '\\scripts');

function scripts() {
  $screen = get_current_screen();

  if ($screen->id !== 'toplevel_page_todoapp') {
    return;
  }

  $admin_deps = require_once TODOAPP_PLUGIN_DIR_PATH . '/build/index.asset.php';

  wp_enqueue_script(
    'todoapp',
    TODOAPP_PLUGIN_DIR_URL . 'build/index.js',
    $admin_deps['dependencies'],
    $admin_deps['version'],
    true
  );
}