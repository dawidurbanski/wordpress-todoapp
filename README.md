# React Todo App as WordPress Plugin

This is a demo of WordPress plugin with cusom UI built in React.

Main features:

- Includes adding, removing, editing, marking as complete and filtering todos.
- Persists all todos as WordPress custom post type posts
- Completed state stored in post metadata.
- There is no custom REST endpoint registered. Everything is handled with native functions.

Screenshot:

![CleanShot 2024-11-22 at 08 09 27@2x](https://github.com/user-attachments/assets/b29921a6-654a-427b-8035-5246c5e9c8ed)

It uses WordPress packages like `@wordpress/components`, `@wordpress/core-data`, `@wordpress/data` and `@wordpress/icons`.

The main purpose of this project is to showcase how to build such interfaces "the WordPress way".

There's not so much out there showing how it's done in practice so I made this little demo to help you get started.

## Demo

[<img src="https://github.com/user-attachments/assets/544ea5f3-bd2d-4cca-bf78-b67577f74ab3" width="120"/>
](https://playground.wordpress.net/?mode=seamless#{%22landingPage%22:%22/wp-admin/admin.php?page=todoapp%22,%22login%22:true,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginData%22:{%22resource%22:%22url%22,%22url%22:%22https://github-proxy.com/proxy/?repo=dawidurbanski/wordpress-todoapp&release=1.0.1&asset=todoapp.zip%22}}]})

## Running locally

The only requirement is Node (recommended at least version 20).

1. Clone this repository: `git clone git@github.com:dawidurbanski/wordpress-todoapp.git`
2. Go to the folder: `cd wordpress-todoapp`
3. Run: `npm install & npm run build`
4. Run: `npm run start`
5. Visit http://localhost:8881/wp-admin/admin.php?page=todoapp

## Development

When you have your site running (with `npm run start`) you can run `npm run dev` to have assets build without running `npm run build`.

You can opt in for HMR (Hot Module Replacement) feature by running `npm run dev -- --hot`.
