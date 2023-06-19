function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classiyCanvas);
    synth = window.speechSynthesis;

}

function preload() {
    classifier = ml5.imageClassifier('Doodle Net');


}

function draw() {
    strokeWeight(7);
    stroke(0);
    if (mouseisPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);

    }
}

function classiyCanvas() {
    classifier.classify(canvas, gotresult);

}

function gotresult(error, results) {
    if (error) {
        console.error(error);


    } else {
        console.log(results);
        document.getElementById('label').innerHTML = 'Label:' + results[0].label;
        document.getElementById('Confidence').innerHTML = 'Confidence:' + Math.round(results[0].confidence * 100) + '%';
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }

}


function clearCanvas() {
    background("white");

}