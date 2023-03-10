const { createApp } = Vue
const { DateTime } = luxon

  createApp({
    data() {
      return {
        contacts: [
            {
            name: 'Michele',
            avatar: './img/photo1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: './img/photo2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: './img/photo3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/photo4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/photo5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: './img/photo6.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novit???',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: './img/photo7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: './img/photo1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ],
        currentChat: 0,
        inputmessage: "",
        inputresearch: "",
      }
    },
    methods: {
      setChat: function(currentChat){
        this.currentChat = currentChat
      },
      addMessage: function(){
        window.addEventListener('keyup', (btn) => {
          if (btn.key === 'Enter') {
            let text = this.inputmessage
            if(text === ""){
              this.inputmessage= ""
              return
            }
            this.contacts[this.currentChat].messages.push ({"message":text,"status":'sent'})
            this.inputmessage= ""
          }})
          let v = this
          setTimeout(function() {v.contacts[v.currentChat].messages.push (
            {"message":'Ok!',"status":'received'}
          )}, 2000);
      },

      //Function non funzionanti da correggere
      
      setTime: function(){
        let currentDate = this.contacts[this.currentChat].messages[this.currentChat].date
        console.log(currentDate)
        const parseDate = DateTime.fromFormat(currentDate, 'dd/LL/yyyy HH:mm:ss');
        console.log(parseDate)
        const time = parseDate.toFormat("HH:mm")
        console.log(time)
        return
      },
      search: function(){
          let text = this.inputresearch
          if(this.contacts.name.includes(text)){
            console.log("persona presente")
            return
          }
          console.log(text)
      },
    }
  }).mount('#app')