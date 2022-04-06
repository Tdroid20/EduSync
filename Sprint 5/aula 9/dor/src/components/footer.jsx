import React from "react";
import './css/footer.css';

export const footer = () => {
    return (
        <div>
        <footer>
            <main>

            </main>
        <section class="container">
            <p id="copyright">&copy; Todos os Direitos reservados</p>
        </section>
        <div class="social">
           {/* <i class="fab fa-whatsapp"></i>
            <i class="fab fa-facebook"></i>  */}
            <a href="https://api.whatsapp.com/send?phone=5521998656604&text=Vindo%20do%20site%20bolos%20da%20julia"><img src="../../src/assets/whats 1.png" alt="whatsapp" class="fontAwesome" /></a>
            <img src="../../src/assets/face 1.png" alt="fa-facebook" class="fontAwesome" />
            <a href="https://instagram.com/tdroid2.0/"><img src="../../src/assets/instag 1.png" alt="instagram" class="fontAwesome" /></a>
        </div>
    </footer>
    </div>
    )
}

export default footer;