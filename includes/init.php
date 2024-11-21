<?php

add_action('init', function () {
  register_post_type('todoitem', [
    'supports' => ['title', 'custom-fields'],
    'show_in_rest' => true,
  ]);

  register_post_meta('todoitem', 'completed', [
    'single' => true,
    'type' => 'boolean',
    'show_in_rest' => true,
  ]);
});