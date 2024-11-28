// Immediately Invoked Function Expression

(function chai(params) {
    console.log(`chai`);          
    
}) () ;

//named IIFE

(  (name) => {
    console.log(`aurcode ${name}` );
    
}) (`vaibhav`)