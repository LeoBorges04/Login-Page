
       
        const imagem = document.getElementById("img1");

        
        const links = document.querySelectorAll("a");

        
        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                
                imagem.style.transform = "rotateZ(360deg)"; 
            });

            link.addEventListener("mouseleave", () => {

                
                imagem.style.transform = "rotateZ(0deg)";
            });
        });