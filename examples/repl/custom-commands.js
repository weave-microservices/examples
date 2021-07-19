const { createBroker } = require('@weave-js/core')
const repl = require('@weave-js/repl')

const broker = createBroker({
    nodeId: 'node1'
})

broker.start().then(() => repl(broker, (vorpal, broker) => {
    vorpal
    .command('timer', 'Custom timer action')
    .action((args, done) => {
        let time = 0
        const timer = setInterval(() => {
            time++
            broker.log.info(time)
            if (time === 10) {
                clearInterval(timer)
                done()
            }
        }, 1000)
    })
}))