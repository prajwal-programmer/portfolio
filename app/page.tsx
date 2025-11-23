// pages/index.tsx
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-[#0c0f17] text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">MY PORTFOLIO</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-3">Hello, I'm Prajwal Biradar</h2>
          <p className="text-lg mb-5">"A Computer Science Engineering student driven by passion and curiosity."</p>
          <a href="#projects" className="px-5 py-2 border rounded-lg">VIEW PROJECTS</a>
        </div>
        <div className="mt-6 md:mt-0 md:ml-20">
          <Image src="/profile.jpg" alt="Profile" width={300} height={300} className="rounded-full" />
        </div>
      </section>

      <section id="about" className="p-10 max-w-4xl mx-auto bg-[#10131c] rounded-xl mt-10 text-center">
        <h3 className="text-2xl font-bold mb-3">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          An enthusiastic Computer Science Engineering student with a deep curiosity for how technology works and a strong passion for building meaningful solutions...
        </p>
      </section>

      <section id="skills" className="p-10 max-w-5xl mx-auto mt-10">
        <h3 className="text-3xl text-center font-bold mb-6">Skills</h3>
        <div className="grid md:grid-cols-4 gap-6 bg-[#10131c] p-6 rounded-xl">
          <div>
            <h4 className="font-bold mb-2">Programming:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>C</li><li>C++</li><li>Python</li><li>PHP</li><li>MySQL</li><li>AJAX</li><li>jQuery</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Web Dev:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Responsive Design</li><li>Accessibility</li><li>DBMS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Soft Skills:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Communication</li><li>Team Leadership</li><li>Problem Solving</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Interests:</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Web Development</li><li>Cloud Computing</li><li>Blockchain</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="p-10 max-w-6xl mx-auto mt-10">
        <h3 className="text-3xl text-center font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#10131c] p-6 rounded-xl">
            <h4 className="font-bold mb-2">Image Editor</h4>
            <p className="text-gray-300 mb-3">A browser-based image editor built with HTML, CSS, and JavaScript...</p>
            <a href="#" className="text-blue-400">Link: Image_Editor</a>
          </div>

          <div className="bg-[#10131c] p-6 rounded-xl">
            <h4 className="font-bold mb-2">Personal AI Assistant</h4>
            <Image src="/22f54d72-8b76-42d9-9ff2-ee9345a1737f.png" alt="AI" width={500} height={300} className="rounded" />
            <a href="#" className="text-blue-400">Link: Personal_AI_Assistant</a>
          </div>

          <div className="bg-[#10131c] p-6 rounded-xl">
            <h4 className="font-bold mb-2">Vending Machine</h4>
            <p className="text-gray-300 mb-3">A smart vending machine system using microcontrollers...</p>
            <a href="https://snackspot.page.gd" className="text-blue-400">Link</a>
          </div>
        </div>
      </section>

      <section id="education" className="p-10 max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-[#10131c] p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">Education</h3>
          <p>2020 - SSLC Sacred Heart ... | 89.23%</p>
          <p>2022 - PUC Excel Academy ... | 83%</p>
          <p>2022 - Sairam College of Engineering ... | [ONGOING]</p>
        </div>

        <div id="contact" className="bg-[#10131c] p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <p>Email: prajwaldbiradar@gmail.com</p>
          <p>Location: ANEKAL, BANGALORE - 562106</p>
        </div>
      </section>

      <footer className="text-center p-5 mt-10 text-gray-500">© 2025 Prajwal D Biradar. All rights reserved.</footer>
    </main>
  );
}
