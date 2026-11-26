class MainLayout extends HTMLElement {
    connectedCallback() {
        const pageContent = this.innerHTML;

        this.innerHTML = `
            <header>
                <nav id="navbar" class="top-0 left-0 z-50 w-full bg-cream transition-colors duration-300 ease-in-out flex flex-col items-center justify-center gap-3 py-3">
                    <div class="border-y border-navy w-full max-w-275 flex font-secondary text-xl items-center justify-center text-center mt-5 gap-5 py-3">
                        <h4>Call 717-336-6577</h4>
                        <h4 class="hover:text-rust uppercase">Contact</h4>
                    </div>
                    <a href="/" class="w-65 max-w-[70vw]">
                        <img src="https://denvermeats.com/wp-content/uploads/2026/11/denver_meat_co_hippeys_transparent.png" alt="Denver Meat Co. — Hippey's">
                    </a>
                    <div class="border-y border-navy w-full max-w-275 flex items-center justify-center text-xl font-secondary uppercase gap-5 py-3">
                        <div class="menu flex text-center gap-5">
                            <a href="#our-story" class="hover:text-rust">
                                <h3>Our Story</h3>
                            </a>
                            <a href="#how-we-make-it" class="hover:text-rust">
                                <h3>How We Make It</h3>
                            </a>
                            <a href="#our-meats" class="hover:text-rust">
                                <h3>Our Meats</h3>
                            </a>
                            <a href="#recipes" class="hover:text-rust">
                                <h3>Recipes</h3>
                            </a>
                            <a href="#for-retailers" class="hover:text-rust">
                                <h3>For Retailers</h3>
                            </a>
                        </div>
                        <a href="" class="btn bg-navy text-white py-2 px-4">
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