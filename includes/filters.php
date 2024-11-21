<?php

add_filter('rest_todoitem_query', function ($args, $request) {
  $meta_key = $request->get_param('metaKey');
  $meta_value = $request->get_param('metaValue');

  if (empty($meta_key)) {
    return $args;
  }

  $args['meta_query'] = [
    'relation' => 'OR',
    [
      'key' => $meta_key,
      'value' => $meta_value,
    ],
  ];

  if ($meta_value === "") {
    $args['meta_query'][] = [
      'key' => $meta_key,
      'compare' => 'NOT EXISTS',
    ];
  }

  return $args;
}, 10, 2);