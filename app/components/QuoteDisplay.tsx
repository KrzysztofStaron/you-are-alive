"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { addQuote } from "../actions/addQuote";
import ParticleBackground from "../ParticleBackground";
import BackgroundMusic from "./BackgroundMusic";
import { getQuotes } from "../actions/getQuotes";

interface QuoteDisplayProps {
  initialQuotes: string[];
}

export default function QuoteDisplay() {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [newQuote, setNewQuote] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const generatorFunction = useCallback(() => {
    setCurrentQuote(prev => Math.floor(Math.random() * quotes.length));
  }, [quotes]);

  useEffect(() => {
    getQuotes().then(q => {
      setQuotes(q);
    });
  }, []);

  useEffect(() => {
    if (quotes.length === 0) return;

    const intervalId = setInterval(generatorFunction, 3000);

    return () => clearInterval(intervalId);
  }, [quotes, generatorFunction]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuote.trim()) {
      await addQuote(newQuote.trim());
      setNewQuote("");
      setIsOpen(false);
      setQuotes(prev => [...prev, newQuote.trim()]);
    }
  };

  return (
    <>
      <ParticleBackground />
      <BackgroundMusic />

      {/* Main content */}
      <div className="z-10 flex flex-col items-center justify-center gap-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold tracking-tight sm:text-8xl"
        >
          You Are Alive
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-light italic text-gray-300 sm:text-2xl"
          >
            {quotes[currentQuote]}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                Add Your Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add Your Quote</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  placeholder="Share your reflection..."
                  value={newQuote}
                  onChange={e => setNewQuote(e.target.value)}
                  className="min-w-[300px]"
                />
                <Button type="submit" disabled={!newQuote.trim()}>
                  Add Quote
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <p className="mt-2 text-sm text-gray-500">{quotes.length} reflections shared</p>
        </div>
      </div>
    </>
  );
}
