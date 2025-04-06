const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            
            // Animate theme icon change
            themeIcon.style.transform = 'scale(0)';
            setTimeout(() => {
                themeIcon.textContent = isLightMode ? '🌙' : '☀️';
                themeText.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
                themeIcon.style.transform = 'scale(1)';
                
                // Change button gradient
                themeToggle.style.background = `linear-gradient(135deg, ${isLightMode ? '#888' : '#ffde59'}, ${isLightMode ? '#ff9900' : '#888'})`;
                
                // Create sparkle effect
                createSparkles(themeToggle, 10);
            }, 150);
            
            // Add a temporary class for transition effect
            document.body.classList.add('theme-transition');
            setTimeout(() => {
                document.body.classList.remove('theme-transition');
            }, 500);
        });

        // Create sparkle effect
        function createSparkles(element, count) {
            const rect = element.getBoundingClientRect();
            for (let i = 0; i < count; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = `${Math.random() * rect.width}px`;
                sparkle.style.top = `${Math.random() * rect.height}px`;
                sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
                element.appendChild(sparkle);
                
                // Remove after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        }

        // Create stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 100;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.width = `${Math.random() * 3 + 1}px`;
                star.style.height = star.style.width;
                star.style.animationDelay = `${Math.random() * 2}s`;
                starsContainer.appendChild(star);
            }
        }

        // Create magic particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.width = `${Math.random() * 10 + 5}px`;
                particle.style.height = particle.style.width;
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particle.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particlesContainer.appendChild(particle);
            }
        }

        // Create floating crystals
        function createCrystals() {
            const crystalsContainer = document.getElementById('crystals');
            const crystalCount = 15;
            
            for (let i = 0; i < crystalCount; i++) {
                const crystal = document.createElement('div');
                crystal.className = 'crystal';
                crystal.style.left = `${Math.random() * 100}%`;
                crystal.style.top = `${Math.random() * 100 + 100}%`;
                crystal.style.width = `${Math.random() * 15 + 5}px`;
                crystal.style.height = crystal.style.width;
                crystal.style.animationDelay = `${Math.random() * 5}s`;
                crystalsContainer.appendChild(crystal);
            }
        }

        // Digital Clock Functionality
        function updateClock() {
            const now = new Date();
            
            // Time components
            let hours = now.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12;
            hours = hours ? hours : 12;
            
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            // Date components
            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const dayName = dayNames[now.getDay()];
            const month = monthNames[now.getMonth()];
            const dayNum = now.getDate();
            const year = now.getFullYear();
            
            // Update the DOM
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
            document.getElementById('ampm').textContent = ampm;
            
            document.getElementById('dayname').textContent = dayName;
            document.getElementById('month').textContent = month;
            document.getElementById('daynum').textContent = dayNum;
            document.getElementById('year').textContent = year;

            // Check alarm
            checkAlarm(now);
        }

        // Timer Functionality
        let timerInterval;
        let timerSecondsLeft = 0;

        function startTimer() {
            const hours = parseInt(document.getElementById('timer-hours').value) || 0;
            const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
            const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
            
            timerSecondsLeft = hours * 3600 + minutes * 60 + seconds;
            
            if (timerSecondsLeft <= 0) return;
            
            updateTimerDisplay();
            
            document.getElementById('timer-start').disabled = true;
            document.getElementById('timer-pause').disabled = false;
            
            // Create magic effect on start
            createSparkles(document.getElementById('timer-start'), 5);
            
            timerInterval = setInterval(() => {
                timerSecondsLeft--;
                updateTimerDisplay();
                
                if (timerSecondsLeft <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById('timer-start').disabled = false;
                    document.getElementById('timer-pause').disabled = true;
                    
                    // Create a magical alert effect
                    const alertDiv = document.createElement('div');
                    alertDiv.innerHTML = `
                        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                            background: rgba(0,0,0,0.7); display: flex; justify-content: center; 
                            align-items: center; z-index: 1000;">
                            <div style="background: var(--feature-bg); padding: 30px; border-radius: 15px; 
                                text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5); 
                                border: 2px solid var(--accent-color); position: relative; overflow: hidden;">
                                <h2 style="color: var(--accent-color); margin-bottom: 20px;">Timer Finished!</h2>
                                <p>Your time has come!</p>
                                <button id="dismissTimer" style="margin-top: 20px; padding: 10px 20px; 
                                    background: var(--accent-color); color: white; border: none; 
                                    border-radius: 5px; cursor: pointer;">Dismiss</button>
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                                    pointer-events: none; z-index: -1;">
                                    ${Array(10).fill().map(() => 
                                        `<div style="position: absolute; width: 5px; height: 5px; 
                                        background: white; border-radius: 50%; 
                                        left: ${Math.random() * 100}%; 
                                        top: ${Math.random() * 100}%;
                                        animation: sparkle-fade 1s forwards;"></div>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(alertDiv);
                    
                    document.getElementById('dismissTimer').addEventListener('click', () => {
                        document.body.removeChild(alertDiv);
                    });
                    
                    // Create a magical sound effect (visual only)
                    const soundEffect = document.createElement('div');
                    soundEffect.style.position = 'fixed';
                    soundEffect.style.top = '50%';
                    soundEffect.style.left = '50%';
                    soundEffect.style.transform = 'translate(-50%, -50%)';
                    soundEffect.style.width = '200px';
                    soundEffect.style.height = '200px';
                    soundEffect.style.borderRadius = '50%';
                    soundEffect.style.border = '5px solid var(--accent-color)';
                    soundEffect.style.opacity = '0';
                    soundEffect.style.animation = 'ripple 2s forwards';
                    document.body.appendChild(soundEffect);
                    
                    setTimeout(() => {
                        document.body.removeChild(soundEffect);
                    }, 2000);
                }
            }, 1000);
        }

        function pauseTimer() {
            clearInterval(timerInterval);
            document.getElementById('timer-start').disabled = false;
            document.getElementById('timer-pause').disabled = true;
            
            // Create magic effect on pause
            createSparkles(document.getElementById('timer-pause'), 5);
        }

        function resetTimer() {
            clearInterval(timerInterval);
            timerSecondsLeft = 0;
            updateTimerDisplay();
            document.getElementById('timer-hours').value = 0;
            document.getElementById('timer-minutes').value = 0;
            document.getElementById('timer-seconds').value = 0;
            document.getElementById('timer-start').disabled = false;
            document.getElementById('timer-pause').disabled = true;
            
            // Create magic effect on reset
            createSparkles(document.getElementById('timer-reset'), 5);
        }

        function updateTimerDisplay() {
            const hours = Math.floor(timerSecondsLeft / 3600);
            const minutes = Math.floor((timerSecondsLeft % 3600) / 60);
            const seconds = timerSecondsLeft % 60;
            
            document.getElementById('timer-display').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Alarm Functionality
        let alarmTime = null;
        let alarmActive = false;

        function setAlarm() {
            const alarmTimeInput = document.getElementById('alarm-time').value;
            if (!alarmTimeInput) return;
            
            const [hours, minutes] = alarmTimeInput.split(':').map(Number);
            alarmTime = { hours, minutes };
            
            document.getElementById('alarm-display').textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            document.getElementById('alarm-display').classList.add('active-alarm');
            
            document.getElementById('alarm-set').disabled = true;
            document.getElementById('alarm-clear').disabled = false;
            alarmActive = true;
            
            // Create magic effect on set
            createSparkles(document.getElementById('alarm-set'), 5);
        }

        function clearAlarm() {
            alarmTime = null;
            document.getElementById('alarm-display').textContent = 'No Alarm Set';
            document.getElementById('alarm-display').classList.remove('active-alarm');
            document.getElementById('alarm-set').disabled = false;
            document.getElementById('alarm-clear').disabled = true;
            alarmActive = false;
            
            // Create magic effect on clear
            createSparkles(document.getElementById('alarm-clear'), 5);
        }

        function checkAlarm(now) {
            if (!alarmActive || !alarmTime) return;
            
            const currentHours = now.getHours();
            const currentMinutes = now.getMinutes();
            
            if (currentHours === alarmTime.hours && currentMinutes === alarmTime.minutes && now.getSeconds() === 0) {
                // Create a magical alarm effect
                const alarmDiv = document.createElement('div');
                alarmDiv.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                        background: linear-gradient(135deg, rgba(255,0,0,0.3), rgba(255,215,0,0.3)); 
                        display: flex; justify-content: center; align-items: center; z-index: 999;">
                        <div style="background: var(--feature-bg); padding: 30px; border-radius: 15px; 
                            text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 2px solid var(--accent-color);
                            position: relative; overflow: hidden;">
                            <h2 style="color: var(--accent-color); margin-bottom: 20px;">ALARM!</h2>
                            <p>It's time!</p>
                            <button id="dismissAlarm" style="margin-top: 20px; padding: 10px 20px; 
                                background: var(--accent-color); color: white; border: none; 
                                border-radius: 5px; cursor: pointer;">Dismiss</button>
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                                pointer-events: none; z-index: -1; opacity: 0.7;">
                                ${Array(20).fill().map(() => 
                                    `<div style="position: absolute; width: 10px; height: 10px; 
                                    background: var(--magic-particle); border-radius: 50%; 
                                    left: ${Math.random() * 100}%; 
                                    top: ${Math.random() * 100}%;
                                    animation: float ${Math.random() * 5 + 3}s infinite linear ${Math.random() * 2}s;"></div>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(alarmDiv);
                
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'fixed';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.borderRadius = '50%';
                ripple.style.border = '2px solid var(--accent-color)';
                ripple.style.opacity = '0.7';
                ripple.style.animation = 'ripple 2s forwards';
                document.body.appendChild(ripple);
                
                setTimeout(() => {
                    document.body.removeChild(ripple);
                }, 2000);
                
                document.getElementById('dismissAlarm').addEventListener('click', () => {
                    document.body.removeChild(alarmDiv);
                    clearAlarm();
                });
            }
        }

        // Event Listeners
        document.getElementById('timer-start').addEventListener('click', startTimer);
        document.getElementById('timer-pause').addEventListener('click', pauseTimer);
        document.getElementById('timer-reset').addEventListener('click', resetTimer);
        document.getElementById('alarm-set').addEventListener('click', setAlarm);
        document.getElementById('alarm-clear').addEventListener('click', clearAlarm);

        // Initialize
        updateClock();
        setInterval(updateClock, 1000);
        createStars();
        createParticles();
        createCrystals();

        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -20px); }
                to { opacity: 1; transform: translate(-50%, 0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translate(-50%, 0); }
                to { opacity: 0; transform: translate(-50%, -20px); }
            }
            @keyframes ripple {
                0% { width: 0; height: 0; opacity: 0.7; }
                100% { width: 300px; height: 300px; opacity: 0; }
            }
            @keyframes sparkle-fade {
                0% { transform: scale(0); opacity: 0; }
                100% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);