import { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const schema = z.string().trim().email().max(255);

export const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(email);
    if (!parsed.success) { setStatus('error'); setMsg('Please enter a valid email.'); return; }
    setStatus('loading');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: parsed.data.toLowerCase(), source: 'footer' });
    if (error && error.code !== '23505') { setStatus('error'); setMsg('Something went wrong. Please try again.'); return; }
    setStatus('done'); setMsg("You're in! Watch your inbox on Tuesday."); setEmail('');
  };

  return (
    <form className="space-y-3" onSubmit={submit}>
      <Input type="email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" placeholder="your@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
      <Button type="submit" variant="cta" className="w-full" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Subscribe'}</Button>
      {msg && <p className={`text-xs ${status === 'error' ? 'text-destructive' : 'text-accent'}`}>{msg}</p>}
    </form>
  );
};
