# Viter Simple

> Vite + Vue3 + Vue Router + Vue Plugin Pages + TS + SASS + Pug

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Requirements

- Node.js
- Yarn

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Additional Notes about the Template

This template is made using anything not vanilla in mind, in which everything is run through a compiler.

- Pug is basically python syntaxxed HTML
- SASS and TS are a superset of CSS and JS, respectively, and everything would eventually be compiled down to HTML+CSS+JS using vite's very fast bundler.

Another thing to take note is that this does not use any css framework (tailwind, vuetify, etc), becuase I just realised that almost all of them don't even have proper Vue 3 or Vite support at all (for the UI component libraries so far), and that Tailwind is just CSS but in the form of classes, and I could've just wrote plain CSS either way, so that's why I eventually got to this idea.

This also includes the 7-1 Sass Architecture for pure SASS development, since the focus of this template is using pure SASS and not relying on css frameworks or libraries. Boilerplate used from [this](https://github.com/KittyGiraudel/sass-boilerplate/tree/master/stylesheets) project.

Feel free to edit and some stuff around here. This is just the simplest baseline where you can add on other stuff, like i18n, a11y, etc.
