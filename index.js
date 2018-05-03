const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("M. BAD TAA EST CONNECTER !")
})
bot.on('message', message => {
    if (message.content === '*ping') {
    message.reply('pong !') }
    
    else if (message.content === '*dodo') {
        message.channel.send('Fais dodo, Colas mon p\'tit frère\n' +
            'Fais dodo, t\'auras du lolo\n' +
            'Maman est en haut\n' +
            'Qui fait des gateaux\n' +
            'Papa est en bas\n' +
            'Qui fait du chocolat\n' +
            'Fais dodo, Colas mon \'ptit frère\n' +
            'Fais dodo, t\'auras du lolo') }
    
    else if (message.content === '*help') {
        message.channel.send('**Les commandes** : \n *ping : Pong ! \n *dodo : Comptine pour enfant \n *help : affiche les commandes \n *credit : pour les crédits \n *master : pour savoir qui est le maître ici ! \n *kill : pour tuer des gens ! \n *baguette \n *merci : pour dire merci au bot \n *bonjour : pour dire bonjour au bot\n *afk (on/off): pour se mettre afk ou pour retirer son afk \n *site : pour afficher le site \n*ah \n \n Bot créé par <@!317968962656796674> avec l\'aide de <@!385337893553438720>') }
    
    else if (message.content === '*credit') {
        message.channel.send('Bot créé par <@!317968962656796674> avec l\'aide de <@!385337893553438720>') }
    
    else if (message.content === '*master') {
        message.reply('Non ce n\'est pas toi le maître c\'est mwa <3') }
    
    else if (message.content === '*kill') {
        message.reply('a tuer son ennemi ! enfin je crois je suis que un bot moi !') }
    
    else if (message.content === '*merci') {
        message.reply('derien :D') }
    
    else if (message.content === '*afk on') {
        message.reply('est afk') }
    
    else if (message.content === '*afk off') {
        message.reply('n\'est plus afk') }
    
    else if (message.content === '*bonjour') {
        message.channel.send('Salut mon ami de toujours :D') }
    
    else if (message.content === '#onarienvu') {
    message.channel.send('Moi je vois ... je vois une tache ! Ah merde c\'est toi désolé ... Pourquoi tu dis que je suis méchant ? Je suis un bot moi ! C\'est mon dévelopeur qui est méchant ...') }

    else if (message.content === 'non') {
    message.channel.send('si') }

    else if (message.content === 'oui') {
    message.channel.send('nan') }

    else if (message.content === '*site') {
    message.channel.send('Le célèbre site de Müulsh : http://muulshcorp.ml/ :crown: \n Le site da Abricot Corp : http://abricotwebc.ga/') }

    else if (message.content === '*ah') {
    message.channel.send('**AHHH** tu m\'as fait peur :o') }

    else if (message.content === 'M. Bad Taa') {
    message.channel.send('Me revoila !!') }
})


bot.on('message', message => {

  if (message.content.startsWith('!play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande 
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})


bot.login(process.env.TOKEN)
