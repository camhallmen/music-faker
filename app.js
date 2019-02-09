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

// var leadSurferTwo = WaveSurfer.create({
//     container: '#lead-form2',
//     waveColor: 'blue',
//     progressColor: 'green',
// });

// var rhythmSurferTwo = WaveSurfer.create({
//     container: '#rhythm-form2',
//     waveColor: 'blue',
//     progressColor: 'green',
// });

// var drumSurferTwo = WaveSurfer.create({
//     container: '#drum-form2',
//     waveColor: 'blue',
//     progressColor: 'green',
// });

$("#poppunklead1").on("click", function() {
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
})

$("#poppunklead2").on("click", function() {
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
})

$("#poppunkrhythm1").on("click", function() {
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
})

$("#poppunkrhythm2").on("click", function() {
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
})

$("#poppunkdrums1").on("click", function() {
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
})

$("#poppunkdrums2").on("click", function() {
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
})

// Button Functions

// Play
$("#play").on("click", function() {
    leadSurfer.playPause()
    rhythmSurfer.playPause()
    drumSurfer.playPause()
})

// Fast Forward
$("#fast-forward").on("click", function() {
    leadSurfer.skipForward()
    rhythmSurfer.skipForward()
    drumSurfer.skipForward()
})

// Rewind
$("#rewind").on("click", function() {
    leadSurfer.skipBackward()
    rhythmSurfer.skipBackward()
    drumSurfer.skipBackward()
})

// Set track volume
$("#master-volume").on("change", function() {
    var rangeValue = $("#master-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    // leadSurferTwo.setVolume(newVolume)
    rhythmSurfer.setVolume(newVolume)
    // rhythmSurferTwo.setVolume(newVolume)
    drumSurfer.setVolume(newVolume)
    // drumSurferTwo.setVolume(newVolume)
})

// Set individual track volume
$("#lead-volume").on("change", function() {
    var rangeValue = $("#lead-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    // leadSurferTwo.setVolume(newVolume)
})

$("#rhythm-volume").on("change", function() {
    var rangeValue = $("#rhythm-volume").val()
    newVolume = rangeValue/100
    rhythmSurfer.setVolume(newVolume)
    // leadSurferTwo.setVolume(newVolume)
})

$("#drums-volume").on("change", function() {
    var rangeValue = $("#drums-volume").val()
    newVolume = rangeValue/100
    drumSurfer.setVolume(newVolume)
    // leadSurferTwo.setVolume(newVolume)
})

// Choose wave color
$("#choose-color").on("click", function() {
    var waveColor = $("#wave-color").val()
    console.log(waveColor)
    leadSurfer.setWaveColor(waveColor)
    rhythmSurfer.setWaveColor(waveColor)
    drumSurfer.setWaveColor(waveColor)
})