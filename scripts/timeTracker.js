class TimeTracker {
    constructor() {
        this.activeTask = null;
        this.startTime = null;
    }

    startTask(taskElement) {
        // Get the current time
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit'
        });

        // Find the start time placeholder and replace it
        const startTimePlaceholder = taskElement.querySelector('⏰ [[_:_]]');
        if (startTimePlaceholder) {
            startTimePlaceholder.replaceWith(`⏰ [[${timeString}]]`);
        }

        this.activeTask = taskElement;
        this.startTime = now;
    }

    endTask() {
        if (!this.activeTask || !this.startTime) return;

        // Get the end time
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit'
        });

        // Find the end time placeholder and replace it
        const endTimePlaceholder = this.activeTask.querySelector('⏱️ [[_:_]]');
        if (endTimePlaceholder) {
            endTimePlaceholder.replaceWith(`⏱️ [[${timeString}]]`);
        }

        // Calculate duration
        const duration = (now - this.startTime) / (1000 * 60); // in minutes
        console.log(`Task duration: ${duration} minutes`);

        // Reset tracking
        this.activeTask = null;
        this.startTime = null;
    }

    // Helper function to format time
    formatTime(date) {
        return date.toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit'
        });
    }
}

// Create commands for QuickAdd or Buttons
module.exports = {
    startTracking: async (params) => {
        const tracker = new TimeTracker();
        const activeFile = app.workspace.getActiveFile();
        if (!activeFile) return;

        // Get the current line
        const editor = app.workspace.activeEditor.editor;
        const cursor = editor.getCursor();
        const line = editor.getLine(cursor.line);

        tracker.startTask(line);
    },

    endTracking: async (params) => {
        const tracker = new TimeTracker();
        tracker.endTask();
    },

    insertCurrentTime: async (params) => {
        const activeFile = app.workspace.getActiveFile();
        if (!activeFile) return;

        const editor = app.workspace.activeEditor.editor;
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: '2-digit', 
            minute: '2-digit'
        });

        editor.replaceSelection(`[[${timeString}]]`);
    }
}; 