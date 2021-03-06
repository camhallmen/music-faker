// Create Tracks
var leadSurfer = WaveSurfer.create({
    container: '#lead-form',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var rhythmSurfer = WaveSurfer.create({
    container: '#rhythm-form',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var bassSurfer = WaveSurfer.create({
    container: '#bass-form',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var bassSurferTwo = WaveSurfer.create({
    container: '#bass-form2',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var bassSurferThree = WaveSurfer.create({
    container: '#bass-form3',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var bassSurferFour = WaveSurfer.create({
    container: '#bass-form4',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var drumSurfer = WaveSurfer.create({
    container: '#drum-form',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var leadSurferTwo = WaveSurfer.create({
    container: '#lead-form2',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var rhythmSurferTwo = WaveSurfer.create({
    container: '#rhythm-form2',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var drumSurferTwo = WaveSurfer.create({
    container: '#drum-form2',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var leadSurferThree = WaveSurfer.create({
    container: '#lead-form3',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var rhythmSurferThree = WaveSurfer.create({
    container: '#rhythm-form3',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var drumSurferThree = WaveSurfer.create({
    container: '#drum-form3',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var leadSurferFour = WaveSurfer.create({
    container: '#lead-form4',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var rhythmSurferFour = WaveSurfer.create({
    container: '#rhythm-form4',
    waveColor: '#004ba8',
    progressColor: 'green',
});

var drumSurferFour = WaveSurfer.create({
    container: '#drum-form4',
    waveColor: '#004ba8',
    progressColor: 'green',
});

// Arrays for dry(er) code
sectionOne = [leadSurfer, rhythmSurfer, bassSurfer, drumSurfer]

sectionTwo = [leadSurferTwo, rhythmSurferTwo, bassSurferTwo, drumSurferTwo]

sectionThree = [leadSurferThree, rhythmSurferThree, bassSurferThree, drumSurferThree]

sectionFour = [leadSurferFour, rhythmSurferFour, bassSurferFour, drumSurferFour]

allSections = [
    leadSurfer, leadSurferTwo, leadSurferThree, leadSurferFour, 
    rhythmSurfer, rhythmSurferTwo, rhythmSurferThree, rhythmSurferFour,
    bassSurfer, bassSurferTwo, bassSurferThree, bassSurferFour,
    drumSurfer, drumSurferTwo, drumSurferThree, drumSurferFour
]

// Load Tracks
$("#poppunklead1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%201.mp3?alt=media&token=da85aab0-4f10-4f56-809e-b354559229b8")
    } else if (choice === "2") {
        leadSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%201.mp3?alt=media&token=da85aab0-4f10-4f56-809e-b354559229b8")
    } else if (choice === "3") {
        leadSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%201.mp3?alt=media&token=da85aab0-4f10-4f56-809e-b354559229b8")
    } else if (choice === "4") {
        leadSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%201.mp3?alt=media&token=da85aab0-4f10-4f56-809e-b354559229b8")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunklead2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%202.mp3?alt=media&token=8e781598-3981-461c-a75a-a5c37f945b82")
    } else if (choice === "2") {
        leadSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%202.mp3?alt=media&token=8e781598-3981-461c-a75a-a5c37f945b82")
    } else if (choice === "3") {
        leadSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%202.mp3?alt=media&token=8e781598-3981-461c-a75a-a5c37f945b82")
    } else if (choice === "4") {
        leadSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Lead%202.mp3?alt=media&token=8e781598-3981-461c-a75a-a5c37f945b82")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkrhythm1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%201.mp3?alt=media&token=35105a74-2f5c-4759-8092-26eec99a29f8")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%201.mp3?alt=media&token=35105a74-2f5c-4759-8092-26eec99a29f8")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%201.mp3?alt=media&token=35105a74-2f5c-4759-8092-26eec99a29f8")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%201.mp3?alt=media&token=35105a74-2f5c-4759-8092-26eec99a29f8")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkrhythm2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%202.mp3?alt=media&token=a7183bfc-5d15-4552-8a11-f9d6fc3a6233")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%202.mp3?alt=media&token=a7183bfc-5d15-4552-8a11-f9d6fc3a6233")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%202.mp3?alt=media&token=a7183bfc-5d15-4552-8a11-f9d6fc3a6233")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Rhythm%202.mp3?alt=media&token=a7183bfc-5d15-4552-8a11-f9d6fc3a6233")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkdrums1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%201.mp3?alt=media&token=7104cc51-f062-4811-bf20-1f3de9ec8399")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%201.mp3?alt=media&token=7104cc51-f062-4811-bf20-1f3de9ec8399")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%201.mp3?alt=media&token=7104cc51-f062-4811-bf20-1f3de9ec8399")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%201.mp3?alt=media&token=7104cc51-f062-4811-bf20-1f3de9ec8399")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkdrums2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%202.mp3?alt=media&token=d54d0c07-cffa-421f-a258-500191a63604")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%202.mp3?alt=media&token=d54d0c07-cffa-421f-a258-500191a63604")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%202.mp3?alt=media&token=d54d0c07-cffa-421f-a258-500191a63604")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Drums%202.mp3?alt=media&token=d54d0c07-cffa-421f-a258-500191a63604")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentbreakdown1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%201.mp3?alt=media&token=be603ed2-5b70-467d-8175-f2774f5448da")
        // $("#name-goes-here").html($("#djentbreakdown1").data("name"))
        // console.log($("#djentbreakdown1").data('name'))
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%201.mp3?alt=media&token=be603ed2-5b70-467d-8175-f2774f5448da")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%201.mp3?alt=media&token=be603ed2-5b70-467d-8175-f2774f5448da")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%201.mp3?alt=media&token=be603ed2-5b70-467d-8175-f2774f5448da")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentbreakdown2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%202.mp3?alt=media&token=8ea661e1-6c12-4dfe-b6e8-69a8e83a05d8")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%202.mp3?alt=media&token=8ea661e1-6c12-4dfe-b6e8-69a8e83a05d8")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%202.mp3?alt=media&token=8ea661e1-6c12-4dfe-b6e8-69a8e83a05d8")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Breakdown%202.mp3?alt=media&token=8ea661e1-6c12-4dfe-b6e8-69a8e83a05d8")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentdrums1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%201.mp3?alt=media&token=8658d320-97b7-48cc-b728-a885039ec9bf")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%201.mp3?alt=media&token=8658d320-97b7-48cc-b728-a885039ec9bf")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%201.mp3?alt=media&token=8658d320-97b7-48cc-b728-a885039ec9bf")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%201.mp3?alt=media&token=8658d320-97b7-48cc-b728-a885039ec9bf")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentdrums2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%202.mp3?alt=media&token=15081ac7-eec8-4d49-9bf7-0bc841591652")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%202.mp3?alt=media&token=15081ac7-eec8-4d49-9bf7-0bc841591652")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%202.mp3?alt=media&token=15081ac7-eec8-4d49-9bf7-0bc841591652")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Drums%202.mp3?alt=media&token=15081ac7-eec8-4d49-9bf7-0bc841591652")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#blueslead1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Lead%201.mp3?alt=media&token=5ced9c4f-8441-493a-8368-34b17567f9e3")
    } else if (choice === "2") {
        leadSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Lead%201.mp3?alt=media&token=5ced9c4f-8441-493a-8368-34b17567f9e3")
    } else if (choice === "3") {
        leadSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Lead%201.mp3?alt=media&token=5ced9c4f-8441-493a-8368-34b17567f9e3")
    } else if (choice === "4") {
        leadSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Lead%201.mp3?alt=media&token=5ced9c4f-8441-493a-8368-34b17567f9e3")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesshred").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Shred.mp3?alt=media&token=da742e03-7abc-4705-8723-cc9a361989f2")
    } else if (choice === "2") {
        leadSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Shred.mp3?alt=media&token=da742e03-7abc-4705-8723-cc9a361989f2")
    } else if (choice === "3") {
        leadSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Shred.mp3?alt=media&token=da742e03-7abc-4705-8723-cc9a361989f2")
    } else if (choice === "4") {
        leadSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Shred.mp3?alt=media&token=da742e03-7abc-4705-8723-cc9a361989f2")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesrhythm1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%201.mp3?alt=media&token=a0184980-f9e9-4097-a98f-9f1e974110c2")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%201.mp3?alt=media&token=a0184980-f9e9-4097-a98f-9f1e974110c2")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%201.mp3?alt=media&token=a0184980-f9e9-4097-a98f-9f1e974110c2")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%201.mp3?alt=media&token=a0184980-f9e9-4097-a98f-9f1e974110c2")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkbass1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%201.mp3?alt=media&token=ba3b78de-db34-4ddb-97a9-2e324fd1692b")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%201.mp3?alt=media&token=ba3b78de-db34-4ddb-97a9-2e324fd1692b")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%201.mp3?alt=media&token=ba3b78de-db34-4ddb-97a9-2e324fd1692b")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%201.mp3?alt=media&token=ba3b78de-db34-4ddb-97a9-2e324fd1692b")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#poppunkbass2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%202.mp3?alt=media&token=1c165b30-e9cd-4197-a8de-05f16ffd61bf")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%202.mp3?alt=media&token=1c165b30-e9cd-4197-a8de-05f16ffd61bf")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%202.mp3?alt=media&token=1c165b30-e9cd-4197-a8de-05f16ffd61bf")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Pop-Punk%20Bass%202.mp3?alt=media&token=1c165b30-e9cd-4197-a8de-05f16ffd61bf")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentbass1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%201.mp3?alt=media&token=19d49c1c-1570-4cab-b45e-a79da1b192de")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%201.mp3?alt=media&token=19d49c1c-1570-4cab-b45e-a79da1b192de")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%201.mp3?alt=media&token=19d49c1c-1570-4cab-b45e-a79da1b192de")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%201.mp3?alt=media&token=19d49c1c-1570-4cab-b45e-a79da1b192de")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#djentbass2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%202.mp3?alt=media&token=30b4e133-ead9-4bcb-a33d-9464b0a7bf73")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%202.mp3?alt=media&token=30b4e133-ead9-4bcb-a33d-9464b0a7bf73")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%202.mp3?alt=media&token=30b4e133-ead9-4bcb-a33d-9464b0a7bf73")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Djent%20Bass%202.mp3?alt=media&token=30b4e133-ead9-4bcb-a33d-9464b0a7bf73")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesbass1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%201.mp3?alt=media&token=d2246938-b190-48e5-a42f-75974cf5930a")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%201.mp3?alt=media&token=d2246938-b190-48e5-a42f-75974cf5930a")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%201.mp3?alt=media&token=d2246938-b190-48e5-a42f-75974cf5930a")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%201.mp3?alt=media&token=d2246938-b190-48e5-a42f-75974cf5930a")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesbass2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%202.mp3?alt=media&token=2076e30e-07b3-48a3-beac-b94b39f2c1fa")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%202.mp3?alt=media&token=2076e30e-07b3-48a3-beac-b94b39f2c1fa")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%202.mp3?alt=media&token=2076e30e-07b3-48a3-beac-b94b39f2c1fa")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Bass%202.mp3?alt=media&token=2076e30e-07b3-48a3-beac-b94b39f2c1fa")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#rockbass1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        bassSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Bass%201.mp3?alt=media&token=6cd08150-b143-4a2b-abcb-7b49bf051a9d")
    } else if (choice === "2") {
        bassSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Bass%201.mp3?alt=media&token=6cd08150-b143-4a2b-abcb-7b49bf051a9d")
    } else if (choice === "3") {
        bassSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Bass%201.mp3?alt=media&token=6cd08150-b143-4a2b-abcb-7b49bf051a9d")
    } else if (choice === "4") {
        bassSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Bass%201.mp3?alt=media&token=6cd08150-b143-4a2b-abcb-7b49bf051a9d")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesrhythm2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%202.mp3?alt=media&token=df94830c-fb64-4c61-929f-9c64a1eb33ee")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%202.mp3?alt=media&token=df94830c-fb64-4c61-929f-9c64a1eb33ee")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%202.mp3?alt=media&token=df94830c-fb64-4c61-929f-9c64a1eb33ee")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Rhythm%202.mp3?alt=media&token=df94830c-fb64-4c61-929f-9c64a1eb33ee")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesdrums1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%201.mp3?alt=media&token=e8d8a895-0efe-4286-aefe-9eab2532a092")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%201.mp3?alt=media&token=e8d8a895-0efe-4286-aefe-9eab2532a092")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%201.mp3?alt=media&token=e8d8a895-0efe-4286-aefe-9eab2532a092")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%201.mp3?alt=media&token=e8d8a895-0efe-4286-aefe-9eab2532a092")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#bluesdrums2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%202.mp3?alt=media&token=23df15bd-6188-45de-84bb-eaf148b4bacc")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%202.mp3?alt=media&token=23df15bd-6188-45de-84bb-eaf148b4bacc")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%202.mp3?alt=media&token=23df15bd-6188-45de-84bb-eaf148b4bacc")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Blues%20Drums%202.mp3?alt=media&token=23df15bd-6188-45de-84bb-eaf148b4bacc")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#rocklead1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Lead%201.mp3?alt=media&token=08cb9e92-a497-4bd4-9a26-7a91941f0be5")
    } else if (choice === "2") {
        leadSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Lead%201.mp3?alt=media&token=08cb9e92-a497-4bd4-9a26-7a91941f0be5")
    } else if (choice === "3") {
        leadSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Lead%201.mp3?alt=media&token=08cb9e92-a497-4bd4-9a26-7a91941f0be5")
    } else if (choice === "4") {
        leadSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Lead%201.mp3?alt=media&token=08cb9e92-a497-4bd4-9a26-7a91941f0be5")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#rockrhythm1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Riff%201.mp3?alt=media&token=b3a2253d-73fe-4d2d-9897-1ad54d18fafc")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Riff%201.mp3?alt=media&token=b3a2253d-73fe-4d2d-9897-1ad54d18fafc")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Riff%201.mp3?alt=media&token=b3a2253d-73fe-4d2d-9897-1ad54d18fafc")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Riff%201.mp3?alt=media&token=b3a2253d-73fe-4d2d-9897-1ad54d18fafc")
    }
     else {
        alert("Please choose a valid section!")
    }
})

$("#rockdrums1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Drums%201.mp3?alt=media&token=96bf5be7-211c-4461-a7da-386cb2ad84b9")
    } else if (choice === "2") {
        drumSurferTwo.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Drums%201.mp3?alt=media&token=96bf5be7-211c-4461-a7da-386cb2ad84b9")
    } else if (choice === "3") {
        drumSurferThree.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Drums%201.mp3?alt=media&token=96bf5be7-211c-4461-a7da-386cb2ad84b9")
    } else if (choice === "4") {
        drumSurferFour.load("https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf%20-%20Rock%20Drums%201.mp3?alt=media&token=96bf5be7-211c-4461-a7da-386cb2ad84b9")
    }
     else {
        alert("Please choose a valid section!")
    }
})

// Button Functions

// Master Play for delay fix
var timerOne, timerTwo, timerThree, timerFour
$("#play").on("click", function() {
    for (var i = 0; i < sectionOne.length; i ++) {
                sectionOne[i].playPause()
            }
    timerOne = setTimeout(function() {
      for (var i = 0; i < sectionTwo.length; i ++) {
          sectionTwo[i].play()
      }
    }, 16000)
    timerTwo = setTimeout(function () {
        for (var i = 0; i < sectionThree.length; i ++) {
            sectionThree[i].play()
        }
    }, 32000)
    timerThree = setTimeout(function () {
        for (var i = 0; i < sectionFour.length; i ++) {
            sectionFour[i].play()
        }
    }, 48000)
    timerFour = setTimeout(function() {
        alert("Nice Song!")
    }, 64000)
  });

// Master Pause
$("#pause").on("click", function() {
    clearTimeout(timerOne)
    clearTimeout(timerTwo)
    clearTimeout(timerThree)
    clearTimeout(timerFour)
    for (var i = 0; i < allSections.length; i ++) {
        allSections[i].pause()
    }
})

$("#play-section-one").on("click", function() {
    for (var i = 0; i < sectionOne.length; i ++) {
        sectionOne[i].playPause()
    }
})

$("#play-section-two").on("click", function() {
    for (var i = 0; i < sectionTwo.length; i ++) {
        sectionTwo[i].playPause()
    }
})

$("#play-section-three").on("click", function() {
    for (var i = 0; i < sectionThree.length; i ++) {
        sectionThree[i].playPause()
    }
})

$("#play-section-four").on("click", function() {
    for (var i = 0; i < sectionFour.length; i ++) {
        sectionFour[i].playPause()
    }
})

// Fast Forward
$("#fast-forward").on("click", function() {
    for (var i = 0; i < allSections.length; i ++) {
        allSections[i].skipForward()
    }
})

// Rewind
$("#rewind").on("click", function() {
    for (var i = 0; i < allSections.length; i ++) {
        allSections[i].skipBackward()
    }
})

// Set song volume
$("#master-volume").on("change", function() {
    var rangeValue = $("#master-volume").val()
    newVolume = rangeValue/100
    for (var i = 0; i < allSections.length; i ++) {
        allSections[i].setVolume(newVolume)
    }
})

// Set individual track volume
$("#lead-volume").on("change", function() {
    var rangeValue = $("#lead-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    leadSurferTwo.setVolume(newVolume)
    leadSurferThree.setVolume(newVolume)
    leadSurferFour.setVolume(newVolume)
})

$("#rhythm-volume").on("change", function() {
    var rangeValue = $("#rhythm-volume").val()
    newVolume = rangeValue/100
    rhythmSurfer.setVolume(newVolume)
    rhythmSurferTwo.setVolume(newVolume)
    rhythmSurferThree.setVolume(newVolume)
    rhythmSurferFour.setVolume(newVolume)
})

$("#bass-volume").on("change", function() {
    var rangeValue = $("#bass-volume").val()
    newVolume = rangeValue/100
    bassSurfer.setVolume(newVolume)
    bassSurferTwo.setVolume(newVolume)
    bassSurferThree.setVolume(newVolume)
    bassSurferFour.setVolume(newVolume)
})

$("#drums-volume").on("change", function() {
    var rangeValue = $("#drums-volume").val()
    newVolume = rangeValue/100
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
    drumSurferThree.setVolume(newVolume)
    drumSurferFour.setVolume(newVolume)
})

// Mute individual tracks

// Lead
$("#lead-mute-btn").on("click", function() {
    leadSurfer.toggleMute()
    leadSurferTwo.toggleMute()
    leadSurferThree.toggleMute()
    leadSurferFour.toggleMute()
    if (leadSurfer.getMute() === true) {
        $("#lead-mute-btn").css("opacity", "1") 
    } else {
        $("#lead-mute-btn").css("opacity", "0.7")
    }
})

// Rhythm
$("#rhythm-mute-btn").on("click", function() {
    rhythmSurfer.toggleMute()
    rhythmSurferTwo.toggleMute()
    rhythmSurferThree.toggleMute()
    rhythmSurferFour.toggleMute()
    if (rhythmSurfer.getMute() === true) {
        $("#rhythm-mute-btn").css("opacity", "1") 
    } else {
        $("#rhythm-mute-btn").css("opacity", "0.7")
    }
})

// Bass
$("#bass-mute-btn").on("click", function() {
    bassSurfer.toggleMute()
    bassSurferTwo.toggleMute()
    bassSurferThree.toggleMute()
    bassSurferFour.toggleMute()
    if (bassSurfer.getMute() === true) {
        $("#bass-mute-btn").css("opacity", "1") 
    } else {
        $("#bass-mute-btn").css("opacity", "0.7")
    }
})

// Drums
$("#drums-mute-btn").on("click", function() {
    drumSurfer.toggleMute()
    drumSurferTwo.toggleMute()
    drumSurferThree.toggleMute()
    drumSurferFour.toggleMute()
    if (drumSurfer.getMute() === true) {
        $("#drums-mute-btn").css("opacity", "1") 
    } else {
        $("#drums-mute-btn").css("opacity", "0.7")
    }
})

// Delete individual tracks

// Lead
$("#delete-lead").on("click", function() {
    leadSurfer.empty()
    leadSurferTwo.empty()
    leadSurferThree.empty()
    leadSurferFour.empty()
})

// Rhythm
$("#delete-rhythm").on("click", function() {
    rhythmSurfer.empty()
    rhythmSurferTwo.empty()
    rhythmSurferThree.empty()
    rhythmSurferFour.empty()
})

// Bass
$("#delete-bass").on("click", function() {
    bassSurfer.empty()
    bassSurferTwo.empty()
    bassSurferThree.empty()
    bassSurferFour.empty()
})

// Drums
$("#delete-drums").on("click", function() {
    drumSurfer.empty()
    drumSurferTwo.empty()
    drumSurferThree.empty()
    drumSurferFour.empty()
})

// Choose wave color
$("#choose-color").on("click", function() {
    var waveColor = $("#wave-color").val()
    console.log(waveColor)
    for (var i = 0; i < allSections.length; i ++) {
        allSections[i].setWaveColor(waveColor)
    }
})