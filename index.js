(function(){
  WebMidi
    .enable()
    .then(onEnabled)
    .catch(err => alert(err));

  // Function triggered when WEBMIDI.js is ready
  function onEnabled() {

    if (WebMidi.inputs.length < 1) {
      document.body.innerHTML+= "No device detected.";
    } else {
      WebMidi.inputs.forEach((device, index) => {
        document.body.innerHTML+= `${index}: ${device.name} <br>`;
      });
    }

    WebMidi.inputs.forEach((device, index) => {
      if (device.name.indexOf('IAC') > -1) {
        const mySynth = WebMidi.inputs[index];
        // const mySynth = WebMidi.getInputByName("TYPE NAME HERE!")
        
        mySynth.channels[1].addListener("noteon", e => {
          document.body.innerHTML+= `${e.note.name} <br>`;
        });
      }
    })
    
  }
})()