<template>
  <div>
    <h1>
      {{ Math.floor(timer.time / 60) }}:{{
        timer.time % 60 < 10 ? '0' + (timer.time % 60) : timer.time % 60
      }}
    </h1>
    <button v-if="timer.stage == 'start'" @click="timer.startTimer">Start</button>
    <button v-if="timer.stage == 'running'" @click="timer.pauseTimer">Pause</button>
    <button v-if="timer.stage == 'paused'" @click="timer.unpauseTimer">Unpause</button>
    <button v-if="timer.stage == 'paused'" @click="timer.stopTimer">Stop</button>
  </div>
  <div class="timer"></div>
</template>

<script setup>
import { useTimerStore } from '@/stores/timer'
const timer = useTimerStore()
</script>

<style>
$d: 20em;
$t: 20;
$c: #8a9b0f #940a3d;

@property --t {
	syntax: '<number>';
	initial-value: #{$t};
	inherits: true
}

/* won't be needed once Chrome supports round() */
@property --s {
	syntax: '<integer>';
	initial-value: 0;
	inherits: true
}

.countdown {

	--s: calc(var(--t)/1);
	display: grid;
	margin: 1em auto;
	width: $d; height: $d;
	animation: t $t*1s linear infinite;

	&::after {
		grid-column: 1;
		grid-row: 1;
		place-self: center;
		font: #{.25*$d}/ 2 ubuntu mono, consolas, monaco, monospace;
		counter-reset: s var(--s);
		content: '0:' counter(s, decimal-leading-zero)
	}
}

@keyframes t { to { --t: 0 } }

svg {
	grid-column: 1;
	grid-row: 1
}

[r] {
	fill: none;
	stroke: silver;

	+ [r] {
		--k: calc(var(--t)/#{$t});
		transform: rotate(-90deg);
		stroke-linecap: round;
		stroke: color-mix(in hsl shorter hue, #{nth($c, 1)} calc(var(--k)*100%), #{nth($c, 2)});
		stroke-dasharray: var(--k) 1
	}
}
</style>
