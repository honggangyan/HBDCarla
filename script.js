const container = document.querySelector('.fireworks');
const pictureContainer = document.querySelector('.picture'); // 选择容器
const image = document.querySelector('.image'); // 修改为选择图片
const crown = document.querySelector('.crown'); // 选择皇冠图片
const svgElements = document.querySelectorAll('.eight svg'); // 选择所有SVG元素
const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.2,
    acceleration: 1.02,
    friction: 0.97,
    gravity: 1.5,
    particles: 100,
    traceLength: 5,
    traceSpeed: 8,
    explosion: 6,
    intensity: 80,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 360
    },
    delay: {
        min: 20,
        max: 100
    },
    rocketsPoint: {
        min: 45,
        max: 55
    },
    lineWidth: {
        explosion: {
            min: 1,
            max: 3
        },
        trace: {
            min: 1,
            max: 2
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
        max: 1
    }
});

// Start animations using GSAP
const balloons = document.querySelectorAll('.baloons img');
gsap.set(balloons, { y: 1400, opacity: 0.9 }); // Set initial position and opacity

// Step 1: Animate balloons
gsap.to(balloons, {
    opacity: 1,
    y: -2000,
    stagger: 0.2,
    duration: 3,
    ease: "power1.inOut",
    onComplete: () => {
        // After balloons, start fireworks
        startFireworks();
    }
});
// Function to animate greetings
function animateGreetings() {
    const greeting1 = document.querySelector('.greeting-1');
    const greeting2 = document.querySelector('.greeting-2');
    const greeting3 = document.querySelector('.greeting-3');
    const greeting4 = document.querySelector('.greeting-4');
    const greeting5 = document.querySelector('.greeting-5');
    const greeting6 = document.querySelector('.greeting-6');
    const greeting7 = document.querySelector('.greeting-7');

    // Set initial state for all greetings
    gsap.set([greeting1, greeting2, greeting3, greeting4, greeting5, greeting6, greeting7], { opacity: 0, y: 50 });

    // Create a sequence of animations
    const sequence = gsap.timeline();

    // Greeting 1
    sequence.to(greeting1, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting1, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 1.8
    })

    // Greeting 2
    .to(greeting2, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting2, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 1.8
    })

    // Greeting 3
    .to(greeting3, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting3, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 3
    })

    // Greeting 4
    .to(greeting4, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting4, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 3
    })

    // Greeting 5
    .to(greeting5, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting5, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 3
    })

    // Greeting 6
    .to(greeting6, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting6, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 3
    })
    // Add Greeting 7 (final greeting)
    .to(greeting7, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting7, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 3,
        onComplete: () => {
            // Add a delay before showing picture and crown
            setTimeout(() => {
                showPictureAndCrown();
            }, 1200); // Wait 2 seconds after the last greeting fades out
        }
    });
}

// Call the animateGreetings function when the page loads
window.addEventListener('load', () => {
    animateGreetings();
});

// Step 2: Fireworks animation
function startFireworks() {
    fireworks.start(); // Start fireworks

    // Set timeout to fade out fireworks and move to the next step
    setTimeout(() => {
        fadeOutFireworks();
    }, 3000); // Fireworks duration
}

// Step 3: Fade out fireworks and prepare for the picture
function fadeOutFireworks() {
    container.style.opacity = '0'; // Fade out fireworks
    setTimeout(() => {
        fireworks.stop(); // Stop fireworks
        container.style.display = 'none'; // Hide fireworks container // Move to the next step
    }, 2000); // Wait 1 second to complete fade out
}

// Step 4: Show picture and crown
function showPictureAndCrown() {
    pictureContainer.style.display = 'block';
    pictureContainer.style.opacity = '1';
    crown.style.display = 'block';

    // 延迟1秒后开始greeting8动画
    setTimeout(() => {
        const greeting8 = document.querySelector('.greeting-8');
        if (greeting8) {
            // 设置初始可见性
            greeting8.style.opacity = '1';
            // 调用字母下落动画
            animateGreeting8();
            
            // 动画完成后开始SVG动画
            // 计算总动画时间：字母数 * 每个字母延迟(0.1s) + 动画持续时间(0.5s)
            const text = greeting8.querySelector('h1').textContent;
            const totalDuration = (text.length * 0.1) + 0.5;
            
            setTimeout(() => {
                animateSVGElements();
            }, totalDuration * 1000); // 转换为毫秒
        }
    }, 1000);
}

function animateGreeting8() {
    const greeting8 = document.querySelector('.greeting-8 h1');
    const text = "Happy Birthday!!!";
    greeting8.textContent = '';
    
    [...text].forEach((letter, index) => {
        const span = document.createElement('span');
        if (letter === ' ') {
            span.innerHTML = '&nbsp;';
            span.style.opacity = '1';
            span.style.color = '#000000';
        } else {
            span.textContent = letter;
            span.style.color = '#000000';
            
            // 监听动画结束事件
            span.addEventListener('animationend', function() {
                // 当下落动画结束后，添加颜色变换动画
                this.style.animation = 'colorChange 0.5s forwards';
            });
            
            // 初始只添加下落动画
            span.style.animation = `dropLetter 0.5s ${index * 0.1}s forwards`;
        }
        greeting8.appendChild(span);
    });
}

// Step 5: Animate SVG elements
function animateSVGElements() {
    gsap.set(svgElements, { visibility: "hidden", opacity: 1 }); // Set initial state

    gsap.to(svgElements, {
        visibility: "visible",
        scale: 80,            // Scale the elements to 100
        opacity: 0,            // Final opacity should be 0
        stagger: 0.3,          // Stagger the appearance of SVG elements
        duration: 2,         // Duration of the animation
        repeat: 5,             // Repeat 5 times
        repeatDelay: 0.5,      // Delay between repeats
        onUpdate: function() {
            // Calculate the current scale value
            const currentScale = this.target.style.transform.split('(')[1].split(')')[0].replace('scale(', '');
            const scaleValue = parseFloat(currentScale);
            // Adjust opacity as scale increases (opacity decreases as scale increases)
            const newOpacity = Math.max(1 - (scaleValue / 80), 0); // Opacity decreases from 1 to 0 as scale goes from 0 to 100

            // Apply the updated opacity to the element
            gsap.set(this.target, { opacity: newOpacity });
        }
    });
}

