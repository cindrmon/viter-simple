# Main file

> Source: https://github.com/KittyGiraudel/sass-boilerplate/tree/master/stylesheets

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

> NOTE: I may have not included all of the 7-1 boilerplate, since this is focused on making a global sass library in which smaller vue components would rely to. Also the fact that a vue component can have its own scoped scss that you can put on to style only that particular vue component. This is only primarily used to create your own global library of designs that you can use throughout the project without the reliance of using a framework.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)
