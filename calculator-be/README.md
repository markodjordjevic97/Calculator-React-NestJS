## Nest JS project

## Install Dependency

1. Position yourself in calculator-be folder
2. Run yarn install

## Install certificate

```
On MacOS, you can follow next steps:

1. brew install mkcert - globally
2. In calculator-be project run: mkcert -key-file ./secrets/key.pem -cert-file ./secrets/cert.pem "localhost"
3. Finally run mkcert -install
```

```
On Windows, you can follow next steps:

1. Run powershell as administrator
2. run command: Set-ExecutionPolicy Bypass -Scope Process -Force
3. run command: iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
4. Finally when you install chocolatey, run: choco install mkcert
5. In calculator-be project run: mkcert -key-file ./secrets/key.pem -cert-file ./secrets/cert.pem "localhost"
6. Finally run mkcert -install
```

## Start up project

```
$ yarn start:dev`

Runs the app in the development mode.\
Open [https://localhost:3001].
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
