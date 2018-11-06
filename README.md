# Lighthouse Labs 21-Dat Coding Challenge (2018)
Lighthouse Labs 21-Day Coding Challenge

The attached is the code I created for the Lighthouse Labs 21-Day  Coding CHallenge. The goal of the challenge was to do a short bit of code (usually one function) every day, for 21 days. This usually only took 5-15 minutes each day. A great habit-builder! Below is the text from the challenge for each day, to give you an idea of what was asked for:

Note: You can only complete ONE challenge a day - that way you will build up that daily habit, so no skipping ahead :)

Welcome to the Lighthouse Labs 21-Day Coding Challenge! Over the next 21 days you will be responsible for managing the Lighthouse9000™ and making sure it runs as smoothly as possible. As the Lighthouse operator, you will need to solve daily coding challenges to power the lighthouse and keep passing ships (and their passengers) safe.

Click on the flashing radar below to start the first challenge. A new challenge will be unlocked everyday at midnight PST. Do all the challenges until the grid below is completely filled. Have fun! 

## Challenge #1
As a lighthouse operator, your job is to both watch out for dangers in your area, such as rocks and strong currents, but also to be the knowledge expert for your area of the ocean. With this in mind, let's start using our coding skills to get some information about our GRID area. For starters, let's find out how many rows there are in our GRID.

Up above you have access to the printed-out grid, and the JS code for the grid. This is your grid, for your lighthouse.

Write a function called countRows() which will tell us the number of rows in our GRID. Remember that other lighthouse operators are going to be using this function, so it has to be able to work on a GRID of any size. It would be easy to write a function that just did return 10; but that wouldn't help operators with bigger or smaller areas!

## Challenge #2
Now that we know how many rows our GRID area has, let's find out the number of columns. My sources at the Lighthouse9000™ company tell me that this shouldn't be too hard, but that you shouldn't overthink it.

Write a function called countColumns() that will tell us the number of columns in our GRID. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is. Also, your code will still be able to see the GRID variable, and you won't need to pass it as an argument to the function.

## Challenge #3
Now that we can do rows and columns, let's find out how big the size of our GRID is. I checked in with the lead developer at a company I know of, and she told me that this is one of the areas where re-using code is a great idea.

Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string '10 x 10'. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your countRows() and countColumns() functions that you've already finished.

## Challenge #4
Awesome job! Other lighthouse operators are jealous of your grid. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.

## Challenge #5
Since our GRID is written in coordinates like A3 or D8, we need code that is going to be able to convert those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse operators have reported in and we know that their areas never go above Z.

Let's build a function called convertColumn() which, when given the coordinate as an argument, will return the number of the column.

For example, calling convertColumn('C4') should return 2 as the 'C' column is the third column, and since JavaScript arrays start at 0, that would make 2 the third column.

Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")

## Challenge #6
Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")

## Challenge #7
In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the ^ symbol on the grid.

Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)

## Challenge #8
There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ symbol.

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: isCurrent('E2'); would return true)

## Challenge #9
And last, but certainly not least, there are cells with ships in them! We need to be able to query any cell in our GRID area and find out if it is occupied by a ship.

Write a function called isShip() which will take in a coordinate in the form of 'I9' and return a true or a false boolean value depending on whether there is a ship in that cell or not. (Example: isShip('B3') would return true)

## Challenge #10
Your next job is to write a function so that your lighthouse can sweep a whole row of cells.

Write a function named lightRow() that takes in the number of the row and returns its contents. (Example: lightRow(2); would return ["", "", "v", "", "~", "", "", "", "", ""])

## Challenge #11
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "v", "", "", "", "", "", "~", "", ""])

## Challenge #12
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); would return false as would lightCell('A11');)

## Challenge #13
Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, for use in their latest map.

Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid. (Example: allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'])

Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: allCurrents() should return ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'])

## Challenge #14
While we are reporting on things, let's make a report for all of the ships in our area. This one is for Transport Canada, as they are the ones watching all the movements of ships.

Write a function called allShips() which, when called, will return an array of the coordinates of all the ships in your grid.

## Challenge #15
Here is an opportunity to prove how powerful your Lighthouse-powering skills are! Write a function called firstRock() which will return the coordinates of the first rock in your grid. Consider how you might use one of your previously written functions to simplify your task!

## Challenge #16
That was outstanding! Now do the same thing with firstCurrent(). Don't reinvent the wheel here, re-use existing code. This is one of the most important skills you can build as a coder...er, uh, I mean Lighthouse operator.

## Challenge #17
Transport Canada called back. They want something similar to what you did for firstRock() and firstCurrent() but they want both the first AND the last ship in your area.

Write a function called shipReport() which does not take any parameters, but will return an array of the coordinates of the ship furthest to the west (left) and east (right) of your GRID. (Example: shipReport() would return ['B3', 'I5'].)

## Challenge #18

Ship captains are really starting to rely on you to plot their routes through your area. Your name is being sung in pubs and taverns up and down the coast. And this time, it's for the right reasons! The ship captains are starting to be curious about some of the cells in your grid, and what they want is to know how dangerous a particular cell is. They know if ones are safe, but sometimes, they are willing to accept a bit of danger so that they can get a faster delivery time.

A cell is considered dangerous if there is a rock or a strong current in it. However, a cell with rocks in it would be 100% dangerous, while strong currents are only 50% dangerous. Write a function called howDangerous() that will take a cell in the format 'G7' and return a number value for how dangerous the cell is. (Example: howDangerous('E2') will return 50 where howDangerous('E3') will return 100.)

## Challenge #19
It's time for monthly reporting to Lighthouse HQ. Your supervisor calls you and tells you that they need a report of what percentage of your grid is rocks and what percentage has strong currents. This data should be sent as an array of two number values, in that specific order.

Write a function percentageReport() that returns the right percentages. (Example: calling percentageReport() should return the following array: [9.00, 7.00], as 9% of your GRID is rocks, and 7% is currents.) Your grid produces nice easy integers. However, not all grids will. Just to be certain, make sure your results always return 2 decimal places. This will really help ALL the Lighthouse9000™ operators.

## Challenge #20
Lighthouse HQ also wants a report of the safety of your GRID. Write another function called `safetyReport()` which will return your GRID with all of the values replaced by the percentage for how dangerous they are. The percentages for how dangerous a cell is were established in question #18.

## Challenge #21
Ship captains have heard of your prowess and want to know the length of their routes through your grid.

Write a function called calcDistance() which will take two coordinates in the form of 'A3' and calculate the distance between the two points.
