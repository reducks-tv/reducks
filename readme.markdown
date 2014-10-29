Gource Setup
---

This repository contains Gource configurations along with the necessary
dependencies to render them. To install Gource follow these directions.

`brew install gource`

Once installed, just update the configuration template and update the
appropriate lines of the config file and run it with this command.

`gource --load-config path/to/config`

Make sure to update the path at which the .git or .svn directory exist in
within the contents of the config file.

##### TODO

* [ ] Automate this process
* [ ] Command-line tool
