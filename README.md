# Whateverbook

#### Introduction

Today we're going to learn how to play with objects a little. Because the data you'll be putting in objects is totally up to you, and your users will search that data like the phonebooks of old (and the facebooks of new), we're calling it... whateverbook. But since you'll be semi-forking the repo, you can rename it to whatever you want! "Dinobook"? "Britishnoblebook"? "Bookbook"? THE FUTURE IS YOURS.

#### Instructions

1. You're going to semi-fork [this repo](https://github.com/abbreviatedman/whateverbook) according to [these instructions](http://simp.ly/p/rhtFY4), re-naming it to whatever you have planned for the content. Don't worry too too much about the content, especially since you now know how to create a new repo with a new name that's based on the old repo, and you don't even need to lose the record of your commits when you do so!

2. You'll notice that there are _two_ `<script>` tags in your `index.html` file. The second is for our usual `main.js` file, but the first is for a `data.js` file, where we'll put our objects. Why is the `data.js` file first? Well, your browser will interpret our JavaScript in the order it finds in our html, and we need to have that global `data` variable declared and populated before we can access its data. Otherwise you have a situation like this:

    ```javascript
    console.log(data);
    
    const data = 'Not declared yet when called!'
    ```

    And that's just no good.

    So!

3.  Let's populate our `data.js` file with **an array of objects** (this project will be much harder if you don't use an array of objects!), each of those objects being one of the [whatevers] in your [whatever]book. Give each object _at least_ three properties, and use _at least_ two data types for those properties. (I.e., don't use all `strings` or all `numbers`.)

4. So what are we going to do with that data? Two things: be able to display all of it, and be able to search for one specific entry. Check out `index.html`, and you'll see some elements for taking in input for both of those things, as well as displaying our list.

5. Okay, let's start with `main.js`, which, right now, has one line of code. (!!!) First, we'll have to write an `init` function, which should set up event listeners so that the appropriate buttons will launch the appropriate functions.

6. We're going to need (at least) two functions, one to display all whatevers, and one to search for a specific whatever.  Don't forget to start each with `event.preventDefault()`, because we're dealing with buttons again and their wacky default behavior.

7. Let's start with displaying all whatevers, and before we try to put anything in the html, see if you can `console.log` all the data from each of the items in our `data`. That means every property from every item on our list of whatevers!

8. If you write the word "display" often enough, it starts to look misspelled.

9. Just saying.

10. You may want to consider writing a helper function that takes in _just one_ whatever as a parameter and `console.logs` all of its properties. You could call this every time through your loop for displaying all, and call it once when you find the correct 

11. Now do the same with our search function. When they press the search button, grab the text from the input field and match it against just one item from your data. It could be by name, by age, by diet, by title, or whatever your whatever is best identified by. It's up to you! But try to `console.log` it, not put it on the html yet. See if you can get that data!

12. If you've got it console.logging both , let's work on the html part. If you've got that helper function for displaying one item, you can now change it from `console.log`ging to putting the data on your webpage. We've given you a `ul` to work with, but you may have to put some sub-lists in there to make it pretty. Having a helper function to clear the list can help _a lot_, here.

#### Stretch Goals

* Right now, you're likely displaying only the whatever whose property exactly matches the property you're searching for. Let's change that so that we display the first partial match. For example, if one of your items has the `lastName` property "Zuckerburg", no one wants to write all of that. Make it so that they can write "Zuck", hit search, and get the same result.

    If your user was searching for a unique number, this won't apply. But in that case, try changing things so you search by a string! It's a more fun challenge that way, anyway.

* Make one of the properties of each of your whatevers an array of somethings. You might have to have a sub-sub-(sub-?)list to make this happen.

* If you're not already returning ALL matching results, do that now! So if you have a "28 Days" entry and a "28 Days Later" entry, and someone types in "28" don't just return the first result, or someone intending to see an intense zombie movie will instead see a Sandra Bullock comedy. Print both to the screen!

* If their search matches no result, print "No results found" (or whatever wording you'd prefer). For a stretch stretch goal, add a brief explanation of how your search works. For example, you could put a `ul` with the rules you're working with. (And those rules might change as we keep doing these stretch goals!) For example:
	* Names must match exactly.
	* Your search is NOT case sensitive.

* Make the search results update as you type, instead of when you press the button. Then you can even get rid of the button!

    How would we do this? Instead of launching our `search` function fom a `click` event, have the event fire and launch our `search` function when they type in the input box.

* What if we're having the user search by the title of a book in our Bookbook app, but they instead want to search by author? Let's give them the option to do this! Look into [select elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) as a way to give the user some pre-determined options as to what field to search by and then the [change event](https://developer.mozilla.org/en-US/docs/Web/Events/change) as a way to respond to it.

    Although you could make a bunch of `if`s or a `switch` statement to figure out which field you're searching by, a cleaner and shorter way would be to use bracket notation. To recap how that works: you can say `obj[someStr]`, and if `someStr` holds `'author'`, we'll be looking at `obj['author']`, which, in dot-nation terms, is the same as `obj.author`. Do you see how you can use that? If not, someone near you probably can help!

* What if we have too large a dataset for them to reasonably scroll through? We could use a technique called pagination: splitting the results between pages the user can click "Next" or "Previous" to display portion by portion. I'm sure you've seen this somewhere, but the Fangraphs [batting leaders of 2018 by WAR](https://www.fangraphs.com/leaders.aspx?pos=all&stats=bat&lg=all&qual=y&type=8&season=2018&month=0&season1=2018&ind=0&team=0&rost=0&age=0&filter=&players=0&sort=21,d) list is one such example.

    How could we do this? You would need "Next" and "Previous" buttons with their own event listeners attached. But how do we keep track of what indices from our dataset to display? A good solution with where we're at is to use a global `currentPageStartIndex` variable (probably with a better name, but I'm just the idea man here), and grab a `slice` of our array of objects based on that and the number we want displayed on each page, incrementing or decrementing the variable when the user asks to see a different `slice`.