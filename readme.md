This project is a monorepo hosting the Arcnight applications. It includes the applications, their dependencies & shared modules as well as all tooling surrounding development of the clients (as well as some additional miscellaneous things).

## Getting Started

You'll need to have the following environment to work with this project

- Node.js LTS
- Yarn 4
- git

You can find more detailed version-constrains for Node.js and yarn in `package.json`.

``shell
# Clone the project
git clone https://github.com/arcnightgames/ragnarok.git
git clone git@github.com:arcnightgames/ragnarok.git

# Install all dependencies for the entire monorepo & symlink
# local dependents to one another
yarn install

# Build clients
yarn build
```

For additional details on how to interact with the monorepo, see the [yarn docs](https://yarnpkg.com/) for reference.

## Contributors

<a href="https://github.com/arcnightgames/ragnarok/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=arcnightgames/ragnarok" alt="contributors" />
</a>

## License

The code and data files in this distribution are licensed under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See https://www.gnu.org/licenses/ for a copy of this license.

See [license](license) file
