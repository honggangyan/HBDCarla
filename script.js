const container = document.querySelector('.fireworks');
const pictureContainer = document.querySelector('.picture'); // 选择容器
const image = document.querySelector('.image'); // 修改为选择图片
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

// Function to animate greetings
function animateGreetings() {
    // Step 1: Animate balloons
    gsap.to(balloons, {
        opacity: 1,
        y: -2000,
        stagger: 0.2,
        duration: 3,
        ease: "power1.inOut",
    });

    const greeting1 = document.querySelector('.greeting-1');
    const greeting2 = document.querySelector('.greeting-2');
    const greeting3 = document.querySelector('.greeting-3');
    const greeting4 = document.querySelector('.greeting-4');
    const greeting5 = document.querySelector('.greeting-5');
    const greeting6 = document.querySelector('.greeting-6');
    const greeting7 = document.querySelector('.greeting-7');
    const greeting8 = document.querySelector('.greeting-8');
    const greeting9 = document.querySelector('.greeting-9');
    const greeting10 = document.querySelector('.greeting-10');
    const greeting11 = document.querySelector('.greeting-11');

    // Set initial state for all greetings
    gsap.set([greeting1, greeting2, greeting3, greeting4, greeting5, greeting6, greeting7, greeting8, greeting9, greeting10, greeting11], { opacity: 0, y: 50 });

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
    .add(() => {
        // 在 greeting-3 动画进行时启动烟花
        startFireworks();
    })
    .to(greeting3, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 4
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
        delay: 3,
        onComplete: () => {
            // 在 greeting-5 结束后直接开始 greeting-6 动画
            animateGreeting6().then(() => {
                // 当animateGreeting6完成后，继续执行序列
                sequence.resume();
            });
        }
    })
    .addPause() // 暂停序列，等待animateGreeting6完成

    // Greeting 7
    .to(greeting7, {
        opacity: 1,
        duration: 1  // 先让整个容器显示
    })
    .to('.greeting-7 h1', {
        opacity: 1,
        y: 0,
        duration: 1.5
    })
    .to('.greeting-7 .second-line', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5
    })
    .to('.greeting-7 .emoji', {
        rotation: 90,
        duration: 0.5
    })
    .to('.greeting-7 .emoji', {
        scale: 3, // 放大3倍
        duration: 0.4,
        ease: "power1.inOut", // 添加缓动效果
        delay: 0.5, // 在emoji反转后延迟执行
        yoyo: false, // 不反向播放
        repeat: 0 // 不重复
    })
    .to('.greeting-7 .emoji', {
        x: 10, // 向右移动10px
        duration: 0.2,
        ease: "power1.inOut",
        yoyo: true, // 反向播放
        repeat: 3 // 重复3次
    })
    .to('.greeting-7 .mouth', {
        rotation: 180, // 反转180度
        duration: 0.5,
        delay: 0.5 // 在emoji反转后延迟执行
    })
    .to(greeting7, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 1  // 显示2秒后消失（原来是3秒）
    })

    // Greeting 8
    .to(greeting8, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting8, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 3
    })

    // Greeting 9
    .to(greeting9, {
        opacity: 1,
        y: 0,
        duration: 1
    })
    .to(greeting9, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        delay: 3
    })

    // Greeting 10
    .to(greeting10, {
        opacity: 1,
        y: 0,
        duration: 1.5
    })
    .to(greeting10, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5,
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
    Swal.fire({
        title: 'play music?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        const music = document.getElementById('background-music');
        if (result.isConfirmed) {
            music.play(); // 播放音乐
        }
        
        // 等待1秒后再开始动画
        setTimeout(() => {
            animateGreetings(); // 询问后再开始动画
        }, 1000); // 等待1秒
    });
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

    // 延迟1秒后开始greeting11动画
    setTimeout(() => {
        const greeting11 = document.querySelector('.greeting-11');
        if (greeting11) {
            // 设置初始可见性
            greeting11.style.opacity = '1';
            // 调用字母下落动画
            animateGreeting11();
            
            // 动画完成后开始SVG动画
            // 计算总动画时间：字母数 * 每个字母延迟(0.1s) + 动画持续时间(0.5s)
            const text = greeting11.querySelector('h1').textContent;
            const totalDuration = (text.length * 0.1) + 0.5;
            
            setTimeout(() => {
                animateSVGElements();
            }, totalDuration * 1000); // 转换为毫秒
        }
    }, 1000);
}

function animateGreeting11() {
    const greeting11 = document.querySelector('.greeting-11 h1');
    const text = "Happy Birthday!!!";
    greeting11.textContent = '';
    
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
        greeting11.appendChild(span);
    });
}

// Step 5: Animate SVG elements
function animateSVGElements() {
    gsap.set(svgElements, { visibility: "hidden", opacity: 1 }); // Set initial state

    gsap.to(svgElements, {
        visibility: "visible",
        scale: 120,            // Scale the elements to 100
        opacity: 0,            // Final opacity should be 0
        stagger: 0.5,          // Stagger the appearance of SVG elements
        duration: 2.5,         // Duration of the animation
        repeat: 5,             // Repeat 5 times
        repeatDelay: 0.5,      // Delay between repeats
        onUpdate: function() {
            // Calculate the current scale value
            const currentScale = this.target.style.transform.split('(')[1].split(')')[0].replace('scale(', '');
            const scaleValue = parseFloat(currentScale);
            // Adjust opacity as scale increases (opacity decreases as scale increases)
            const newOpacity = Math.max(1 - (scaleValue / 120), 0); // Opacity decreases from 1 to 0 as scale goes from 0 to 100

            // Apply the updated opacity to the element
            gsap.set(this.target, { opacity: newOpacity });
        }
    });
}

function animateGreeting6() {
    const greeting6 = document.querySelector('.greeting-6');
    const h1 = greeting6.querySelector('h1');
    const originalText = h1.childNodes[0].textContent.trim();
    const bibleVerse = greeting6.querySelector('.bible-verse');
    const bibleText = bibleVerse.textContent;
    
    // 清空 h1 内容
    h1.innerHTML = '';
    
    return new Promise((resolve) => {
        // 将文本按单词分割
        const mainWords = originalText.split(/(\s+)/);
        const bibleWords = bibleText.split(/(\s+)/);
        let delay = 0;
        
        // 处理主文本
        mainWords.forEach(word => {
            if (word.trim() === '') {
                // 处理空格
                const spaceSpan = document.createElement('span');
                spaceSpan.innerHTML = '&nbsp;';
                h1.appendChild(spaceSpan);
            } else {
                // 为每个单词创建一个容器
                const wordContainer = document.createElement('span');
                wordContainer.style.display = 'inline-block'; // 确保单词不会断开
                wordContainer.style.whiteSpace = 'nowrap'; // 防止单内部断行
                
                // 为单词中的每个字母创建动画
                [...word].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.opacity = '0';
                    span.style.animation = `fadeInLetter 0.02s ${delay}s forwards`;
                    wordContainer.appendChild(span);
                    delay += 0.05;
                });
                
                h1.appendChild(wordContainer);
            }
        });
        
        // 添加换行
        const br = document.createElement('br');
        h1.appendChild(br);
        
        // 创建 bible-verse 容器
        const bibleContainer = document.createElement('span');
        bibleContainer.className = 'bible-verse';
        
        // 处理经文文本
        bibleWords.forEach((word, wordIndex) => {
            if (word.trim() === '') {
                // 处理空格
                const spaceSpan = document.createElement('span');
                spaceSpan.innerHTML = '&nbsp;';
                bibleContainer.appendChild(spaceSpan);
            } else {
                // 为每个单词创建一个容器
                const wordContainer = document.createElement('span');
                wordContainer.style.display = 'inline-block';
                wordContainer.style.whiteSpace = 'nowrap';
                
                // 为单词中的每个字母创建动画
                [...word].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.opacity = '0';
                    span.style.animation = `fadeInLetter 0.02s ${delay}s forwards`;
                    
                    // 为后一个字符添加结束事件
                    if (wordIndex === bibleWords.length - 1 && index === word.length - 1) {
                        span.addEventListener('animationend', () => {
                            setTimeout(() => {
                                greeting6.style.animation = 'fadeOut 1s forwards';
                                setTimeout(resolve, 1000);
                            }, 3000);
                        });
                    }
                    
                    wordContainer.appendChild(span);
                    delay += 0.05;
                });
                
                bibleContainer.appendChild(wordContainer);
            }
        });
        
        h1.appendChild(bibleContainer);
        greeting6.style.opacity = '1';
    });
}

