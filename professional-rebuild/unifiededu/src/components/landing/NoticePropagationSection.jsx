import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, Terminal, Wifi, ArrowRight } from 'lucide-react';

function playClickSound(freq = 640, duration = 0.05) {
  if (typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // audio not allowed by browser autoplay policies, fail silently
  }
}

export default function NoticePropagationSection({ onTriggerNoticePulse }) {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [lastDispatched, setLastDispatched] = useState(null);
  const [logStep, setLogStep] = useState(0);

  const handleSimulate = () => {
    if (isBroadcasting) return;
    setIsBroadcasting(true);
    setLogStep(1);
    playClickSound(580, 0.04);

    if (onTriggerNoticePulse) {
      onTriggerNoticePulse(true);
    }

    setTimeout(() => {
      setLogStep(2);
      playClickSound(660, 0.03);
    }, 250);
    setTimeout(() => setLogStep(3), 550);
    setTimeout(() => {
      setLogStep(4);
      playClickSound(880, 0.07);
      setIsBroadcasting(false);
      setLastDispatched(new Date().toLocaleTimeString());
      if (onTriggerNoticePulse) {
        setTimeout(() => onTriggerNoticePulse(false), 800);
      }
    }, 900);
  };

  return (
    <section id="realtime" className="py-20 bg-[#FBF9F5] landing-hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E] font-medium">
              03 // Real-Time WebSocket Mesh
            </span>
            <span className="text-[#8A857D] font-mono-code text-xs">·</span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8A857D]">
              Socket.IO Cluster
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#111215] tracking-tight leading-[1.08]">
            A notice dispatched from the Dean hits 1,400 phones in 12ms.
          </h2>

          <p className="mt-4 font-sans-body text-base text-[#504D48] leading-relaxed">
            No forwarding across unverified WhatsApp groups. When an exam schedule is revised or a 
            severe weather closure is declared, notices propagate through isolated Socket.IO channels 
            with cryptographic receipt logging.
          </p>
        </div>

        {/* Live Simulation Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Dispatch Controller */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E3DDD4] p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F4EFEB]">
                <span className="font-mono-code text-xs font-semibold uppercase text-[#111215] flex items-center gap-2">
                  <Wifi size={14} className="text-[#16A34A]" />
                  <span>Dispatch Terminal</span>
                </span>
                <span className="font-mono-code text-[11px] text-[#8A857D]">
                  DEAN_ROOM_CLUSTER // ACTIVE
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-3 bg-[#FBF9F5] border border-[#E3DDD4]">
                  <p className="font-mono-code text-[11px] text-[#8A857D] uppercase">
                    Subject Circular
                  </p>
                  <p className="text-sm font-semibold text-[#111215] mt-0.5">
                    Autonomous Mid-Term Schedule Revised (Sem 6)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E3DDD4]">
                    <span className="text-[#8A857D] block text-[10px]">ORIGIN</span>
                    <span className="text-[#111215] font-medium">Dean (Academics)</span>
                  </div>
                  <div className="p-2.5 bg-[#FBF9F5] border border-[#E3DDD4]">
                    <span className="text-[#8A857D] block text-[10px]">RECIPIENTS</span>
                    <span className="text-[#111215] font-medium">1,420 Enrolled</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={handleSimulate}
                disabled={isBroadcasting}
                className={`w-full py-3 px-4 font-mono-code text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isBroadcasting
                    ? 'bg-[#111215] text-[#FBF9F5] opacity-80 cursor-wait'
                    : 'bg-[#D9381E] hover:bg-[#b52b14] text-[#FBF9F5] shadow-sm'
                }`}
              >
                <Send size={14} />
                <span>
                  {isBroadcasting ? 'Broadcasting Over Socket.IO...' : 'Simulate Live Notice Broadcast'}
                </span>
              </button>

              {lastDispatched && (
                <p className="text-center font-mono-code text-[11px] text-[#8A857D] mt-2">
                  Last verified broadcast at {lastDispatched} (Roundtrip: 11.8ms)
                </p>
              )}
            </div>
          </div>

          {/* Trace Diagram & Wire Protocol */}
          <div className="lg:col-span-7 bg-[#111215] text-[#FBF9F5] p-6 flex flex-col justify-between border border-[#2A2A2E]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2A2E]">
                <span className="font-mono-code text-xs uppercase text-[#D9381E] font-medium flex items-center gap-2">
                  <Terminal size={14} />
                  <span>Mesh Propagation Log</span>
                </span>
                <span className="font-mono-code text-[11px] text-[#8A857D]">
                  TRANSPORT: WSS / TLS 1.3
                </span>
              </div>

              {/* Step Sequence */}
              <div className="space-y-3 font-mono-code text-xs">
                <div
                  className={`flex items-start gap-3 p-2.5 transition-colors ${
                    logStep >= 1 ? 'bg-[#22242A] text-[#FBF9F5]' : 'text-[#504D48]'
                  }`}
                >
                  <span className="text-[#D9381E]">01</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Event Dispatched from Dean Office</span>
                      <span className="text-[10px] text-[#8A857D]">+0.0ms</span>
                    </div>
                    <p className="text-[11px] text-[#A09D96]">
                      Signed with institutional key; payload serialized to binary buffer.
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-2.5 transition-colors ${
                    logStep >= 2 ? 'bg-[#22242A] text-[#FBF9F5]' : 'text-[#504D48]'
                  }`}
                >
                  <span className="text-[#D9381E]">02</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">WebSocket Gateway Fan-Out</span>
                      <span className="text-[10px] text-[#8A857D]">+4.2ms</span>
                    </div>
                    <p className="text-[11px] text-[#A09D96]">
                      Broadcast into rooms `dept:cse`, `batch:2026`, `faculty:all`.
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-2.5 transition-colors ${
                    logStep >= 3 ? 'bg-[#22242A] text-[#FBF9F5]' : 'text-[#504D48]'
                  }`}
                >
                  <span className="text-[#D9381E]">03</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Faculty Desk Schedule Lock</span>
                      <span className="text-[10px] text-[#8A857D]">+8.1ms</span>
                    </div>
                    <p className="text-[11px] text-[#A09D96]">
                      Timetable conflicts resolved; faculty dashboards refreshed without page reload.
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-2.5 transition-colors ${
                    logStep >= 4 ? 'bg-[#22242A] text-[#FBF9F5]' : 'text-[#504D48]'
                  }`}
                >
                  <span className="text-[#16A34A]">04</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#16A34A]">
                        1,420 Student Devices Synchronized
                      </span>
                      <span className="text-[10px] text-[#16A34A]">+11.8ms</span>
                    </div>
                    <p className="text-[11px] text-[#A09D96]">
                      Push notification delivered; attendance requirement updated immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wire Payload Footer */}
            <div className="mt-4 pt-3 border-t border-[#2A2A2E] flex items-center justify-between text-[11px] font-mono-code text-[#8A857D]">
              <span>PROTOCOL: Socket.IO v4.8</span>
              <span className="text-[#E3DDD4]">DELIVERY: CONFIRMED (0 DROPPED)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

