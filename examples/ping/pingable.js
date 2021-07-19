const { createBroker } = require('@weave-js/core')
const repl = require('@weave-js/repl')

const broker = createBroker({
    nodeId: 'node-pingable',
    transport: {
        adapter: 'tcp'
    }
})

broker.start().then(() => repl(broker))