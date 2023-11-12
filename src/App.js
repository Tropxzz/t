import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const text = textRef.current;

    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item"))
      .forEach((item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        }
    });

    if (header) {
      const cards = document.getElementById("cards");
      if (cards) {
        cards.onmousemove = e => {
          for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        }
      }
    }
  }, []);

  return (
    <div className="">
      <main className="py-20">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div id="menu-background-pattern"></div>
          <div id="menu-background-image"></div>
          <div className="px-4 py-15 sm:px-0 text-center">
            <h1 ref={headerRef} className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
              Welcome, to
              <span className="magic">
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span ref={headerRef} className="magic-text text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">‎ Noluse</span>
              </span>
              .
            </h1>

            <div id="cards">
              <div class="card">
                <div class="card-content">
                  <div class="card-image">
                    <i class="dollar-icon"></i>
                  </div>
                  <div class="card-info-wrapper">
                    <div class="card-info">
                      <i class="dollar-head"></i>
                      <div class="card-info-title">
                        <h3>Pricing</h3>
                        <h4>Get access to our Byfron bypassed executor.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow-xl">
                <div class="card-content">
                  <div class="card-image">
                    <i class="book-icon"></i>
                  </div>
                  <div class="card-info-wrapper">
                    <div class="card-info">
                      <i class="book-head"></i>
                      <div class="card-info-title">
                        <h3>Documentation</h3>
                        <h4>Read the Noluse documentation to easily use our functions.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow-xl">
                <div class="card-content">
                  <div class="card-image">
                    <i class="person-icon"></i>
                  </div>
                  <div class="card-info-wrapper">
                    <div class="card-info">
                      <i class="person-head"></i>
                      <div class="card-info-title">
                        <h3>Credits</h3>
                        <h4>See a list of the developers for Noluse.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;