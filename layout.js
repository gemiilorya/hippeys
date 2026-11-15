class MainLayout extends HTMLElement {
    connectedCallback() {
        const pageContent = this.innerHTML;

        this.innerHTML = `
            <header>
                <nav id="navbar" class="top-0 left-0 z-50 w-full bg-transparent transition-colors duration-300 ease-in-out flex flex-col items-center justify-center gap-3 mb-3">
                    <div class="top-bar flex text-lg text-center mt-5 gap-5">
                        <h4>Call 717-336-6577</h4>
                        <h4>Contact</h4>
                    </div>
                    <div class="bot-bar flex items-center justify-center gap-5">
                        <a href="/" class="logo text-2xl font-bold">
                            LOGO
                        </a>
                        <div class="menu flex text-center gap-5 text-lg">
                            <a href="#our-story">
                                <h3 class="">Our Story</h3>
                            </a>
                            <a href="#how-we-make-it">
                                <h3>How We Make It</h3>
                            </a>
                            <a href="#our-meats">
                                <h3>Our Meats</h3>
                            </a>
                            <a href="#recipes">
                                <h3>Recipes</h3>
                            </a>
                            <a href="#for-retailers">
                                <h3>For Retailers</h3>
                            </a>
                        </div>
                        <a href="" class="btn bg-primary text-white py-2 px-4 rounded">
                            Where to Buy
                        </a>
                    </div>
                </nav>
            </header>
            <main class="flex-1">
            ${pageContent}
            </main>
            <footer class="bg-primary text-white flex flex-col items-center justify-center gap-5">
                <div class="flex gap-20 mt-3">
                    <div class="col-1 flex flex-col">
                        <div class="logo">
                            <img src="" alt="">
                        </div>
                        <p class="text-xl">
                            "Smoked over realy hickory <br/>
                            on Railroad Street in Denver, <br/>
                            PA since 1969." <br/>
                        </p>
                    </div>
                    <div class="col-2 flex flex-col">
                        <div class="flex gap-2">
                            <h3 class="text-lg font-bold">Visit:</h3>
                            <a href="https://share.google/5UGIHRBDjPsfpMIkR">
                                <p class="text-lg">
                                    350 Railroad St, Denver, PA 17517
                                </p>
                            </a>
                        </div>
                        <p class="text-lg">717-336-6577</p>
                        <a href="mailto:matt@hippeysmeats.com">
                                <p class="text-lg">matt@hippeysmeats.com</p>
                        </a>
                    </div>
                    <div class="col-3 flex flex-col">
                        <h3 class="text-lg font-bold">Explore:</h3>
                        <a href="">
                            <p class="text-lg">Where to Buy</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Factory Sale</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Recipes</p>
                        </a>
                        <a href="">
                            <p class="text-lg">FAQs</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Blog</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Reviews</p>
                        </a>
                        <a href="">
                            <p class="text-lg">For Retailers</p>
                        </a>
                    </div>
                    <div class="col-4 flex flex-col">
                        <h3 class="text-lg font-bold">Areas we serve:</h3>
                        <a href="">
                            <p class="text-lg">Denver</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Pittsburgh</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Philadelphia</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Baltimore</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Washington, D.C.</p>
                        </a>
                        <a href="">
                            <p class="text-lg">New York</p>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-10">
                    <div class="bot-line text-center flex gap-5">
                        <a href="">
                            <p class="text-lg">© 2026 Denver Meat Co.</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Privacy Policy</p>
                        </a> 
                        <a href="">
                            <p class="text-lg">Cookie Policy</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Facebook</p>
                        </a>
                        <a href="">
                            <p class="text-lg">Instagram</p>
                        </a>
                        <a href="">
                            <p class="text-lg">#ILoveHippeys</p>
                        </a>
                    </div>
                    <div class="foot-sign-up flex gap-10 items-center">
                        <div class="flex gap-3">
                            <p class="text-lg">Hear about the next factory sale first:</p>
                            <input type="text" placeholder="Enter your email">
                        </div>
                        <button class="bg-accent text-text text-lg px-4 py-2">
                            Notify Me
                        </button>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('main-layout', MainLayout);