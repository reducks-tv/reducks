s.waitForBoot({
	~buffers = SoundFile.collectIntoBuffers(thisProcess.nowExecutingPath.dirname +/+ "samples/*");
	~reverbBusses = [Bus.audio(s, 2), Bus.audio(s, 2), Bus.audio(s, 2)];

	~reverbBusChanceSpread = 8;

	[[\clap, 0], [\closed_hat, 1], [\snare, 4], [\open_hat, 3], [\kick, 2] ].do { arg item;
		SynthDef(item[0], {
			arg bus=0, rate=1, amp=1, pan=0.5;
			var sig;
			amp = amp * (1 - 0.05.rand);
			sig = PlayBuf.ar(2, ~buffers[item[1]].bufnum, rate, \t_tr.kr(1, 0), doneAction: Done.freeSelf);
			Out.ar(bus, [pan*sig*amp, (1-pan)*sig*amp]);
		}).add;
	};


	[[\bigverb, 0.8], [\midverb, 0.65], [\smallverb, 0.4]].do { arg item;
		SynthDef(item[0], {
			arg in, out=0;
			var sig;
			sig = In.ar(in, 2);
			sig = FreeVerb.ar(sig, 0.5, item[1], 0.1)!2;
			Out.ar(out, sig);
		}).add;
	};


	// waits for the above to complete
	s.sync;

	[\bigverb, \midverb, \smallverb].do { arg item, i;
		Synth.new(item, [\in, ~reverbBusses[i]]);
	};

	(
		~openHatVerbSequence = (0 ! (~reverbBusChanceSpread.rand + ~reverbBusChanceSpread) ++ ~reverbBusses).scramble;


		Pdef(\openhatpattern, Pbind(
			\instrument, \open_hat,
			\t_tr, Pseq([1], inf),
			\dur, Pseq([1.2, 1.4], inf),
			\amp, Pseq(0.9 ! 4 ++ [0.5, 0.9, 0], inf),
			\pan, Pseq([0.25, 0.25, 0.75, 0.25, 0.75, 0.75, 0.75, 0.25, 0.75, 0], inf),
			\bus, Pseq((0 ! (~reverbBusChanceSpread.rand + ~reverbBusChanceSpread) ++ ~reverbBusses).scramble, inf)
		)).play;

		Pdef(\kickpattern, Pbind(
			\instrument, \kick,
			\t_tr, Pseq([1], inf),
			\dur, Pseq([0.4, 0.4, 0.4, 0.4, 0.2, 0.4, 0.2], inf),
			\amp, Pseq(1 ! 5 ++ [0], inf),
			\pan, Pseq([0.5], inf)
		)).play;

		Pdef(\closedhatpattern, Pbind(
			\instrument, \closed_hat,
			\t_tr, Pseq([1], inf),
			\dur, Pseq(0.2 ! 8 ++ [0.4], inf),
			\amp, Pseq([1, 0.75, 1, 0.75, 1, 0.75, 0], inf),
			\pan, Pseq([0.25, 0.25, 0.75, 0.75], inf),
			\bus, Pseq((0 ! (~reverbBusChanceSpread.rand + ~reverbBusChanceSpread) ++ ~reverbBusses).scramble, inf)
		)).play;

		Pdef(\snarepattern, Pbind(
			\instrument, \snare,
			\t_tr, Pseq([1], inf),
			\dur, Pseq([1.6, 1.2], inf),
			\amp, Pseq(1 ! 10 ++ [0], inf),
			\pan, Pseq([0.5], inf),
			\bus, Pseq((0 ! (~reverbBusChanceSpread.rand + ~reverbBusChanceSpread) ++ ~reverbBusses).scramble, inf)
		)).play;

		Pdef(\clappattern, Pbind(
			\instrument, \clap,
			\t_tr, Pseq([1], inf),
			\dur, Pseq([2.4, 0.2], inf),
			\amp, Pseq([1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0], inf),
			\pan, Pseq([0.25, 0.75, 0.75, 0.25], inf),
			\bus, Pseq((0 ! (~reverbBusChanceSpread.rand + ~reverbBusChanceSpread) ++ ~reverbBusses).scramble, inf)
		)).play;

	)
});

