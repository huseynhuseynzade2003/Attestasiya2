class Message {
    constructor(name, sendTime, text) {
      this.name = name
      this.sendTime = sendTime
      this.text = text
    }
  
    toString() {
      console.log(`${this.sendTime} ${this.name}: ${this.text}`)
    }
  }
  
  class Messenger {
  
    constructor() {
      this.messages = []
    }
  
    show_history() {
      this.messages.map(message => message.toString())
    }
  
    send(author, text) {
      let message = new Message(author, gettime(), text)
      this.messages.push(message)
    }
  }
  
  function gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`
  }
  
  
  let messenger = new Messenger()
  messenger.send('Adil', 'ilk mesaj')
  messenger.send('Məryəm', 'İkinci mesaj')
  messenger.show_history()