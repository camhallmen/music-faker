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

// Load Tracks
$("#poppunklead1").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    } else if (choice === "2") {
        leadSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
    } else {
        alert("Please select a valid section!")
    }
})

$("#poppunklead2").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    } else if (choice === "2") {
        leadSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
    } else {
        alert("Please select a valid section!")
    }
})

$("#poppunkrhythm1").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
    } else {
        alert("Please select a valid section!")
    }
})

$("#poppunkrhythm2").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    } else if (choice === "2") {
        rhythmSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
    } else {
        alert("Please select a valid section!")
    }
})


$("#poppunkdrums1").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    } else if (choice === "2") {
        drumSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
    } else {
        alert("Please select a valid section!")
    }
})

$("#poppunkdrums2").on("click", function() {
    var choice = prompt("Section 1 or 2?")
    if (choice === "1") {
        drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    } else if (choice === "2") {
        drumSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
    } else {
        alert("Please select a valid section!")
    }
})

// Button Functions

// Play
$("#play").on("click", function() {
    leadSurfer.playPause()
    rhythmSurfer.playPause()
    drumSurfer.playPause()

})

// Play Section Two
leadSurfer.on("finish", function() {
    leadSurferTwo.play()
})

rhythmSurfer.on("finish", function() {
    rhythmSurferTwo.play()
})

drumSurfer.on("finish", function() {
    drumSurferTwo.play()
})

// Loop
leadSurferTwo.on("finish", function() {
    leadSurfer.play()
})

rhythmSurferTwo.on("finish", function() {
    rhythmSurfer.play()
})

drumSurferTwo.on("finish", function() {
    drumSurfer.play()
})

// Fast Forward
$("#fast-forward").on("click", function() {
    leadSurfer.skipForward()
    leadSurferTwo.skipForward()
    rhythmSurfer.skipForward()
    rhythmSurferTwo.skipForward()
    drumSurfer.skipForward()
    drumSurferTwo.skipForward()
})

// Rewind
$("#rewind").on("click", function() {
    leadSurfer.skipBackward()
    leadSurferTwo.skipBackward()
    rhythmSurfer.skipBackward()
    rhythmSurferTwo.skipBackward()
    drumSurfer.skipBackward()
    drumSurferTwo.skipBackward()
})

// Set song volume
$("#master-volume").on("change", function() {
    var rangeValue = $("#master-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    leadSurferTwo.setVolume(newVolume)
    rhythmSurfer.setVolume(newVolume)
    rhythmSurferTwo.setVolume(newVolume)
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
})

// Set individual track volume
$("#lead-volume").on("change", function() {
    var rangeValue = $("#lead-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    leadSurferTwo.setVolume(newVolume)
})

$("#rhythm-volume").on("change", function() {
    var rangeValue = $("#rhythm-volume").val()
    newVolume = rangeValue/100
    rhythmSurfer.setVolume(newVolume)
    rhythmSurferTwo.setVolume(newVolume)
})

$("#drums-volume").on("change", function() {
    var rangeValue = $("#drums-volume").val()
    newVolume = rangeValue/100
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
})

// Mute individual tracks
$("#lead-mute-btn").on("click", function() {
    leadSurfer.toggleMute()
    leadSurferTwo.toggleMute()
    if (leadSurfer.getMute() === true) {
        $("#lead-mute-btn").css("opacity", "1") 
    } else {
        $("#lead-mute-btn").css("opacity", "0.7")
    }
})

$("#rhythm-mute-btn").on("click", function() {
    rhythmSurfer.toggleMute()
    rhythmSurferTwo.toggleMute()
    if (rhythmSurfer.getMute() === true) {
        $("#rhythm-mute-btn").css("opacity", "1") 
    } else {
        $("#rhythm-mute-btn").css("opacity", "0.7")
    }
})

$("#drums-mute-btn").on("click", function() {
    drumSurfer.toggleMute()
    drumSurferTwo.toggleMute()
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
})

$("#delete-rhythm").on("click", function() {
    rhythmSurfer.empty()
    rhythmSurferTwo.empty()
})

$("#delete-drums").on("click", function() {
    drumSurfer.empty()
    drumSurferTwo.empty()
})

// Choose wave color
$("#choose-color").on("click", function() {
    var waveColor = $("#wave-color").val()
    console.log(waveColor)
    leadSurfer.setWaveColor(waveColor)
    leadSurferTwo.setWaveColor(waveColor)
    rhythmSurfer.setWaveColor(waveColor)
    rhythmSurferTwo.setWaveColor(waveColor)
    drumSurfer.setWaveColor(waveColor)
    drumSurferTwo.setWaveColor(waveColor)
})