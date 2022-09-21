const express = require("express");
const app = express();
const WebMidiSingleton = require("webmidi");
const WebMidi = WebMidiSingleton.WebMidi;

const port = process.env.PORT || 3000;

app.listen(port);

WebMidi.enable()
  .then(onEnabled)
  .catch((err) => console.log(err));

function onEnabled() {

  // Log all devices
  if (WebMidi.inputs.length < 1) {
    console.log("No device detected.");
  } else {
    WebMidi.inputs.forEach((device, index) => {
      console.log(`${index}: ${device.name}`);
    });
  }

  const mySynth = WebMidi.getInputByName("IAC");
  mySynth.channels[1].addListener("noteon", (e) => {
    console.log(`${e.note.name}`);
  });
}

console.log("server started at", port);
