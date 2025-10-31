// Import React and your CSS file
import React, { useState } from 'react';
import '../style/contact.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
const [state, handleSubmit] = useForm("meoprnge");
  if (state.succeeded) {
  
  } 
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-hidden" id="contact">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <div className="absolute top-0 left-1/4 h-full w-1 rotate-45 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-laserSweep1"></div>
        <div className="absolute top-0 left-2/3 h-full w-0.5 -rotate-45 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-laserSweep2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,185,242,0.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="relative flex flex-1 flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 z-10" x-data="{ isSending: false, isSent: false, submitForm() { this.isSending = true; setTimeout(() => { this.isSending = false; this.isSent = true; }, 500); setTimeout(() => { this.isSent = false; }, 4000); } }">
          
          {/* Header */}
          <div className="w-full max-w-2xl text-center animate-hologramMaterialize" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
              <span className="text-primary">04.</span> Let's Connect
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400">
              Open a secure channel. Transmit your query. I'm ready to collaborate on future-forward projects.
            </p>
          </div>

          {/* Form */}
          <div className="mt-16 w-full max-w-2xl">
            <form
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              {/* Name input */}
              <div className="animate-hologramMaterialize" style={{ animationDelay: '0.5s' }}>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="form-field placeholder-typing block w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-0"
                  id="name"
                  name="name"
                  placeholder="Name_"
                  required
                  type="text"
                />
              </div>
              <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

              {/* Email input */}
              <div className="animate-hologramMaterialize" style={{ animationDelay: '0.6s' }}>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="form-field placeholder-typing block w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-0"
                  id="email"
                  name="email"
                  placeholder="Email_"
                  required
                  type="email"
                />
              </div>
           <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

              {/* Message textarea */}
              <div className="animate-hologramMaterialize" style={{ animationDelay: '0.7s' }}>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  className="form-field placeholder-typing block w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-0"
                  id="message"
                  name="message"
                  placeholder="Message_"
                  required
                  rows="5"
                ></textarea>
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-4 animate-hologramMaterialize" style={{ animationDelay: '0.8s' }}>
                <button
                  className={`send-btn group relative inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-bold text-white transition-all duration-300 w-full sm:w-auto `}
                  type="submit"
                disabled={state.submitting}
                >
                  <div className="send-btn-aura"></div>
                  <div className="transmission-effect"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    {state.succeeded ? (
                      <span className="flex items-center gap-2" style={{ transition: 'ease-out', transitionDuration: '0.3s' }}>
                        <span className="material-symbols-outlined">check_circle</span> Signal Received
                      </span>
                    ):"Send Message"}      
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animate script: You can replace the Alpine.js logic with React state and handlers */}
    </div>
  );
}
