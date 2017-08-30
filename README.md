# Gloomhaven-Monster-Attack-Modifier-Cards

A [web application](https://jenktam.github.io/Gloomhaven-Monster-Attack-Modifier-Cards/) that automates the monster attack modifier card component of the Euro-style tactical combat board game, Gloomhaven. This application helps to diminish the setup time involved with the physical game components per scenario, so you can spend more time slaying monsters and having fun with your friends.

![Attack Modifier Cards Demo]("https://raw.githubusercontent.com/jenktam/Gloomhaven-Monster-Attack-Modifier-Cards/master/images/GloomhavenAttackModifierCards - Responsive Design.png")

# Inspiration

 In Gloomhaven, players dungeon-crawl through different scenarios with other adventurers to proceed in their campaign, discover new regions, and advance their individual character's goals. I'm heavily addicted to this game and am so impressed with how fun and easy it is to play. However, one shortcoming I noticed is that there are so many pieces. Every scenario requires unique monsters, their clips, monster attack cards, overlay tiles, and attack modifier cards. To make the set up for my group a little easier, I designed this app to generate the attack modifier cards. Now my friends and I can spend less time shuffling the cards and more time playing!


# Into the Code
This application was built with a MVC architecture.
* *cardPools*: Contains default deck of cards each defined by type, value, img, and oneTimeUse
* *models*: Javascript objects represented by a card, deck, and multipllierCard
* *images*: images
* *index.html*: page invoked when user opens application
* *main.js*: Entry point of application. Gets all information explicitly needs and calls model, view and controller.
* *modifierDeckController.js*: Performs all the logic for the app by initializing the deck, drawing cards, and adding and curse bless cards.
* *modifierDeckView.js*: Handles what the user sees and includes actions that manipulate the DOM. This includes event listeners for clicking the card, bless button, and curse button.
* *stylesheet.css*: CSS files

# Feedback and Bugs
If you encounter an issue while using this app, please let me know. You can submit the issue right here on Github or contact me directly at jennifer.k.tam@gmail.com.

If you haven't heard of the game and are interested in learning more, I recommend you [check](https://www.kickstarter.com/projects/1350948450/gloomhaven) it out!
