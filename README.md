# Ableton Torch

The purpose of this project is to sync phone flashlights in a concert via Ableton. This requires the use of the IAC driver on Mac, and the [Loop MIDI](https://www.tobias-erichsen.de/software/loopmidi.html) virtual MIDI controller on Windows.

## Setup
```
yarn install
```

## Audio MIDI Setup
Open Audio MIDI Setup on Mac and click Window > MIDI Studio. Double click IAC Driver and tick the `Device is online` checkbox to turn on the IAC Driver virtual MIDI.

## Ableton setup
Go to Ableton > Preferences > Link/Tempo/MIDI and make sure `Out: IAC Driver (Bus x)` has Track turned on. In your MIDI layer, change input to `No Input` and set your output to `IAC Driver (Bus x)`.

## Run
```
yarn start
```