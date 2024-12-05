<?php

namespace TodoApp;

add_action('admin_enqueue_scripts', __NAMESPACE__ . '\\styles');

function styles() {
  $screen = get_current_screen();

  if ($screen->id !== 'toplevel_page_todoapp') {
    return;
  }

  wp_enqueue_style(
    'todoapp-admin-css',
    TODOAPP_PLUGIN_DIR_URL . '/build/index.css',
    array('wp-edit-blocks')
  );
}
