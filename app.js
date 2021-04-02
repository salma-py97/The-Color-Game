var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

























// const colors = generateArrayOfColors(6);

// const squares = document.querySelectorAll('.square');
// const pickedColor = pickColor();
// const colorDisplay = document.querySelector('.colorDisplay');
// const resetBtn = document.querySelector(".reset");
// const showcase = document.querySelector(".title");
// const easyBtn = document.getElementById('easyBtn');
// const hardBtn = document.getElementById('hardBtn');

// // easyBtn.addEventListener('click', function(){
// //     easyBtn.classList.add('selected');
// //     hardBtn.classList.remove('selected');
// //     const colors = generateArrayOfColors(3);
// //     const pickedColor = pickColor();
// //     colorDisplay.textContent = pickedColor;
// //     for(let i = 0; i<squares.length; i++){
// //         if(colors[i]){
// //             squares[i].style.backgroundColor = colors[i];
// //         } else{
// //             squares[i].style.display='none';
// //         }
// //     }
// // })
// // hardBtn.addEventListener('click', function(){
// //     hardBtn.classList.add('selected');
// //     easyBtn.classList.remove('selected');
// //     const colors = generateArrayOfColors(6);
// //     const pickedColor = pickColor();
// //     colorDisplay.textContent = pickedColor;
// //     squares.forEach((square, index) => {
// //         square.style.backgroundColor= colors[index];
// //         square.style.display='block';
// //     })
// // })

// resetBtn.addEventListener('click', function(){
//     // generate all new colors
//     const colors = generateArrayOfColors(6);
//     // pick a new random array from colors array
//     const pickedColor = pickColor();
//     // change colorDisplay text content to picked color
//     colorDisplay.textContent = pickedColor;
//     // change colors of squares
//     squares.forEach((square, index) => {
//         square.style.backgroundColor= colors[index];
//     })

//     showcase.style.backgroundColor = 'lightblue';

// })



// function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }








// colorDisplay.textContent = pickedColor;


// squares.forEach((square, index) => {
//     // Add initial colors to squares 
//     square.style.backgroundColor= colors[index];
//     // Add event listener to square
//     square.addEventListener("click", function(){
//         // Get square background color
//         const clickedSquare = square.style.backgroundColor;
//         // compare background color of clicked square to the pickedColor
//         if (clickedSquare === pickedColor){
//             // make all the background color of all the squares === picked color
//             // we have to select squares again due to scope
//             const squares = document.querySelectorAll('.square');
//             squares.forEach(square => {
//                 square.style.backgroundColor = pickedColor;
//             })
//             // display win message
//             const msg = document.querySelector('.msg');
//             msg.textContent = 'Correct!';
//             // change .title background to pickedColor
//             const showcase = document.querySelector('.title');
//             showcase.style.backgroundColor = pickedColor;

//             // change resetButton text Content to "Play again?"
//             resetBtn.textContent = 'Play again?';

            
//         } else {
//             // alert("wrong, try again!");
//             // display loss message
//             const msg = document.querySelector('.msg');
//             msg.textContent = 'Try again';

//             // fade out the square
//             this.style.backgroundColor = '#232323';
//             this.style.transition = 'background-color 1s fadeout'
//         }
//     })

// })

// function pickColor(){
//     const randomNum = Math.floor(Math.random()*(colors.length));
//     return colors[randomNum];
// }

// function generateArrayOfColors(num){
//     const array = [];
//     for (let i = 0; i < num; i++){
//         // get random color and push into array
//         const color = randomColor();
//         array.push(color);
//     }
//     return array
// }

// function randomColor(){
//     // pick a "red"
//     const red = Math.floor(Math.random() * (255+1));

//     // pick a "green"
//     const green = Math.floor(Math.random() * (255+1));

//     // pick a "blue"
//     const blue = Math.floor(Math.random() * (255+1));

//     return `rgb(${red}, ${green}, ${blue})`;

// }