# 🎙️ CHATTERBOX
### Real-Time Two-Way Voice Translator PWA

> Speak in any language — the other person hears the translation instantly. Works face-to-face AND over WhatsApp / Zoom / any call via VB-Cable.

🌐 **Live App:** https://sudarshanchakraindia.github.io/CHATTERBOX/

---

## 📱 Install as App (PWA)

Open the link above in Chrome → click **"Install"** banner → works like a native app on Android, Windows, Mac.

---

## 🔁 Two Modes

### 🤝 Face to Face
Place phone between two people. Each taps their own mic. Screen split — Person B's side is flipped so they can read naturally.

```
Person A speaks Hindi  →  Chatterbox  →  Person B hears English
Person B speaks English  →  Chatterbox  →  Person A hears Hindi
```

### 📞 Call Mode (VB-Cable)
Translated voice goes directly into your WhatsApp / Zoom / Meet call.

```
You speak Hindi  →  Chatterbox translates  →  VB-Cable  →  Call mic  →  Other person hears English
```

**Setup (one time):**
1. Download [VB-Cable](https://vb-audio.com/Cable/) → install → restart PC
2. In Chatterbox → Call Mode → set Output to **CABLE Input (VB-Audio)**
3. In WhatsApp/Zoom → Settings → Mic → **CABLE Output (VB-Audio)**
4. Done! Speak — other person hears translated voice live.

---

## 🌍 50+ Languages

| Region | Languages |
|--------|-----------|
| South Asia | Hindi, Bengali, Urdu, Tamil, Telugu, Marathi, Gujarati, Punjabi, Malayalam, Kannada, Nepali, Sinhala |
| Southeast Asia | Thai, Vietnamese, Indonesian, Malay, Filipino, Khmer, Lao, Burmese, Javanese, Sundanese |
| East Asia | Chinese (Simplified & Traditional), Japanese, Korean, Mongolian |
| Global | English, Spanish, French, German, Arabic, Russian, Portuguese, Italian, Turkish, Dutch, Polish, Swedish, Ukrainian, Swahili, Afrikaans |

---

## ⚡ Features

- 🔁 Two-way live translation
- 📞 VB-Cable routing for calls
- 🔊 Voice output in target language
- 📱 Installable PWA — works offline (cached)
- 📜 Conversation history + export
- 🌐 40+ languages
- 🆓 100% free — no API keys, no backend

---

## 🛠️ Tech Stack

| | |
|--|--|
| Speech Recognition | Web Speech API (browser-native) |
| Translation | MyMemory Free API |
| Text-to-Speech | SpeechSynthesis API |
| Call Routing | VB-Cable virtual audio device |
| PWA | Service Worker + Web Manifest |
| Hosting | GitHub Pages |

---

## ⚠️ Browser

Requires **Google Chrome** or **Microsoft Edge** — Firefox/Safari do not support Web Speech API.

---

*No backend. No cost. No limits. Just talk.*
