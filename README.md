# DaDeuce!

Welcome to DaDeuce v1.9! Version 2.0 (with ecommerce?) and 3.0 (NFTs on mainnet!) coming soon.

## How to Play

1. Choose your card by double-clicking on one of the cards in the card section.
1. Take turns asking yes or no questions to deduce which card your opponent has chosen.
1. Double-click on any card to flip it and help you remember which cards you've eliminated and which are remaining.
1. Guess your opponent's card before they guess yours.
1. The game is over when someone correctly guesses their opponent's card, or is it? No! It's just the end of round one, and you won! But it's not end of the fun – in round two, you have to find out WHERE your opponent is, on their screen, like mental magic.
1. After each round, you'll have the option to download a "match up card" with all the game details, join our mailing list, and even mint your match up as an NFT for access to DaDeuce 3.0 and other VIP community events. So why wait? Start playing DaDeuce now and see how far you can go!

## Overview

> Welcome to DaDeuce, the lightning-fast game that will keep you guessing and leave you wanting more! DaDeuce is a two-player game that's perfect for a nice break or as an icebreaker or team building game. It's designed to be fun, fast-paced, and engaging, so you can play a few rounds and then move on to other activities, or not!

So what are you waiting for? Get ready to play DaDeuce and see if you have what it takes to come out on top!

- "Tippi Fifestarr Wins! You guessed _Jack Black_ in 24 clicks, nice."

Responsive Screenshot, bro.
[<img src="https://user-images.githubusercontent.com/62179036/225210460-d8238523-914c-46f7-a4c7-0bb162a0a8dd.png" width="105"/>](https://user-images.githubusercontent.com/62179036/225210460-d8238523-914c-46f7-a4c7-0bb162a0a8dd.png)

This repository serves as the foundation, with special thanks to [@developedbyed](https://www.youtube.com/watch?v=T63nY70eZF0) for the tailwind and nextjs powerup.

https://developers.themoviedb.org/3/getting-started/introduction

## Todo

- [x] layout header, tips, game board, and footer
- [x] add detailed view
- [x] detailed view updates to selectedCard
- [x] force the cards to be squares
- [x] navbar logo replaced with chosen card
- [x] add zoom fullscreen view (see contacts page)
- [x] Click to flip / eliminate cards
- [ ] Add music onload with toggle
- [ ] Sound fx toggle
- [x] Contact page
- [ ] GPT kickstart page (web3 donate button)
- [ ] Create all the 25 cards in DaDeuce Deck
- [x] responsive tooltips
- [x] tooltips know state of the users flow in game
- [ ] (crossing out and eventually replacing the tips to stay relevant)
- [ ] Allow user choice (by navigating to page) of two "Decks"
- [x] Use Next/fonts the right way
- [x] Movie Database API
- [ ] Totally matches or improves the designs usability and delightfulness
- [ ] 5 step img2img "having fun" or "winner" for the chosen card and "loser" for the guessed card?
- [ ] Chat function / rooms
- [ ] Play against chat gpt (chat function + ai)

## Weird Bugs and Questions

1. sometimes the contacts page fetch gets stuck in an infinite loop, is it because of the useEffect dependency array?
2. tooltips not showing up when passed as props
3. whats the best way to organize this mess?
4. whats the best way to have the tooltips aware of certain state (has examined 2 cards, has chosen a card, has eliminated 3 cards, clicks "give me a tip" link, two cards remaining, last card)?
5. music doesn't work
6. https://www.npmjs.com/package/eslint-plugin-react-hooks

## NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**check env.sample and rename to .env.local**
Get an API key from TMDB to enable this version of the app.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Lyrics

We got what it takes

To make it through the gates

We don't need sleep --

Just DaDeuce and drum breaks...

...Dirty beats...style sheets

Game so sleek, it kicks like sneakers on repeat...

On repeat... on repeat...

## Cat Be Petey

me:

> Hi! I need your help like my new teammates. We are in a meeting where I am sharing my progress.
> One is my CTO, a senior react developer who is familiar with NextJS and Tailwind. He will ask me to paste into here different sections of the code to help me debug. The other is my Chief Creative, who will give me general advice from her perspective, humorous encouragement, and also write a clear and engaging paragraph introduction for the landing page, and also write a "how to play" section of on-brand copy.

> Here's me:
> I'm building a game called DaDeuce. Right now it has a navbar with a logo in it that I want to update with the players chosen card in the first phase. So here's how it works now (later I will make the TMDB api call an easter egg):

> page loads a navbar, tooltips section (struggling with giving this access to the state of the app correctly), and a responsive cards section. The top of the cards section is a detailed view of whichever card is selected (single click) and the bottom part is 20 of the top famous people in an api call to TMDB/people. It's just a placeholder for a set of wacky cards and their associated metadata that I'll put in as a final touch. At the bottom are some links to different pages, and below that is a few buttons like sound on, music on, detailed help, and zoom mode.

> Any two people who want to play can just go to my site, and then on their phone or computer play with each other. They'll need to be in the same room, phone call, or whatever communication method they want. It's for friends or new friends to have fun together for a short time. First each player chooses a card by double-clicking one, and then they take turns asking yes no questions to deduce who the other player chose. They can double-click on any card to flip it, to help them remember which cards they've eliminated and which are remaining. At the end, when you've guessed their card (or just whenever there is only one card remaining), you'll get a modal pop-up that asks if you got it right (yes/no/i'm confused, three checkboxes), and lets them download a "match up card" with who they were, how many turns it took, and who they guessed. They can also choose to Mint this results page as an NFT, which will get them access to DaDeuce 3.0 and a special chat channel in our Discord and some VIP community events.

> Right now I've got a responsive navbar with static logo, working details view (whatever they click shows up here, responsively), working card page (shuffles the cards randomly onto the page and double click flips the cards with a nice blur effect), and some basic links to a contact page and about page and kickstart page. At the very bottom are some buttons that don't quite work, I'll need help with that.

Petey:

**writes most of the text at the top of this readme**.
Doesn't help with the coding yet, only the Creative offers help.

Me: _pastes in the current to-do list and bugs and questions from this readme_

Petey:
