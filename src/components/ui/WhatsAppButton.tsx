"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "5517991883103";
const AUTO_OPEN_DELAY = 60000; // 1 minuto em milissegundos

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-abrir o widget após 1 minuto
  useEffect(() => {
    // Verificar se já foi aberto automaticamente nesta sessão
    const alreadyOpened = sessionStorage.getItem("whatsapp-widget-opened");
    
    if (alreadyOpened) {
      setHasAutoOpened(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasAutoOpened && !isOpen) {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem("whatsapp-widget-opened", "true");
      }
    }, AUTO_OPEN_DELAY);

    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-serif text-sm">DP</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">Debora Pieri</p>
                  <p className="text-white/70 text-xs">Arquiteta</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-[#ECE5DD] min-h-[120px]">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800">
                  Olá! 👋 Sou a Debora Pieri, arquiteta. Como posso ajudar você hoje?
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block text-right">
                  Agora
                </span>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#F0F0F0] flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 rounded-full bg-white text-sm text-gray-800 placeholder-gray-400 border-none outline-none"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors"
        aria-label="Abrir chat do WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
