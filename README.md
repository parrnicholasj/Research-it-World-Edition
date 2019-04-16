# groupProject1
##  Description 
( insert name here) is designed as a classroom research tool for grades 5-7. Students at this age often start engaging in research projects for the first time, and begin talking about primary and secondary sources for research. The app is meant to be used as a preliminary research tool, to guide students through what kinds of information they might need in a larger research project. 
## Function 
When you first load the app, it brings you to a page that will direct you to either the student view or the teacher view. 

On the teacher view page, the classroom instructor will be able to add the names of either individual students, or group names. This way the teacher can track what the students are looking at, how many searches they've done, and whatt countries they've looked at. 

In the student view, the student sees a search area on the left hand side. They need to choose their name from the drop down menu, so that the app will save searches to them. After typing the name of a country into the search area, the app searches for basic information, weather at the capital, holidays celebrated in the country, and recent articles related to the country. 

### Technologies Used
This is a web based app using HTML/CSS and Javascript. It is using Firebase as a database to store student information. Since it uses all front-end tech with very little back end, the app does not require any sensitive information. 

Layout is part custom built and partly using Bootstrap libraries. The font is coming from Wired.js, and some of the animations are being provided by micron.js. 

### Features
(insert name) is meant to be able to be used in an inclusive classroom environment. To that end, accessability was considered since the beginning. Our app follows WCAG, in order provide a complete experience for students and teachers. 

#### About the APIs
restcountries.eu gives basic information about most countries and serves as a basis for working with the other APIs.

openweathermap.org is being used to provide weather in the capital city of the country being searched.

The New York Times API is being used to provide access to articles related to the country being searched

calendarific.com is being used to get basic info on the holidays of the countries being searched.

## Future Additions
1. Right now, the databse is not completely built up. It is storing searches and results, and each student's search is being stored, but the teacher is not currently able to look up all previous searches. The database has the information, but it has not been printed to the teacher access page yet.

2. Teachers are not currently able to log in, this would be added in the future.

3. Future designs would also include the ability for students to save individual articles and type up notes. 
