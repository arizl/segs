

module.exports = {
    name: 'maths',
    description: 'basic maths',
    execute(client, message, args) {
        if(Number.isNaN(+args[0]) || Number.isNaN(+args[2])){
            return message.channel.send('numbers and signs must be seperated!')
        } else{
            switch (maths){
                case plus: if(!args[1] === "+") continue;
                if(args[1] === "+"){
                    message.channel.send(+args[0] + +args[2])
                }
            }
        }
    }
}