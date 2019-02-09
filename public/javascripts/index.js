// Create Tracks
var leadSurfer = WaveSurfer.create({
    container: '#lead-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurfer = WaveSurfer.create({
    container: '#rhythm-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurfer = WaveSurfer.create({
    container: '#drum-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var leadSurferTwo = WaveSurfer.create({
    container: '#lead-form2',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurferTwo = WaveSurfer.create({
    container: '#rhythm-form2',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurferTwo = WaveSurfer.create({
    container: '#drum-form2',
    waveColor: 'blue',
    progressColor: 'green',
});

var leadSurferThree = WaveSurfer.create({
    container: '#lead-form3',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurferThree = WaveSurfer.create({
    container: '#rhythm-form3',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurferThree = WaveSurfer.create({
    container: '#drum-form3',
    waveColor: 'blue',
    progressColor: 'green',
});

var leadSurferFour = WaveSurfer.create({
    container: '#lead-form4',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurferFour = WaveSurfer.create({
    container: '#rhythm-form4',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurferFour = WaveSurfer.create({
    container: '#drum-form4',
    waveColor: 'blue',
    progressColor: 'green',
});

// Load Tracks
$("#poppunklead1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    } else if (choice === "2") {
        leadSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    } else if (choice === "3") {
        leadSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    } else if (choice === "4") {
        leadSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    }
     else {
        alert("Please make a valid section!")
    }
})

$("#poppunklead2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    } else if (choice === "2") {
        leadSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    } else if (choice === "3") {
        leadSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    } else if (choice === "4") {
        leadSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    }
     else {
        alert("Please make a valid section!")
    }
})

$("#poppunkrhythm1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    }
     else {
        alert("Please make a valid section!")
    }
})

$("#poppunkrhythm2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    } else if (choice === "3") {
        rhythmSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    } else if (choice === "4") {
        rhythmSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    }
     else {
        alert("Please make a valid section!")
    }
})

$("#poppunkdrums1").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    } else if (choice === "2") {
        drumSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    } else if (choice === "3") {
        drumSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    } else if (choice === "4") {
        drumSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    }
     else {
        alert("Please make a valid section!")
    }
})

$("#poppunkdrums2").on("click", function() {
    var choice = prompt("Please choose section 1 2 3 or 4")
    if (choice === "1") {
        drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    } else if (choice === "2") {
        drumSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    } else if (choice === "3") {
        drumSurferThree.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    } else if (choice === "4") {
        drumSurferFour.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    }
     else {
        alert("Please make a valid section!")
    }
})

// Button Functions

// Play
$("#play").on("click", function() {
    leadSurfer.playPause()
    rhythmSurfer.playPause()
    drumSurfer.playPause()
})

$("#play-section-one").on("click", function() {
    leadSurfer.playPause()
    rhythmSurfer.playPause()
    drumSurfer.playPause()
})

$("#play-section-two").on("click", function() {
    leadSurferTwo.playPause()
    rhythmSurferTwo.playPause()
    drumSurferTwo.playPause()
})

$("#play-section-three").on("click", function() {
    leadSurferThree.playPause()
    rhythmSurferThree.playPause()
    drumSurferThree.playPause()
})

$("#play-section-four").on("click", function() {
    leadSurferFour.playPause()
    rhythmSurferFour.playPause()
    drumSurferFour.playPause()
})

// Auto Play/Loop Through Sections
// Lead
leadSurfer.on("finish", function() {
    leadSurferTwo.play()
})

leadSurferTwo.on("finish", function() {
    leadSurferThree.play()
})

leadSurferThree.on("finish", function() {
    leadSurferFour.play()
})

leadSurferFour.on("finish", function() {
    leadSurfer.play()
})

// Rhythm
rhythmSurfer.on("finish", function() {
    rhythmSurferTwo.play()
})

rhythmSurferTwo.on("finish", function() {
    rhythmSurferThree.play()
})

rhythmSurferThree.on("finish", function() {
    rhythmSurferFour.play()
})

rhythmSurferFour.on("finish", function() {
    rhythmSurfer.play()
})

// Drums
drumSurfer.on("finish", function() {
    drumSurferTwo.play()
})

drumSurferTwo.on("finish", function() {
    drumSurferThree.play()
})

drumSurferThree.on("finish", function() {
    drumSurferFour.play()
})

drumSurferFour.on("finish", function() {
    drumSurfer.play()
})

// Fast Forward
$("#fast-forward").on("click", function() {
    leadSurfer.skipForward()
    leadSurferTwo.skipForward()
    leadSurferThree.skipForward()
    leadSurferFour.skipForward()
    rhythmSurfer.skipForward()
    rhythmSurferTwo.skipForward()
    rhythmSurferThree.skipForward()
    rhythmSurferFour.skipForward()
    drumSurfer.skipForward()
    drumSurferTwo.skipForward()
    drumSurferThree.skipForward()
    drumSurferFour.skipForward()
})

// Rewind
$("#rewind").on("click", function() {
    leadSurfer.skipBackward()
    leadSurferTwo.skipBackward()
    leadSurferThree.skipBackward()
    leadSurferFour.skipBackward()
    rhythmSurfer.skipBackward()
    rhythmSurferTwo.skipBackward()
    rhythmSurferThree.skipBackward()
    rhythmSurferFour.skipBackward()
    drumSurfer.skipBackward()
    drumSurferTwo.skipBackward()
    drumSurferThree.skipBackward()
    drumSurferFour.skipBackward()
})

// Set song volume
$("#master-volume").on("change", function() {
    var rangeValue = $("#master-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    leadSurferTwo.setVolume(newVolume)
    leadSurferThree.setVolume(newVolume)
    leadSurferFour.setVolume(newVolume)
    rhythmSurfer.setVolume(newVolume)
    rhythmSurferTwo.setVolume(newVolume)
    rhythmSurferThree.setVolume(newVolume)
    rhythmSurferFour.setVolume(newVolume)
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
    drumSurferThree.setVolume(newVolume)
    drumSurferFour.setVolume(newVolume)
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

$("#drums-volume").on("change", function() {
    var rangeValue = $("#drums-volume").val()
    newVolume = rangeValue/100
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
    drumSurferThree.setVolume(newVolume)
    drumSurferFour.setVolume(newVolume)
})

// Mute individual tracks
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
$("#delete-lead").on("click", function() {
    leadSurfer.empty()
    leadSurferTwo.empty()
    leadSurferThree.empty()
    leadSurferFour.empty()
})

$("#delete-rhythm").on("click", function() {
    rhythmSurfer.empty()
    rhythmSurferTwo.empty()
    rhythmSurferThree.empty()
    rhythmSurferFour.empty()
})

$("#delete-drums").on("click", function() {
    drumSurfer.empty()
    drumSurferTwo.empty()
    drumSurferThree.empty()
    drumSurferFour.empty()
})

// Choose wave color
$("#choose-color").on("click", function() {
    // if (e.keyCode == 13) {
    //     event.preventDefault()
    // } else {
    var waveColor = $("#wave-color").val()
    console.log(waveColor)
    leadSurfer.setWaveColor(waveColor)
    leadSurferTwo.setWaveColor(waveColor)
    leadSurferThree.setWaveColor(waveColor)
    leadSurferFour.setWaveColor(waveColor)
    rhythmSurfer.setWaveColor(waveColor)
    rhythmSurferTwo.setWaveColor(waveColor)
    rhythmSurferThree.setWaveColor(waveColor)
    rhythmSurferFour.setWaveColor(waveColor)
    drumSurfer.setWaveColor(waveColor)
    drumSurferTwo.setWaveColor(waveColor)
    drumSurferThree.setWaveColor(waveColor)
    drumSurferFour.setWaveColor(waveColor)
    // }
})