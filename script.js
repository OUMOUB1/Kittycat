// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.





//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
let song1;
song2 = {
songName:`Tomorrow2`,
songImage:`https://i.ytimg.com/vi/dQzFZpicnF0/maxresdefault.jpg`,
Artist:`cardiB,gloRilla`,
Link: `https://open.spotify.com/track/7KXVIAuw3m2hxZanrpSXS3?si=4c3cc6546d074eae`,
  }
let song2;
song2 = {
  songName: `Just wanna rock`,
  songImage: `https://dailyloud.com/wp-content/uploads/2022/10/Screen-Shot-2022-10-20-at-7.22.30-PM.png`, 
  Artist: `Lil Uzi vert`,
  link: `https://open.spotify.com/track/4FyesJzVpA39hbYvcseO2d?si=ba29710ce8504eee`,
}
let song3 = {
  songName: `Bad Guys`,
  songImage: `https://www.hitsongsdeconstructed.com/wp-content/uploads/hit-songs-deconstructed-website-wire-bad-guy-article-v1.jpg`,
  Artist: `Billie Eilish `,
  Link:`https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m?si=04e633ccdb794020`,
}

let song4 = {
  songName: `Run`,
songImage:`https://i.ytimg.com/vi/ssD6mzewGVo/maxresdefault.jpg`,
  Artist:`BTS`,
  Link: `https://open.spotify.com/track/69xohKu8C1fsflYAiSNbwM?si=7d76f336160748aa`,
}
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let songs = [song1, song2, song3, song4];



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
 let songs= {

 }
  

// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "image";
  displaySong.innerHTML = "songName";
  displayArtist.innerHTML = "artist";
  displayLink.innerHTML = "songlink";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  let text = "";
for (let songs = 0; i < songName.length; i++) {
  text += SongName[i] + "<br>";
}
  for (let artist= 0; i < artist.length; i++){
    text += artist[i] + "<br>";
    
  }
 for (let songLink= 0; i < songLink.length; i++){
    text += songLink[i] + "<br>"
  }








// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
