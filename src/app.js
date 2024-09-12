const {envs}= require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnostica autoconvocada
// Agnóstica por que no tiene nombre
// Autoconvocada porque la ejecutamos con los paréntesis
(async () => {
    main()
})()