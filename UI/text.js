$(document).ready(function () {
        $('.introduction').textillate({
            loop:true,
            
            in:{
                effect: "fadeInUp",
                sequence:true,
            },
            out:{
                effect: "fadeOutUp",
                reverse:true,
            },
        })    
});