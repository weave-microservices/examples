const { createBroker } = require('@weave-js/core')
const repl = require('@weave-js/repl')

const broker = createBroker({
    nodeId: 'node-ping1',
    transport: {
        adapter: 'tcp'
    }
})

broker.createService({
    name: 'ping',
    actions: {
        async do(context) {
            const result = await this.broker.ping()
            console.log(result)
        }
    }
})

broker.start().then(() => repl(broker))