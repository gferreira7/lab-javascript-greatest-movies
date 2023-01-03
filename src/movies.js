// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   let directorsArray = []

   moviesArray.map(movie => {directorsArray.push(movie.director)})
   return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let spielbergDramaMoviesArray = moviesArray.filter(movie => {
        return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    })

    return spielbergDramaMoviesArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    let totalScore = moviesArray.reduce((acc, movie) => {
      if (!movie || !movie.score) {
        return acc;
      }
      return acc + movie.score;
    }, 0);
  
    return parseFloat((totalScore / moviesArray.length).toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesCount = 0;
    if (moviesArray.length === 0) {
      return 0;
    }
    let totalScore = moviesArray.reduce((acc, movie) => {
      if (!movie || !movie.score || !movie.genre.includes("Drama")) {
        return acc;
      } else {
        dramaMoviesCount++;
        return acc + movie.score;
      }
    }, 0);
    if(dramaMoviesCount === 0){
        return 0
    } else{

        return parseFloat((totalScore / dramaMoviesCount).toFixed(2));
    }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
      return a.year - b.year || a.title.localeCompare(b.title);
    });
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 20)
      .map((movie) => movie.title);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    let convertedArray = JSON.parse((JSON.stringify(moviesArray)))
    
    convertedArray.map((movie) => {
      let hours = parseInt(
        movie.duration.substring(0, movie.duration.indexOf("h")),
        10
      );
      let minutes = parseInt(
        movie.duration.substring(
          movie.duration.indexOf(" ") + 1,
          movie.duration.indexOf("min")
        ),
        10
      );
      if (!hours) {
        movie.duration = minutes;
      } else if (!minutes) {
        movie.duration = hours * 60;
      } else {
        movie.duration = hours * 60 + minutes;
      }
      return { ...movie };
    });
    return convertedArray;
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
