class Timer {
    constructor() {
        this.timers = {};
    }

    startTimer(taskId) {
        if (!this.timers[taskId]) {
            this.timers[taskId] = {
                start: Date.now(),
                display: document.getElementById(`time-${taskId}`)
            };
            
            this.timers[taskId].interval = setInterval(() => {
                this.updateDisplay(taskId);
            }, 1000);
        }
    }

    stopTimer(taskId) {
        if (this.timers[taskId]) {
            clearInterval(this.timers[taskId].interval);
            this.timers[taskId] = null;
        }
    }

    updateDisplay(taskId) {
        const elapsed = Math.floor((Date.now() - this.timers[taskId].start) / 1000);
        const hours = Math.floor(elapsed / 3600);
        const minutes = Math.floor((elapsed % 3600) / 60);
        const seconds = elapsed % 60;
        this.timers[taskId].display.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}
app.customJS.Timer = new Timer();