import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Lock } from 'lucide-react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign in — Numada Insiders';
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/insider', { replace: true });
    });
  }, [navigate]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return toast({ title: 'Sign-in failed', description: error.message, variant: 'destructive' });
    navigate('/insider');
  };

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/insider` },
    });
    setLoading(false);
    if (error) return toast({ title: 'Sign-up failed', description: error.message, variant: 'destructive' });
    toast({ title: 'Check your inbox', description: 'Confirm your email to activate your membership.' });
  };

  const google = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/insider` },
    });
    if (error) {
      setLoading(false);
      toast({ title: 'Google sign-in failed', description: error.message, variant: 'destructive' });
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-cream-dark min-h-[70vh]">
        <div className="container-narrow max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-5 h-5 text-accent" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">Numada Insiders</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Free membership. Insider Notes for every island.
              </p>
            </div>

            <Button variant="outline" className="w-full mb-4" onClick={google} disabled={loading}>
              Continue with Google
            </Button>

            <div className="relative my-4 text-center">
              <span className="bg-card px-3 text-xs text-muted-foreground relative z-10">or with email</span>
              <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            </div>

            <Tabs defaultValue="signin">
              <TabsList className="grid grid-cols-2 mb-4 w-full">
                <TabsTrigger value="signin">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Create account</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form onSubmit={signIn} className="space-y-3">
                  <Input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" />
                  <Input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-11" />
                  <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Sign in'}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={signUp} className="space-y-3">
                  <Input type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" />
                  <Input type="password" required placeholder="Choose a password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="h-11" />
                  <Button type="submit" variant="hero" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Create membership'}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Free, no credit card. We'll send a confirmation email.
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
