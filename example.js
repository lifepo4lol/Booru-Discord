// Just a note if you're planning on creating/adding new modules
// * This is just about all the documentation there is *
// Otherwise, you're gonna have to read the code or ask me for help

/*
 * Here's an example test command to use with this module system
 * The filename doesn't *need* to match the command, but it's better if it does
 */

// This will hold the config settings for this module
// If it's not here it will yell at you
module.exports.config = {
  // The name of the command, must be unique
  // It's what's used to load/unload the command
  name: 'test',

  // Added onto the global invoker, so if the invoker is 'r!' in config.json this command can be invoked by either 'r!test' or 'r!t'
  // The invoker(s) is only used if you listen for the "message" event
  // A "null" value will cause it to be called on every message, essentially ignoring any invoker check
  invokers: ['test', 't'],

  // help text to show when you call help
  help: 'A test command',

  // help text to show when you call help test
  expandedHelp: 'Wow look even more help!',

  // Usage help, goes 'description', 'command'
  usage: ['Do a thing', 'command', 'Do another thing', 'command anotherThing'],

  // If true, this module won't show on the list when help is called
  // It's optional, by default it'll show
  invisible: true,

  // Another optional config, this will disable auto loading on bot start
  // If it's not present it will load when the bot starts
  // Useful if you want to only enable a command when needed (via 'load')
  autoLoad: true
}

// exports.events holds a bunch of events mapped to functions
module.exports.events = {}

// Adding an event is simple
// Simply add your function to
// module.exports.events.{eventName}

// eventName is any event discord.js supports

// Args are in the form (discordClient, eventArgs...)
// discordClient => The client created with "new Discord.client()"
// eventArgs     => The args sent by the event
module.exports.events.message = (bot, message) => {
  // bot features a few helper commands under `modules`, check `modules.js` for more info
  const [cmd, arg1, arg2, ...argn] bot.modules.shlex(message)
  
  // A logger is available that pretty-prints logs
  // bot.logger.error will also save the error to a file and dm the bot owner
  bot.logger.log(message.content)

  message.channel.send(`Congrats! You found the test command!`)
}

// Here's an example with channelUpdate
// The args for the function are pretty much the same, just with "bot" added
 module.exports.events.channelUpdate = (bot, oldChannel, newChannel) => {
  newChannel.send('There\'s been an update here!')
}
 
// The module system also adds a custom "event", `everyMessage`
// This event will trigger on *every* message the bot gets, bypassing any and all invoker checks
// Allows, for say, an automod module that has `automod` as an invoker to edit settings
// While still getting every message to mod it
module.exports.events.everyMessage = (bot, message) => {
  // Do something with that message
  if (message.contenttoLowerCase().includes(bot.user.username.toLowerCase()))
     bot.logger.info('I was mentionned!!')
}

// Finally, show off ready
module.exports.events.ready = (bot) => {
  bot.logger.info('I\'m ready!')
}
