# Fonts and Text Styling

Throughout this course, we have seen that we can render text on the page using the `text` command and can adjust the size using the `textSize` command.

```javascript
// Draw text at (50, 50) that has a size of 20 pixels.
textSize(20)
text(“Make big text!”, 50, 50)
```

In addition to the size, we can adjust the font of the text using the `textFont()` command. `textFont()` will accept either fonts that are stored on the computer or ones that are imported from external websites like [Google Fonts](https://fonts.google.com/).

```javascript
function setup() {
	textFont(“Courier”, 32)
	text(“I wrote some text”, 50, 50)
}
```

Typically, computers store what we call system fonts that can be called in this method. Common system fonts include  "Arial", "Courier," "Courier New," "Georgia," "Helvetica," "Palatino," "Times New Roman," "Trebuchet MS," and "Verdana".

There are far more fonts that can be stored on a single computer. We can use websites like [Google Fonts](https://fonts.google.com/) to import specific fonts. To import fonts from Google Fonts, you should:

1. Navigate to Google Fonts
2. Find the font you like and select with +
3. Copy the `<link>` statement and paste it inside the `<head>` of `index.html`. 
4. You can use this font name now in `textFont()`

## Tasks for Today

1. Write two sentences using the `text` command. Style each with a different system font using the `textFont()` command. 
2. Import a two fonts from Google Fonts and print out a two text phrases using the fonts that you imported.
3. The `text`command accepts both a width and a height. Modify your text from 1 and 2 so that they take up a specific width and height on the page.
4. Go to Google Fonts and find the following
- 3 Serif Fonts
- 3 Sans Serif Fonts
- 2 Display Fonts
- 2 Handwriting Fonts

Load each into your program and create a mini “About Me” page that renders text using each of these fonts. **Bonus**: Change the background color to your favorite color. 

5. An array of fortunes called `fortunes` has been provided for you on `fortunes.js`. Have the program randomly display a different fortune every time. **DOUBLE BONUS CHALLENGE**: Create an array of fonts and have a different font render every time the program runs.