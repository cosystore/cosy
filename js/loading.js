var loader = document.getElementById("home-preloader");
            window.addEventListener("load", function(){
                setTimeout(() => {
                    loader.style.display = "none";
                }, 2000);
            });
