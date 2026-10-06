import { useEffect, useState } from 'react';

let cachedVoice: SpeechSynthesisVoice | null | undefined;

const hasSynth = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

function pickVoice(): SpeechSynthesisVoice | null {
  if (!hasSynth()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  return (
    voices.find((v) => v.lang.replace('_', '-').toLowerCase() === 'zh-cn') ||
    voices.find((v) => v.lang.toLowerCase().startsWith('zh') && !/hk|yue|tw/i.test(v.lang)) ||
    voices.find((v) => /mandarin|chinese/i.test(v.name)) ||
    null
  );
}

export function getVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice === undefined || cachedVoice === null) cachedVoice = pickVoice();
  return cachedVoice;
}

/** Speak Chinese text. Resolves true if audio was started, false if no Mandarin voice exists. */
export function speak(text: string, rate = 0.85): Promise<boolean> {
  return new Promise((resolve) => {
    if (!hasSynth()) return resolve(false);
    const voice = getVoice();
    if (!voice) return resolve(false);
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voice;
    u.lang = voice.lang;
    u.rate = rate;
    u.onend = () => resolve(true);
    u.onerror = () => resolve(false);
    window.speechSynthesis.speak(u);
  });
}

export function stopSpeaking() {
  if (hasSynth()) window.speechSynthesis.cancel();
}

/** Reactive: true once a Mandarin voice is available on this device. */
export function useMandarinVoice(): boolean {
  const [ok, setOk] = useState(() => !!getVoice());
  useEffect(() => {
    if (!hasSynth()) return;
    const update = () => {
      cachedVoice = pickVoice();
      setOk(!!cachedVoice);
    };
    update();
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', update);
  }, []);
  return ok;
}

export async function startRecording(): Promise<{ stop: () => Promise<Blob> }> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const rec = new MediaRecorder(stream);
  const chunks: BlobPart[] = [];
  rec.ondataavailable = (e) => chunks.push(e.data);
  rec.start();
  return {
    stop: () =>
      new Promise<Blob>((resolve) => {
        rec.onstop = () => {
          stream.getTracks().forEach((t) => t.stop());
          resolve(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
        };
        rec.stop();
      }),
  };
}
