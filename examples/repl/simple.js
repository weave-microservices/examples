const { createBroker } = require('@weave-js/core')
const repl = require('@weave-js/repl')

const broker = createBroker({
    nodeId: 'node1'
})

broker.start().then(() => repl(broker))