## Start project in React

## Install Dependency

1. Position yourself in calculator-fe folder
2. Run yarn install

## Install certificate

```On MacOS, you can follow next steps:

1. brew install mkcert - globally
2. In calculator-fe project run: mkcert -key-file ./secrets/key.pem -cert-file ./secrets/cert.pem "localhost"
3. Finally run mkcert -install

```

```On Windows, you can follow next steps:

1. Run powershell as administrator
2. run command: Set-ExecutionPolicy Bypass -Scope Process -Force
3. run command: iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
4. Finally when you install chocolatey, run: choco install mkcert
5. In calculator-fe project run: mkcert -key-file ./secrets/key.pem -cert-file ./secrets/cert.pem "localhost"
6. Finally run mkcert -install

```

## Start up project

```
$ yarn start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
```
