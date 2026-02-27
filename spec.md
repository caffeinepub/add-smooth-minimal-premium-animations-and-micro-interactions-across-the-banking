# Specification

## Summary
**Goal:** Integrate an AI Chatbot ("DSOUZA AI") and Voice Assistant ("Voice") into the DSOUZA BANK header's top-right control row, alongside the existing Font Size, Language, and Accessibility controls.

**Planned changes:**
- Restructure the header's top-right section to display all five controls in a single horizontal row in this order: [ Font Size Toggle ] [ Language Selector ] [ Accessibility Icon ] [ AI Chatbot ] [ Voice Assistant ], with equal 16–20px gaps and consistent icon sizing
- Remove any existing standalone floating placements of the chatbot or voice assistant from the header area
- Add an "DSOUZA AI" chatbot trigger button (chat/bot icon + label) that opens a glassmorphism-styled slide-down or side panel with deep black text (#111111), multi-language support (English, Hindi, Marathi, Kannada, Tamil), in-panel font size control, and a Senior Mode toggle; panel closes on outside click or re-click
- Add a "Voice" trigger button (microphone icon + label) with a subtle Royal Indigo glow, pulse animation when listening, and a compact voice interaction dropdown using the Web Speech API for speech-to-text and text-to-speech in the selected app language
- Apply visual refinements: all heading text #000000, all body text #111111 (no faded grey), subtle hover animations (scale/opacity) on all five controls, and maintained breathing space for a premium fintech look

**User-visible outcome:** Users see a clean, unified row of five controls in the header. They can open the DSOUZA AI chatbot panel to chat in multiple languages with font size and Senior Mode options, and activate the Voice Assistant to speak and hear responses — all without leaving the header area.
