s.waitForBoot({
    var score, first;
    var last = 0;
    var totalSeconds = 0;
    score = thisProcess.argv;
    score.do({
        arg line, i;
        var timestamp, user, action, file;
        var elapsedSeconds = 0;
        var secondsSinceLast = 0;
        
        // after a second of inactivity, move on; default gource option
        var autoSkipSeconds = 1;
        // consider one day of commits to be one second; default gource option
        var gourceSecondsPerDay = 1;
        var secondsPerDay = gourceSecondsPerDay * 86400;
        // destructure from the split line
        # timestamp, user, action, file = line.split($|);
        timestamp = timestamp.asInteger;
        if(first.isNil, {
                first = timestamp; 
            }, 
            {
                secondsSinceLast = autoSkipSeconds.min((timestamp - last) / secondsPerDay);
                totalSeconds = secondsSinceLast + totalSeconds;
            }
        );
        last = timestamp;
        postf("event %: delay: %, user: %, action: %, path: %\n", i, secondsSinceLast, user, action, file);        
    });
    "total seconds: ".post;
    totalSeconds.postln;
});