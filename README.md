In order to view the pages locally on Chrome (mac), you need to start Chrome with a special parameter:

    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files &

or install Chromium to have a separate Chrome instance, and run

    /Applications/Chromium.app/Contents/MacOS/Chromium --allow-file-access-from-files &


On a PC's Chrome, create a shortcut for Chrome on your desktop and append this to the end of the path:

    --user-data-dir="C:\ProgramData\Chrome" --disable-web-security


