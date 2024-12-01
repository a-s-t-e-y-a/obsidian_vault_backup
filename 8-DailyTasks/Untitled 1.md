---
tags:
  - 📅/daily
created: <% tp.file.creation_date("YYYY-MM-DD") %>
modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
---
<%*
let today = tp.date.now("YYYY-MM-DD")
let yesterday = tp.date.yesterday("YYYY-MM-DD")
-%>

# Tasks for <% today %>

## 📋 Today's Tasks
- [ ] Task 1 ⏱️ `button-start-1` `button-stop-1` Time: `time-1`
- [ ] Task 2 ⏱️ `button-start-2` `button-stop-2` Time: `time-2`
- [ ] Task 3 ⏱️ `button-start-3` `button-stop-3` Time: `time-3`

<script>
// Time tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    let timers = {};
    
    // Create buttons for each task
    for (let i = 1; i <= 3; i++) {
        const startBtn = document.createElement('button');
        startBtn.innerText = '▶️ Start';
        startBtn.className = 'timer-btn start';
        document.querySelector(`[data-button-start-${i}]`).replaceWith(startBtn);

        const stopBtn = document.createElement('button');
        stopBtn.innerText = '⏹️ Stop';
        stopBtn.className = 'timer-btn stop';
        stopBtn.style.display = 'none';
        document.querySelector(`[data-button-stop-${i}]`).replaceWith(stopBtn);

        const timeSpan = document.createElement('span');
        timeSpan.innerText = '00:00:00';
        document.querySelector(`[data-time-${i}]`).replaceWith(timeSpan);

        startBtn.onclick = function() {
            timers[i] = {
                start: Date.now(),
                interval: setInterval(() => {
                    const elapsed = Math.floor((Date.now() - timers[i].start) / 1000);
                    const hours = Math.floor(elapsed / 3600);
                    const minutes = Math.floor((elapsed % 3600) / 60);
                    const seconds = elapsed % 60;
                    timeSpan.innerText = 
                        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }, 1000)
            };
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline';
        };

        stopBtn.onclick = function() {
            if (timers[i]) {
                clearInterval(timers[i].interval);
                timers[i] = null;
            }
            startBtn.style.display = 'inline';
            stopBtn.style.display = 'none';
        };
    }
});
</script>

<style>
.timer-btn {
    padding: 2px 8px;
    margin: 0 4px;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.timer-btn.start {
    background-color: #4CAF50;
    color: white;
}
.timer-btn.stop {
    background-color: #f44336;
    color: white;
}
</style>

## ⏳ Pending Tasks