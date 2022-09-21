# Ableton Torch

The purpose of this project is to sync phone flashlights in a concert via Ableton. This requires the use of the IAC driver on Mac, and the [Loop MIDI](https://www.tobias-erichsen.de/software/loopmidi.html) virtual MIDI controller on Windows.

## Setup
```
yarn install
```

## Audio MIDI Setup
Open Audio MIDI Setup on Mac and click Window > MIDI Studio. Double click IAC Driver and tick the `Device is online` checkbox to turn on the IAC Driver virtual MIDI.

![Screen Shot 2022-09-20 at 11 57 23 PM](https://user-images.githubusercontent.com/5927440/191435621-c0944cd1-9d14-4beb-a7bc-4fa917a53549.png)


## Ableton setup
Go to Ableton > Preferences > Link/Tempo/MIDI and make sure `Out: IAC Driver (Bus x)` has Track turned on. In your MIDI layer, change input to `No Input` and set your output to `IAC Driver (Bus x)`.

![Screen-Shot-2022-09-20-at-11 57 57-PM](https://user-images.githubusercontent.com/5927440/191436261-3064946e-6c17-4133-b43e-69e0d4f4d55c.jpg)

![Screen Shot 2022-09-21 at 12 01 02 AM](https://user-images.githubusercontent.com/5927440/191436327-e6099750-c060-48c4-8e35-5d3e65d8c438.png)


## Run
```
yarn start
```
