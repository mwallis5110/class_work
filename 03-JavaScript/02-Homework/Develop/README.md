# Portfolio

### Description

This is a simple random password generator. It is designed to allow users to choose the length of a password and different types of characters to be included, then generate a random combination of characters based on that chosen criteria.

It is made up of an HTML folder `index.html`, a CSS folder `styles.css`, and a Javascript folder `script.js` (Where most of the moving parts are stored).

#### The program works in the following way:

1. User is given a prompt to choose how many characters they would like their password to contain. The program accounts for the user entering anything besides a numerical character by repeating the prompt until one is entered.

2. User is given successive prompts to choose whether to include uppercase, lowercase, special, and numerical characters. These options are tied to arrays which are used to generate a password.

3. A function generates and returns a random password by taking the above inputs and randomly selecting characters from the chosen arrays. 

### Dependencies

The only requirement for accessing this portfolio is a modern web browser.

### Accessing the Program

The program can be accessed by following the "Link to Deployed Application" directly below, then "inspecting" the page. Viewing the console window will give even more insight into the program as well.

### Link to Deployed Application

This page can be viewed here:
https://mwallis5110.github.io/W01_HW3/


### Screenshots

The layout of the page is as follows: 

1. Initial Prompt

Allows users to choose how many characters their password will contain.

![Character number prompt](images/Capture1.png)


2. Character Select Prompts

Allows users to select which characters they would like to include in or leave out of their passwords.

![Lowercase prompt](images/Capture2.png)


![Uppercase prompt](images/Capture3.png)

![Special character prompt](images/Capture5.png)

![Number prompt](images/Capture6.png)

4. Finished Password

By clicking on the "Generate Password" button (circled in blue), the finished password is displayed.

![Finished password](images/Capture7.png)


### GitHub Link

https://github.com/mwallis5110/W01_HW3