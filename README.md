Movie- Box Application
Objective:

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.
Requirements

User Interface:
Create a responsive and visually appealing user interface for the application. - Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
List the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters. The Card component should display the movie title and release date. card - [data-testid: movie-card] movie poster - [data-testid: movie-poster] movie title - [data-testid: movie-title] movie release date - [data-testid: movie-release-date]
2. Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
3. Movie Details:
When I go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page. I should see title - [data-testid: movie-title] release date (in UTC) - [data-testid: movie-release-date] runtime (in minutes) - [data-testid: movie-runtime] overview - [data-testid: movie-overview]

API Integration:
Consume the TMDB API to fetch movie data.
Use the following API endpoints:
Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.

Submission:
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify)
YOu can viewnthe live project HERE
How To Run Project Locally
After cloning down:
Open the Integrated Terminal on 'mymoviebox-project2'
Type in "npm i" in the terminal to ensure all the dependencies are installed
Type in "npm run dev" in the terminal to spin up the file on local host. It will spin up to local host 3000
Notes About The Project:
IMPORTANT: Pages may automatically jump to the bottom. Please scroll up to view the page content

The API call will bring back the top-rated movies of all time
Users are able to click on the poster cards to get individual information about the movie
The search functionality works in the desktop version only as a mobile design was not specified
Users will need to click on the movie title name in the search drop-down to be taken to that individual movie page
Tools & Frameworks Used:
Build: vite & ReactJS
CSS: tailwind
API: TMDB
Hosting: Vercel
