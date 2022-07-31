gsap.from('.text',{
    x:-300,
    opacity:0,
    duration: 2,
    delay: 1.5
})
t1= gsap.timeline()

t1.from('.image',{
//  rotationZ: 90, rotationY: 90, rotationX: 90, 
        x:300,
        opacity:0,
        duration: 2,
        delay: 1.5
        
}).from('.toga',{
    //  rotationZ: 90, rotationY: 90, rotationX: 90, 
            y:-300,
            opacity:0,
            duration: 2,
          
            
    })
    var typed = new Typed('.type', {
        strings: ["Graphic Designer.", "Web Developer."],
        typeSpeed: 60,
        backSpeed:60,
        loop: true,
        startDelay: 5,
    
      });
      
