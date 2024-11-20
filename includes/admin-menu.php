<?php

namespace TodoApp;

add_action('admin_menu', __NAMESPACE__ . '\\menu');

function menu() {
  add_menu_page(
    'Todo App',
    'Todo App',
    'manage_options',
    'todoapp',
    __NAMESPACE__ . '\\admin_page',
  );
}

function admin_page() {
  echo '<div id="todo-app"></div>';
}