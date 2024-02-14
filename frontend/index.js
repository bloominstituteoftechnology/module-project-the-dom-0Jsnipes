


function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach(widget => {
    widget.classList.add('widget')
  })
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
const qofTheDay = Math.floor(Math.random()*quotes.length)
const ranQuote = quotes[qofTheDay] 
const quote =document.createElement('div')
const quoteText = ranQuote.quote
quote.textContent = quoteText
const widgetQuote = document.querySelector('.quoteoftheday')
widgetQuote.appendChild(quote)

const authorDate =document.createElement('div')
const {author, date} = ranQuote
authorDate.textContent = `${author} in ${date||"an unknown date"}`
widgetQuote.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
const randomVerb1 = verbs[Math.floor(Math.random()* verbs.length)]
const randomVerb2 = verbs[Math.floor(Math.random()* verbs.length)]
const randomnoun1 = nouns[Math.floor(Math.random()* nouns.length)]
const randomnoun2 = nouns[Math.floor(Math.random()* nouns.length)]
const randomadverb1 = adverbs[Math.floor(Math.random()* adverbs.length)]
const randomadverb2 = adverbs[Math.floor(Math.random()* adverbs.length)]

const paragraph = document.createElement('p')
  paragraph.textContent = ` We need to ${randomVerb1} our ${randomnoun1} ${randomadverb1}
  in order to ${randomVerb2} our ${randomnoun2} ${randomadverb2}.`
  document.querySelector('.corporatespeak').appendChild(paragraph)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector('.countdown')
  let count = 5
  const countDown= document.createElement('p')
  countDown.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(countDown)

  const id = setInterval(() => {
    if (count=== 1) {
      countDown.textContent = "Liftoff! 🚀"
      clearInterval(id)
    }else{
      count--
    countDown.textContent = `T-minus ${count}...`
  }
  }, 1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)]
  const friendsWidget = document.createElement('p')
  document.querySelector('.friends').appendChild(friendsWidget)
  friendsWidget.textContent = `${person.fname}` 

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
