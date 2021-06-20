import colors from './colors.js';

 function ColorSwitch (array) {
    this.id = 0;

    const refs = {
        startBtn: document.querySelector('button[data-action="start"]'),
        stopBtn: document.querySelector('button[data-action="stop"]'),
    };

    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.start = () => {
        if (this.id) {
            return;
        };
        this.id = setInterval(() => {
            const randomColor = randomIntegerFromInterval(0, array.length - 1);
            document.body.style.backgroundColor = `${array[randomColor]}`;
        }, 1000);
        refs.startBtn.setAttribute('disabled', true);
    };

    this.stop = () => {
        clearInterval(this.id);
        this.id = 0;
        refs.startBtn.removeAttribute('disabled');
    };

    refs.startBtn.addEventListener('click', this.start);
    refs.stopBtn.addEventListener('click', this.stop);
};

const colorSWitcher = new ColorSwitch(colors);