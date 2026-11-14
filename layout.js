class MainLayout extends HTMLElement {
    connectedCallback() {
        const pageContent = this.innerHTML;

        this.innerHTML = `
            <header>
                <nav class="navbar flex flex-col items-center justify-center gap-3">
                    <div class="top-bar flex text-center mt-5">
                        <h4 class="text-xl">Call 717-336-6577</h4>
                        <h4 class="text-xl">Contact</h4>
                    </div>
                    <div class="bot-bar">
                        <div class="logo">
                            <img src="" alt="">
                        </div>
                        <div class="menu flex text-center gap-5 text-2xl">
                            <h3 class="">Our Story</h3>
                            <h3>How We Make It</h3>
                            <h3>Our Meats</h3>
                            <h3>Recipes</h3>
                            <h3>For Retailers</h3>
                        </div>
                    </div>
                </nav>
            </header>
            <main class="flex-1">
            ${pageContent}
            </main>
            <footer class="flex flex-col items-center justify-center gap-5">
                <div class="flex gap-10">
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
                        <p class="text-lg">Where to Buy</p>
                        <p class="text-lg">Factory Sale</p>
                        <p class="text-lg">Recipes</p>
                        <p class="text-lg">FAQs</p>
                        <p class="text-lg">Blog</p>
                        <p class="text-lg">Reviews</p>
                        <p class="text-lg">For Retailers</p>
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
                        <p class="text-lg">© 2026 Denver Meat Co.</p>
                        <p class="text-lg">Privacy Policy</p>
                        <p class="text-lg">Cookie Policy</p>
                        <p class="text-lg">Facebook</p>
                        <p class="text-lg">Instagram</p>
                        <p class="text-lg">#ILoveHippeys</p>
                    </div>
                    <div class="foot-sign-up flex gap-10 items-center">
                        <div class="flex gap-3">
                            <p class="text-lg">Hear about the next factory sale first:</p>
                            <input type="text" placeholder="Enter your email">
                        </div>
                        <button class="bg-blue-900 text-white text-lg px-4 py-2">
                            Notify Me
                        </button>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('main-layout', MainLayout);